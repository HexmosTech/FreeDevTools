/**
 * Worker thread for SQLite queries using bun:sqlite
 * Handles all query types for the TLDR database
 */

import { Database } from 'bun:sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
import { parentPort, workerData } from 'worker_threads';
import { hashUrlToKey } from '../../src/lib/hash-utils';

const logColors = {
  reset: '\u001b[0m',
  timestamp: '\u001b[35m',
  dbLabel: '\u001b[34m',
} as const;

const highlight = (text: string, color: string) => `${color}${text}${logColors.reset}`;

const { dbPath, workerId } = workerData;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Open database connection with aggressive read optimizations
const db = new Database(dbPath, { readonly: true });

// Wrap all PRAGMAs in try-catch to avoid database locking issues with multiple processes
const setPragma = (pragma: string) => {
  try {
    db.run(pragma);
  } catch (e) {
    // Ignore PRAGMA errors
  }
};

setPragma('PRAGMA cache_size = -64000'); // 64MB cache per connection
setPragma('PRAGMA temp_store = MEMORY');
setPragma('PRAGMA mmap_size = 268435456'); // 256MB memory-mapped I/O
setPragma('PRAGMA query_only = ON'); // Read-only mode
setPragma('PRAGMA page_size = 4096'); // Optimal page size

const statements = {
  getOverview: db.prepare('SELECT total_count FROM overview WHERE id = 1'),

  getMainPage: db.prepare(
    `SELECT data, total_count FROM main_pages WHERE hash = ?`
  ),

  getPage: db.prepare(
    `SELECT html_content, metadata FROM pages WHERE url_hash = ?`
  ),
};

// clusterPreviews is taking 0.5 seconds need to improve db structure for this
// pageByClusterAndName is taking 1 ms 


// Signal ready
parentPort?.postMessage({ ready: true });

interface QueryMessage {
  id: string;
  type: string;
  params: any;
}

