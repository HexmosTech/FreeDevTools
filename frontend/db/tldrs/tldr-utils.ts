import { query } from './tldr-worker-pool';

export async function getOverview() {
  return query.getOverview();
}

export async function getMainPage(hash: string) {
  return query.getMainPage(hash);
}

export async function getPage(hash: string) {
  return query.getPage(hash);
}