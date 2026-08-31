#!/usr/bin/env node

require('dotenv').config();

/**
 * Asset sync script - uploads/syncs assets to configured storage bucket
 *
 * Usage:
 *   npm run sync:assets                    # Sync using env vars
 *   STORAGE_TYPE=gcs npm run sync:assets   # Override storage type
 *
 * Environment variables required based on STORAGE_TYPE:
 *   - local: No additional vars needed (default fallback)
 *   - gcs: GCS_PROJECT_ID, GCS_SERVICE_ACCOUNT_KEY_PATH, STORAGE_BUCKET_NAME
 *
 * Syncs:
 *   - public/assets/*          → {bucket}/assets/*
 *   - public brand files       → {bucket}/{filename}
 *     (logo.png, favicon.ico, brand SVGs, social images)
 *
 * Set NEXT_PUBLIC_CDN_URL to the bucket/CDN origin only (no /assets suffix), e.g.:
 *   https://storage.googleapis.com/my-bucket
 *   https://d12345.cloudfront.net
 */

const fs = require('fs');
const path = require('path');

const storageType = process.env.STORAGE_TYPE || 'local';
const storageBucket = process.env.STORAGE_BUCKET_NAME;
const pathPrefix = process.env.STORAGE_PATH_PREFIX || '';

const ROOT_BRAND_FILES = [
  'logo.png',
  'favicon.ico',
  'og-image.png',
  'apple-touch-icon.png',
];

function collectFiles() {
  const publicDir = path.join(process.cwd(), 'public');
  const assetsDir = path.join(publicDir, 'assets');
  const files = [];

  if (fs.existsSync(assetsDir)) {
    const walkDir = (dir, basePrefix = '') => {
      for (const file of fs.readdirSync(dir)) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isFile()) {
          const remoteKey = pathPrefix
            ? `${pathPrefix}assets/${basePrefix}${file}`
            : `assets/${basePrefix}${file}`;
          files.push({
            localPath: filePath,
            remoteKey,
            label: remoteKey
          });
        } else if (stat.isDirectory()) {
          walkDir(filePath, `${basePrefix}${file}/`);
        }
      }
    };

    walkDir(assetsDir);
  }

  for (const file of ROOT_BRAND_FILES) {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const remoteKey = pathPrefix ? `${pathPrefix}${file}` : file;
      files.push({ localPath: filePath, remoteKey, label: remoteKey });
    }
  }

  return files;
}

async function syncAssets() {
  const files = collectFiles();

  console.log(`\n📦 Bradley Innovations Group - Asset Sync\n`);
  console.log(`  Storage Type: ${storageType}`);
  console.log(`  Files found:  ${files.length}`);
  if (storageBucket) {
    console.log(`  Bucket:       ${storageBucket}`);
  }
  if (pathPrefix) {
    console.log(`  Path Prefix:  ${pathPrefix}`);
  }
  console.log();

  try {
    if (storageType === 'gcs') {
      await syncToGCS(files);
    } else if (storageType === 'local') {
      console.log('✅ Local storage - assets served from /public/assets\n');
    } else {
      console.error(`❌ Unknown storage type: ${storageType}\n`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`\n❌ Sync failed:`, error.message, '\n');
    process.exit(1);
  }
}

async function syncToGCS(files) {
  try {
    const { Storage } = require('@google-cloud/storage');

    if (!storageBucket) {
      throw new Error('STORAGE_BUCKET_NAME is not set');
    }

    const keyPath = process.env.GCS_SERVICE_ACCOUNT_KEY_PATH;
    if (!keyPath || !fs.existsSync(keyPath)) {
      throw new Error(
        `GCS_SERVICE_ACCOUNT_KEY_PATH not found: ${keyPath}\n\n` +
          `To use GCS:\n` +
          `  1. Create a service account key: https://console.cloud.google.com/iam-admin/serviceaccounts\n` +
          `  2. Download as JSON\n` +
          `  3. Set GCS_SERVICE_ACCOUNT_KEY_PATH to the file path\n` +
          `  4. Set GCS_PROJECT_ID to your project ID`
      );
    }

    const storage = new Storage({
      projectId: process.env.GCS_PROJECT_ID,
      keyFilename: keyPath,
    });

    const bucket = storage.bucket(storageBucket);

    if (files.length === 0) {
      console.log('ℹ️  No files to sync\n');
      return;
    }

    const destination = pathPrefix
      ? `gs://${storageBucket}/${pathPrefix}`
      : `gs://${storageBucket}`;
    console.log(`Syncing ${files.length} file(s) to ${destination}\n`);

    let uploaded = 0;
    let skipped = 0;

    for (const { localPath, remoteKey, label } of files) {
      const gcsFile = bucket.file(remoteKey);
      const [exists] = await gcsFile.exists();

      if (exists) {
        console.log(`  ⏭️  ${label}`);
        skipped++;
      } else {
        console.log(`  ⬆️  ${label}`);
        await bucket.upload(localPath, {
          destination: remoteKey,
          metadata: {
            cacheControl: 'public, max-age=31536000',
          },
        });
        uploaded++;
      }
    }

    console.log(`\n✅ GCS sync complete: ${uploaded} uploaded, ${skipped} skipped\n`);
  } catch (error) {
    throw new Error(
      `GCS sync failed: ${error.message}\n\n` +
        `To use GCS storage, install the client:\n` +
        `  npm install @google-cloud/storage`
    );
  }
}

syncAssets();
