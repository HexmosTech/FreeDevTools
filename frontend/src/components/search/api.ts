import type { SearchResponse } from './types';

export async function searchUtilities(
  query: string,
  categories: string[] = [],
  page: number = 1
): Promise<SearchResponse> {
  try {
    const searchBody: {
      q: string;
      limit: number;
      offset: number;
      facets: string[];
      attributesToRetrieve: string[];
      filter?: string;
    } = {
      q: query,
      limit: 30,
      offset: (page - 1) * 30,
      facets: ['category'], // Always include facets for category filtering
      attributesToRetrieve: [
        'id',
        'name',
        'title',
        'description',
        'category',
        'path',
        'image',
        'code',
      ], // Only retrieve essential fields for better performance
    };

    // Add category filter if specified
    if (categories.length > 0) {
      const filterConditions: string[] = categories.map((category) => {
        if (category === 'emoji') {
          return "category = 'emojis'";
        }
        return `category = '${category}'`;
      });

      if (filterConditions.length === 1) {
        searchBody.filter = filterConditions[0];
      } else {
        searchBody.filter = filterConditions.join(' OR ');
      }
    }

    const response = await fetch(
      'https://search.apps.hexmos.com/indexes/freedevtools/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer 509923210c1fbc863d8cd8d01ffc062bac61aa503944c5d65b155e6cafdaddb5',
        },
        body: JSON.stringify(searchBody),
      }
    );

    if (!response.ok) {
      throw new Error('Search failed: ' + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Search error:', error);
    return {
      hits: [],
      query: '',
      processingTimeMs: 0,
      limit: 0,
      offset: 0,
      estimatedTotalHits: 0,
    };
  }
}

