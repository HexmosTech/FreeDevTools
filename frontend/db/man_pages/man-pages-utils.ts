import { query } from './man-pages-worker-pool';
import type {
  ManPage,
  ManPageCategory,
  Overview,
} from './man-pages-schema';

// Get all man page categories with their descriptions
export async function getManPageCategories(): Promise<ManPageCategory[]> {
  return query.getManPageCategories();
}

// Get overview data from the overview table
export async function getOverview(): Promise<Overview | null> {
  return query.getOverview();
}

// Get single man page by Hash ID
export async function getManPageByHashId(hashId: bigint | string): Promise<ManPage | null> {
  return query.getManPageByHashId(hashId);
}


// Get man page by command name (first part of title)
export async function getManPageByCommandName(
  category: string,
  subcategory: string,
  commandName: string
): Promise<ManPage | null> {
  return query.getManPageByCommandName(category, subcategory, commandName);
}

// Alias for better naming - get man page by slug
export async function getManPageBySlug(
  category: string,
  subcategory: string,
  slug: string
): Promise<ManPage | null> {
  return getManPageByCommandName(category, subcategory, slug);
}

export async function getSubCategoriesByMainCategoryPaginated(
  mainCategory: string,
  limit: number,
  offset: number
): Promise<{ name: string, description: string, count: number }[]> {
  return query.getSubCategoriesByMainCategoryPaginated(mainCategory, limit, offset);
}

export async function getTotalSubCategoriesManPagesCount(
  mainCategory: string
): Promise<{ man_pages_count: number, sub_category_count: number }> {
  return query.getTotalSubCategoriesManPagesCount(mainCategory);
}

export async function getManPagesList(
  mainCategory: string,
  subCategory: string,
  limit: number,
  offset: number
): Promise<ManPage[]> {
  return query.getManPagesList(mainCategory, subCategory, limit, offset);
}

export async function getManPagesCountInSubCategory(
  mainCategory: string,
  subCategory: string
): Promise<number> {
  return query.getManPagesCountInSubCategory(mainCategory, subCategory);
}

export async function getAllManPagesPaginated(
  limit: number,
  offset: number
): Promise<{ main_category: string; sub_category: string; slug: string }[]> {
  return query.getAllManPagesPaginated(limit, offset);
}

// Re-export types for convenience
export type {
  Category,
  ManPage,
  SubCategory,
} from './man-pages-schema';
