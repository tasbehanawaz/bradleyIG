/**
 * CDN URL utility — provides asset URLs from either local or cloud storage.
 * Set NEXT_PUBLIC_CDN_URL to a CDN endpoint, or omit for local assets.
 */

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL;

export function getCdnUrl(filename: string): string {
  if (!CDN_URL) {
    return `/assets/${filename}`;
  }
  return `${CDN_URL.replace(/\/$/, "")}/assets/${filename}`;
}

export function getImageUrl(filename: string): string {
  return getCdnUrl(filename);
}
