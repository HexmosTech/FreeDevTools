import crypto from 'crypto';

export function buildIconUrl(cluster: string, name: string): string {
  const segments = [cluster, name]
    .filter((segment) => typeof segment === 'string' && segment.length > 0)
    .map((segment) => encodeURIComponent(segment));
  return '/' + segments.join('/');
}

export function hashUrlToKey(url: string): string {
  const hash = crypto.createHash('sha256').update(url).digest();
  return hash.readBigInt64BE(0).toString();
}

export function hashNameToKey(name: string): string {
  const hash = crypto.createHash('sha256').update(name).digest();
  return hash.readBigInt64BE(0).toString();
}
