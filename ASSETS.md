# Asset Management Guide

This guide covers how to add, organize, and sync assets (images, logos, documents) for the Bradley Innovations Group website.

## File Organization

### Local Storage (Default)

Add files to these directories:

```
/public/
├── assets/
│   ├── logos/           # Company and brand logos
│   ├── images/          # Photos, diagrams, illustrations
│   ├── documents/       # PDFs, whitepapers
│   └── social/          # Social media images, OG images
├── logo.png             # Main brand logo
├── favicon.ico          # Favicon
└── og-image.png         # Open Graph image for social sharing
```

### File Naming

Use lowercase, descriptive names with hyphens:
- ✅ `jmbx-logo.png`, `joseph-bradley.jpg`, `identic-ai-diagram.svg`
- ❌ `JMBXlogo.png`, `Joseph Bradley.jpg`, `diagram_v2_FINAL.psd`

### Supported Formats

- **Images**: PNG, JPG, WebP, SVG, GIF
- **Documents**: PDF
- **Vectors**: SVG (preferred for logos)

## Adding Assets to the Site

### Step 1: Add Files Locally

```bash
# Add a company logo
cp ~/Downloads/acurast-logo.png ./public/assets/logos/

# Add an image
cp ~/Downloads/team-photo.jpg ./public/assets/images/

# Add a document
cp ~/Downloads/responsible-ai.pdf ./public/assets/documents/
```

### Step 2: Use Assets in Code

Reference assets using the `getCdnUrl()` utility:

```typescript
import Image from 'next/image';
import { getCdnUrl } from '@/lib/cdn';

export default function Companies() {
  const logoUrl = getCdnUrl('logos/acurast-logo.png');
  
  return (
    <img 
      src={logoUrl} 
      alt="Acurast AI Solutions" 
      width={200}
    />
  );
}
```

Or with Next.js Image component:

```typescript
import Image from 'next/image';
import { getCdnUrl } from '@/lib/cdn';

export default function Hero() {
  return (
    <Image
      src={getCdnUrl('images/hero.jpg')}
      alt="Bradley Innovations Group"
      width={1200}
      height={600}
    />
  );
}
```

### Step 3: Test Locally

```bash
npm run dev
# Visit http://localhost:3000
# Verify assets load from /assets/*
```

## Syncing Assets

### Default: Local Fallback

No action needed. Assets are served from `/public/assets/` automatically.

```bash
npm run sync:assets
# Output: ✅ Local storage - assets served from /public/assets
```

### Cloud Storage: Google Cloud Storage

When ready to migrate to cloud storage:

#### 1. Create GCS Bucket

```bash
gsutil mb gs://bradleyIG-assets-prod/
gsutil versioning set on gs://bradleyIG-assets-prod/
```

#### 2. Configure CORS

Save as `cors.json`:
```json
[
  {
    "origin": [
      "https://bradleyinnovations.group",
      "https://www.bradleyinnovations.group",
      "http://localhost:3000"
    ],
    "method": ["GET", "HEAD", "OPTIONS"],
    "responseHeader": ["Content-Type", "Cache-Control"],
    "maxAgeSeconds": 3600
  }
]
```

Apply CORS:
```bash
gsutil cors set cors.json gs://bradleyIG-assets-prod/
```

#### 3. Create Service Account

```bash
# Create service account
gcloud iam service-accounts create bradley-assets-sync \
  --display-name="BIG Assets Sync"

# Grant bucket permissions
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:bradley-assets-sync@YOUR_PROJECT.iam.gserviceaccount.com" \
  --role="roles/storage.objectCreator"

# Create key
gcloud iam service-accounts keys create ./service-account-key.json \
  --iam-account=bradley-assets-sync@YOUR_PROJECT.iam.gserviceaccount.com
```

#### 4. Update .env

```bash
STORAGE_TYPE=gcs
STORAGE_BUCKET_NAME=bradleyIG-assets-prod
STORAGE_PATH_PREFIX=
GCS_PROJECT_ID=YOUR_PROJECT_ID
GCS_SERVICE_ACCOUNT_KEY_PATH=./service-account-key.json
NEXT_PUBLIC_CDN_URL=https://storage.googleapis.com/bradleyIG-assets-prod
```

