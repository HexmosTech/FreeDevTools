import { query } from './man-pages-worker-pool';
import type {
  Category,
  ManPage,
  ManPageCategory,
  Overview,
  SubCategory,
} from './man-pages-schema';

// Get all man page categories with their descriptions
export async function getManPageCategories(): Promise<ManPageCategory[]> {
  return query.getManPageCategories();
}

// Get categories from the category table
export async function getCategories(): Promise<Category[]> {
  return query.getCategories();
}

// Get subcategories from the sub_category table
export async function getSubCategories(): Promise<SubCategory[]> {
  return query.getSubCategories();
}

// Get overview data from the overview table
export async function getOverview(): Promise<Overview | null> {
  return query.getOverview();
}

export async function getSubCategoriesByMainCategory(
  mainCategory: string
): Promise<SubCategory[]> {
  return query.getSubCategoriesByMainCategory(mainCategory);
}

// Get man pages by category
export async function getManPagesByCategory(category: string): Promise<ManPage[]> {
  return query.getManPagesByCategory(category);
}

// Get man pages by category and subcategory
export async function getManPagesBySubcategory(
  category: string,
  subcategory: string
): Promise<ManPage[]> {
  return query.getManPagesBySubcategory(category, subcategory);
}

// Get single man page by Hash ID
export async function getManPageByHashId(hashId: bigint | string): Promise<ManPage | null> {
  return query.getManPageByHashId(hashId);
}

// Generate static paths for all man pages
export async function generateManPageStaticPaths() {
  return query.generateManPageStaticPaths();
}

// Generate static paths for categories
export async function generateCategoryStaticPaths() {
  return query.generateCategoryStaticPaths();
}

// Generate static paths for subcategories
export async function generateSubcategoryStaticPaths() {
  return query.generateSubcategoryStaticPaths();
}

// Get man page by category, subcategory and filename
export async function getManPageByPath(
  category: string,
  subcategory: string,
  filename: string
): Promise<ManPage | null> {
  return query.getManPageByPath(category, subcategory, filename);
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

// Generate static paths for individual man pages using command parameter
export async function generateCommandStaticPaths(): Promise<Array<{
  params: { category: string; subcategory: string; slug: string };
}>> {
  return query.generateCommandStaticPaths();
}

// Efficient paginated queries for better performance

export async function getSubCategoriesCountByMainCategory(
  mainCategory: string
): Promise<number> {
  return query.getSubCategoriesCountByMainCategory(mainCategory);
}

export async function getSubCategoriesByMainCategoryPaginated(
  mainCategory: string,
  limit: number,
  offset: number
): Promise<SubCategory[]> {
  return query.getSubCategoriesByMainCategoryPaginated(mainCategory, limit, offset);
}

export async function getTotalManPagesCountByMainCategory(
  mainCategory: string
): Promise<number> {
  return query.getTotalManPagesCountByMainCategory(mainCategory);
}

export async function getManPagesBySubcategoryPaginated(
  mainCategory: string,
  subCategory: string,
  limit: number,
  offset: number
): Promise<ManPage[]> {
  return query.getManPagesBySubcategoryPaginated(mainCategory, subCategory, limit, offset);
}

export async function getManPagesCountBySubcategory(
  mainCategory: string,
  subCategory: string
): Promise<number> {
  return query.getManPagesCountBySubcategory(mainCategory, subCategory);
}

// Re-export types for convenience
export type {
  Category,
  ManPage,
  SubCategory,
} from './man-pages-schema';
