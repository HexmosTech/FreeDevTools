import type {
  ManPage,
  ManPageContent,
  Category,
  SubCategory,
  Overview,
  RawManPageRow,
  RawCategoryRow,
  RawSubCategoryRow,
  RawOverviewRow,
} from './man-pages-schema';

/**
 * Parse a raw man page row from the database into a typed ManPage object
 */
export function parseManPageRow(row: RawManPageRow): ManPage {
  return {
    id: row.id,
    main_category: row.main_category,
    sub_category: row.sub_category,
    title: row.title,
    slug: row.slug,
    filename: row.filename,
    content: JSON.parse(row.content) as ManPageContent,
  };
}

/**
 * Parse a raw category row from the database into a typed Category object
 */
export function parseCategoryRow(row: RawCategoryRow): Category {
  return {
    name: row.name,
    count: row.count,
    description: row.description,
    keywords: JSON.parse(row.keywords || '[]') as string[],
    path: row.path,
  };
}

/**
 * Parse a raw subcategory row from the database into a typed SubCategory object
 */
export function parseSubCategoryRow(row: RawSubCategoryRow): SubCategory {
  return {
    name: row.name,
    count: row.count,
    description: row.description,
    keywords: JSON.parse(row.keywords || '[]') as string[],
    path: row.path,
  };
}

/**
 * Parse a raw overview row from the database into a typed Overview object
 */
export function parseOverviewRow(row: RawOverviewRow): Overview {
  return {
    id: row.id,
    total_count: row.total_count,
  };
}

/**
 * Convert a ManPage object to a format suitable for database insertion
 */
export function serializeManPageForDb(manPage: Omit<ManPage, 'id'>): Omit<RawManPageRow, 'id'> {
  return {
    main_category: manPage.main_category,
    sub_category: manPage.sub_category,
    title: manPage.title,
    slug: manPage.slug,
    filename: manPage.filename,
    content: JSON.stringify(manPage.content),
  };
}

/**
 * Convert a Category object to a format suitable for database insertion
 */
export function serializeCategoryForDb(category: Category): RawCategoryRow {
  return {
    name: category.name,
    count: category.count,
    description: category.description,
    keywords: JSON.stringify(category.keywords),
    path: category.path,
  };
}

/**
 * Convert a SubCategory object to a format suitable for database insertion
 */
export function serializeSubCategoryForDb(subCategory: SubCategory): RawSubCategoryRow {
  return {
    name: subCategory.name,
    count: subCategory.count,
    description: subCategory.description,
    keywords: JSON.stringify(subCategory.keywords),
    path: subCategory.path,
  };
}

/**
 * Extract a specific section from man page content
 */
export function extractSection(content: ManPageContent, sectionName: string): string | undefined {
  return content[sectionName];
}

/**
 * Get all available sections in a man page
 */
export function getAvailableSections(content: ManPageContent): string[] {
  return Object.keys(content).filter(key => content[key] !== undefined);
}

/**
 * Check if a man page has a specific section
 */
export function hasSection(content: ManPageContent, sectionName: string): boolean {
  return content[sectionName] !== undefined && content[sectionName] !== null;
}

/**
 * Strip HTML tags from content for plain text search
 */
export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

/**
 * Search within man page content
 */
export function searchInContent(content: ManPageContent, query: string): boolean {
  const lowerQuery = query.toLowerCase();
  
  for (const section of Object.values(content)) {
    if (section) {
      const plainText = stripHtmlTags(section).toLowerCase();
      if (plainText.includes(lowerQuery)) {
        return true;
      }
    }
  }
  
  return false;
}