#### 5. Sync Assets

```bash
npm run sync:assets
```

Output:
```
📦 Bradley Innovations Group - Asset Sync

  Storage Type: gcs
  Files found:  12
  Bucket:       bradleyIG-assets-prod

Syncing 12 file(s) to gs://bradleyIG-assets-prod/

  ⬆️  assets/logos/jmbx-logo.png
  ⬆️  assets/logos/acurast-logo.png
  ⬆️  assets/images/team-photo.jpg
  ⏭️  logo.png (already exists)

✅ GCS sync complete: 3 uploaded, 1 skipped
```

### Cloud Storage: CloudFront (AWS)

If using CloudFront + S3:

1. Upload files to S3 bucket manually or via AWS CLI
2. Create CloudFront distribution
3. Update `.env`:

```bash
NEXT_PUBLIC_CDN_URL=https://d12345.cloudfront.net
STORAGE_TYPE=local
```

## Image Optimization

### Next.js Image Component

For best performance, use Next.js `Image` component:

```typescript
import Image from 'next/image';
import { getCdnUrl } from '@/lib/cdn';

<Image
  src={getCdnUrl('images/hero.jpg')}
  alt="Description"
  width={1200}
  height={600}
  priority  // Load immediately for above-fold images
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
/>
```

### Image Requirements

- **Logos**: SVG preferred, PNG (2x resolution for retina)
- **Photos**: JPG (80-85% quality) or WebP
- **Screenshots**: PNG with alpha
- **Social/OG**: 1200×630px minimum

### Optimization Tools

Before committing large images:

```bash
# Install ImageMagick
brew install imagemagick

# Compress JPEG
convert input.jpg -quality 85 -strip output.jpg

# Convert to WebP
cwebp input.jpg -o input.webp

# Optimize PNG
pngquant input.png --quality 65-80 -o input-opt.png
```

## Asset Cache & Versioning

### Cache Strategy

- **Local**: Browser cache 1 hour
- **GCS**: Public cache, max-age=31536000 (1 year)

Assets are content-addressed (immutable), so long cache is safe. Change the URL if you need to force refresh.

### Versioning Assets

If you need to update an asset:

```bash
# Local: just replace the file
cp new-logo.png ./public/assets/logos/jmbx-logo.png
npm run dev  # Cache will invalidate

# GCS: rename with timestamp or version
mv jmbx-logo.png jmbx-logo-v2.png
npm run sync:assets
# Update code: getCdnUrl('logos/jmbx-logo-v2.png')
```

## Troubleshooting

### Assets Not Loading Locally

1. Check file exists:
```bash
ls public/assets/logos/
```

2. Verify relative paths:
```typescript
// Correct
getCdnUrl('logos/logo.png')          // /assets/logos/logo.png

// Incorrect
getCdnUrl('/assets/logos/logo.png')  // double /assets/assets/
getCdnUrl('assets/logos/logo.png')   // missing /assets/ prefix
```

3. Check browser console for 404 errors

### GCS Sync Fails

1. Verify credentials:
```bash
gcloud auth application-default login
gcloud config set project YOUR_PROJECT_ID
```

2. Check service account permissions:
```bash
gsutil iam ch \
  serviceAccount:bradley-assets-sync@PROJECT.iam.gserviceaccount.com:objectCreator \
  gs://bradleyIG-assets-prod/
```

3. Verify key path:
```bash
ls -la ./service-account-key.json
```

4. Check bucket name in `.env` matches exactly

### CORS Issues (when using GCS)

If you see CORS errors in browser console:

1. Verify CORS config:
```bash
gsutil cors get gs://bradleyIG-assets-prod/
```

2. Check allowed origins include your domain
3. Re-apply CORS config and wait 1 minute for propagation

## Security Notes

- **Service Account Key**: Add `service-account-key.json` to `.gitignore` (already included)
- **Public Bucket**: GCS bucket should allow public read access only
- **HTTPS Only**: Always use HTTPS URLs in production
- **Domain Whitelisting**: Use CORS to restrict access to your domain

## Related Files

- `lib/cdn.ts` — CDN URL utility
- `scripts/sync-assets.js` — Asset sync script
- `.env` — Storage configuration
- `.gitignore` — Excludes keys and large files
