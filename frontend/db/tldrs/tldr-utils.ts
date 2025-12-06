import { query } from './tldr-worker-pool';



export async function getTldrPlatformCommandsPaginated(
  platform: string,
  page: number = 1
) {
  const result = await query.getMainPage(platform, page);
  return result;
}

export async function getAllTldrPlatforms(page: number = 1) {
  const result = await query.getMainPage('index', page);
  return result;
}

export async function getTldrPage(platform: string, slug: string) {
  const page = await query.getPage(platform, slug);

  if (!page) return null;

  return {
    ...page,
    ...page.metadata,
  };
}

export async function getTldrOverview() {
  return await query.getOverview();
}