import { query } from '../../db/tldrs/tldr-worker-pool';

// Helper to hash string to 8-byte int (matching Go logic)
async function getHash(key: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(key);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  // Take first 8 bytes
  const bytes = hashArray.slice(0, 8);
  // Convert to 64-bit signed integer (BigEndian)
  const view = new DataView(new Uint8Array(bytes).buffer);
  return view.getBigInt64(0, false).toString(); // Return as string to preserve precision
}

export async function getTldrPlatformCommandsPaginated(
  platform: string,
  page: number = 1
) {
  const hashKey = `${platform}/${page}`;
  const hash = await getHash(hashKey);
  const result = await query.getMainPage(hash);
  return result;
}

export async function getAllTldrPlatforms(page: number = 1) {
  const hashKey = `index/${page}`;
  const hash = await getHash(hashKey);
  const result = await query.getMainPage(hash);
  return result;
}

export async function getTldrPage(platform: string, slug: string) {
  const hashKey = `${platform}/${slug}`;
  const hash = await getHash(hashKey);
  const page = await query.getPage(hash);
  
  if (!page) return null;

  return {
    ...page,
    ...page.metadata,
  };
}

export async function getTldrOverview() {
  return await query.getOverview();
}