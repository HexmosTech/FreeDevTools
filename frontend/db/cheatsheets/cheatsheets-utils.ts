import { query } from './cheatsheets-worker-pool';
import type {
  Category,
  Cheatsheet,
} from './cheatsheets-schema';

export interface CategoryWithPreviews extends Category {
  cheatsheetCount: number;
  previewCheatsheets: Array<{ slug: string }>;
}

export async function getTotalCheatsheets(): Promise<number> {
  return query.getTotalCheatsheets();
}

export async function getTotalCategories(): Promise<number> {
  return query.getTotalCategories();
}

export async function getAllCategories(
  page: number = 1,
  itemsPerPage: number = 30
): Promise<CategoryWithPreviews[]> {
  return query.getAllCategories(page, itemsPerPage);
}

export async function getCheatsheetsByCategory(categorySlug: string): Promise<Cheatsheet[]> {
  return query.getCheatsheetsByCategory(categorySlug);
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return query.getCategoryBySlug(slug);
}

export async function getCheatsheetByCategoryAndSlug(
  categorySlug: string,
  cheatsheetSlug: string
): Promise<Cheatsheet | null> {
  return query.getCheatsheetByCategoryAndSlug(categorySlug, cheatsheetSlug);
}