// Handle incoming queries
parentPort?.on('message', (message: QueryMessage) => {
  const { id, type, params } = message;
  const startTime = new Date();
  const timestampLabel = highlight(`[${startTime.toISOString()}]`, logColors.timestamp);
  const dbLabel = highlight('[TLDR_DB]', logColors.dbLabel);
  console.log(`${timestampLabel} ${dbLabel} Worker ${workerId} START ${type} params=${JSON.stringify(params)}`);

  try {
    let result: any;

    switch (type) {
      case 'getOverview': {
        const row = statements.getOverview.get() as { total_count: number } | undefined;
        result = row?.total_count ?? 0;
        break;
      }

      case 'getMainPage': {
        const { platform, page } = params;
        const hashKey = `${platform}/${page}`;
        const hash = hashUrlToKey(hashKey);
        const row = statements.getMainPage.get(hash) as { data: string; total_count: number } | undefined;
        if (row) {
          result = {
            ...JSON.parse(row.data),
            total_count: row.total_count
          };
        } else {
          result = null;
        }
        break;
      }

      case 'getPage': {
        const { platform, slug } = params;
        const hashKey = `${platform}/${slug}`;
        const hash = hashUrlToKey(hashKey);
        const row = statements.getPage.get(hash) as { html_content: string; metadata: string } | undefined;
        if (row) {
          result = {
            html_content: row.html_content,
            ...JSON.parse(row.metadata)
          };
        } else {
          result = null;
        }
        break;
      }

      case 'getTldrContent': {
        const { platform, slug } = params;

        // Check if slug is a page number (pagination) or a command name
        const isNumericPage = /^\d+$/.test(slug);
        const pageNumber = isNumericPage ? parseInt(slug, 10) : null;
        const command = !isNumericPage ? slug : null;

        if (pageNumber !== null) {
          // Handle pagination: /tldr/[platform]/[page]
          const hashKey = `${platform}/${pageNumber}`;
          const hash = hashUrlToKey(hashKey);
          const row = statements.getMainPage.get(hash) as { data: string; total_count: number } | undefined;

          if (!row) {
            result = null;
            break;
          }

          const data = JSON.parse(row.data);
          const { commands: currentPageCommands, total: totalCommands, total_pages: totalPages, page: currentPage } = data;

          // SEO and Breadcrumbs
          const seoTitle = `${platform} Commands - Page ${currentPage} | Online Free DevTools by Hexmos`;
          const seoDescription = `Browse page ${currentPage} of ${totalPages} pages in our ${platform} command documentation. Learn ${platform} commands quickly with practical examples.`;
          const canonical = `https://hexmos.com/freedevtools/tldr/${platform}/${currentPage}/`;

          const breadcrumbItems = [
            { label: 'Free DevTools', href: '/freedevtools/' },
            { label: 'TLDR', href: '/freedevtools/tldr/' },
            { label: platform, href: `/freedevtools/tldr/${platform}/` },
            { label: `Page ${currentPage}` },
          ];

          const paginatedPlatformKeywords = [
            `${platform} commands`,
            `${platform} cli`,
            `${platform} documentation`,
            'command line',
            'cli documentation',
            'terminal commands',
            `page ${currentPage}`,
            'pagination',
            'command reference',
          ];

          result = {
            type: 'list',
            data: {
              currentPage,
              totalPages,
              totalCommands,
              currentPageCommands,
              breadcrumbItems,
              seoTitle,
              seoDescription,
              canonical,
              paginatedPlatformKeywords,
            }
          };
        } else if (command) {
          // Handle command: /tldr/[platform]/[command]
          const hashKey = `${platform}/${command}`;
          const hash = hashUrlToKey(hashKey);
          const row = statements.getPage.get(hash) as { html_content: string; metadata: string } | undefined;

          if (!row) {
            result = null;
            break;
          }

          const metadata = JSON.parse(row.metadata);
          const htmlContent = row.html_content;
          const title = metadata.title || command;
          const description = metadata.description || `Documentation for ${command} command`;

          const breadcrumbItems = [
            { label: 'Free DevTools', href: '/freedevtools/' },
            { label: 'TLDR', href: '/freedevtools/tldr/' },
            { label: platform, href: `/freedevtools/tldr/${platform}/` },
            { label: command },
          ];

          result = {
            type: 'command',
            data: {
              page: { ...metadata, html_content: htmlContent },
              title,
              description,
              breadcrumbItems,
            }
          };
        } else {
          result = null;
        }
        break;
      }

      case 'getTldrIndex': {
        const { page } = params;
        const hashKey = `index/${page}`;
        const hash = hashUrlToKey(hashKey);
        const row = statements.getMainPage.get(hash) as { data: string; total_count: number } | undefined;

        if (!row) {
          result = null;
          break;
        }

        const data = JSON.parse(row.data);
        const {
          platforms: currentPagePlatforms,
          total: totalPlatforms,
          total_pages: totalPages,
          page: currentPage,
          total_commands: totalCommands,
        } = data;

        const itemsPerPage = 30;

        const breadcrumbItems = [
          { label: 'Free DevTools', href: '/freedevtools/' },
          { label: 'TLDR', href: '/freedevtools/tldr/' },
          ...(currentPage > 1 ? [{ label: `Page ${currentPage}` }] : []),
        ];

        const seoTitle = currentPage > 1
          ? `TLDR - Page ${currentPage} | Online Free DevTools by Hexmos`
          : `TLDR - Simplified Man Pages | Online Free DevTools by Hexmos`;

        const seoDescription = currentPage > 1
          ? `Browse page ${currentPage} of ${totalPages} pages in our TLDR command documentation. Learn command-line tools across different platforms.`
          : `Simplified and community-driven man pages. Practical examples for command-line tools.`;

        const canonical = currentPage > 1
          ? `https://hexmos.com/freedevtools/tldr/${currentPage}/`
          : `https://hexmos.com/freedevtools/tldr/`;

        const paginatedKeywords = [
          'tldr',
          'command line',
          'cli documentation',
          'terminal commands',
          ...(currentPage > 1 ? [`page ${currentPage}`, 'pagination'] : []),
          'command reference',
          'cli documentation',
        ];

        result = {
          currentPage,
          totalPages,
          totalPlatforms,
          currentPagePlatforms,
          totalCommands,
          breadcrumbItems,
          seoTitle,
          seoDescription,
          canonical,
          paginatedKeywords,
          itemsPerPage,
        };
        break;
      }

      default:
        throw new Error(`Unknown query type: ${type}`);
    }

    parentPort?.postMessage({
      id,
      result,
    });
    const endTime = new Date();
    const endTimestamp = highlight(`[${endTime.toISOString()}]`, logColors.timestamp);
    const endDbLabel = highlight('[TLDR_DB]', logColors.dbLabel);
    console.log(
      `${endTimestamp} ${endDbLabel} Worker ${workerId} END ${type} finished in ${endTime.getTime() - startTime.getTime()
      }ms`
    );
  } catch (error: any) {
    parentPort?.postMessage({
      id,
      error: error.message || String(error),
    });
  }
});
