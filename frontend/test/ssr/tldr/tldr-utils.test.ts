
import { afterAll, describe, expect, it } from 'bun:test';
import {
  getAllTldrClusters,
  getTldrCluster,
  getTldrCommandsByClusterPaginated,
  getTldrOverview,
  getTldrPage,
  getTldrSitemapCount,
  getTldrSitemapUrls,
} from '../../../db/tldrs/tldr-utils';
import { cleanupWorkers } from '../../../db/tldrs/tldr-worker-pool';

// Helper to measure execution time
async function measureTime<T>(fn: () => Promise<T>): Promise<{ result: T; duration: number }> {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  return { result, duration: end - start };
}

describe('TLDR SSR Utils', () => {
  // Ensure workers are cleaned up after tests
  afterAll(async () => {
    await cleanupWorkers();
  });

  it('getTldrOverview should return total count > 0', async () => {
    const { result, duration } = await measureTime(() => getTldrOverview());
    console.log(`getTldrOverview took ${duration.toFixed(2)}ms`);
    expect(result).toBeGreaterThan(0);
    expect(typeof result).toBe('number');
  });

  it('getAllTldrClusters should return list of clusters', async () => {
    const { result, duration } = await measureTime(() => getAllTldrClusters());
    console.log(`getAllTldrClusters took ${duration.toFixed(2)}ms`);
    expect(result.length).toBeGreaterThan(0);
    
    // Check for known clusters
    const common = result.find(c => c.name === 'common');
    const linux = result.find(c => c.name === 'linux');
    expect(common).toBeDefined();
    expect(linux).toBeDefined();
    expect(common?.count).toBeGreaterThan(0);
  });

  it('getTldrCluster should return correct metadata for "common"', async () => {
    const { result, duration } = await measureTime(() => getTldrCluster('common'));
    console.log(`getTldrCluster('common') took ${duration.toFixed(2)}ms`);
    expect(result).toBeDefined();
    expect(result?.name).toBe('common');
    expect(result?.count).toBeGreaterThan(0);
    expect(result?.preview_commands.length).toBeGreaterThan(0);
  });

  it('getTldrCluster should return null for non-existent cluster', async () => {
    const { result, duration } = await measureTime(() => getTldrCluster('non-existent-cluster-123'));
    console.log(`getTldrCluster('non-existent') took ${duration.toFixed(2)}ms`);
    expect(result).toBeNull();
  });

  it('getTldrCommandsByClusterPaginated should return commands for "common"', async () => {
    const { result, duration } = await measureTime(() => getTldrCommandsByClusterPaginated('common', 1, 10));
    console.log(`getTldrCommandsByClusterPaginated('common', 1, 10) took ${duration.toFixed(2)}ms`);
    expect(result.length).toBeGreaterThan(0);
    expect(result.length).toBeLessThanOrEqual(10);
    
    // Check structure
    const cmd = result[0];
    expect(cmd.name).toBeDefined();
    expect(cmd.url).toBeDefined();
    expect(cmd.description).toBeDefined();
  });

  it('getTldrCommandsByClusterPaginated should return empty array for out of range page', async () => {
    const { result, duration } = await measureTime(() => getTldrCommandsByClusterPaginated('common', 9999, 10));
    console.log(`getTldrCommandsByClusterPaginated('common', 9999, 10) took ${duration.toFixed(2)}ms`);
    expect(result).toEqual([]);
  });

  it('getTldrPage should return content for "common/tar"', async () => {
    const { result, duration } = await measureTime(() => getTldrPage('common', 'tar'));
    console.log(`getTldrPage('common', 'tar') took ${duration.toFixed(2)}ms`);
    expect(result).toBeDefined();
    expect(result?.html_content).toContain('tar');
    expect(result?.metadata).toBeDefined();
    expect(result?.metadata.title).toBeDefined();
  });

  it('getTldrPage should return null for non-existent page', async () => {
    const { result, duration } = await measureTime(() => getTldrPage('common', 'non-existent-command-123'));
    console.log(`getTldrPage('common', 'non-existent') took ${duration.toFixed(2)}ms`);
    expect(result).toBeNull();
  });

  it('getTldrSitemapCount should return total count', async () => {
    const { result, duration } = await measureTime(() => getTldrSitemapCount());
    console.log(`getTldrSitemapCount took ${duration.toFixed(2)}ms`);
    expect(result).toBeGreaterThan(0);
  });

  it('getTldrSitemapUrls should return URLs', async () => {
    const { result, duration } = await measureTime(() => getTldrSitemapUrls(10, 0));
    console.log(`getTldrSitemapUrls(10, 0) took ${duration.toFixed(2)}ms`);
    expect(result.length).toBe(10);
    expect(result[0]).toBe('/freedevtools/tldr/'); // Root should be first
  });
});
