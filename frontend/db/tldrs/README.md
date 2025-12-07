# TLDR Database Layer

This directory contains the database interaction logic for the TLDR feature. It uses a **Worker Pool** architecture to handle SQLite queries efficiently and non-blocking.

## Architecture

The system is designed to offload database operations to background threads, preventing the main event loop from being blocked by synchronous SQLite calls.

### Components

1.  **`tldr-worker-pool.ts`**:
    *   Manages a pool of worker threads (default: 2).
    *   Handles round-robin distribution of queries to workers.
    *   Manages worker lifecycle (initialization, termination).
    *   Exposes the `query` object with methods for each database operation.

2.  **`tldr-worker.ts`**:
    *   The code running inside each worker thread.
    *   Opens a read-only connection to the SQLite database (`tldr-db-v1.db`).
    *   Prepares SQL statements for performance.
    *   Executes queries based on messages received from the pool.

3.  **`tldr-utils.ts`**:
    *   A high-level wrapper around the worker pool.
    *   Provides typed functions for the frontend to consume.
    *   Imports interfaces from `tldr-schema.ts`.

4.  **`tldr-schema.ts`**:
    *   TypeScript interfaces defining the shape of data returned by the database.

## Query Design

The queries are optimized for specific frontend use cases:

### 1. Fetching a Cluster (`getTldrCluster`)
*   **Goal**: Get metadata for a platform (e.g., "common").
*   **Query**: Selects from the `cluster` table by hash.
*   **Returns**: Name, total count, and a small list of preview commands.

### 2. Paginated Commands (`getTldrCommandsByClusterPaginated`)
*   **Goal**: Get a specific page of commands for a platform.
*   **Query**:
    ```sql
    SELECT url, metadata FROM pages
    WHERE url LIKE ?
    ORDER BY url
    LIMIT ? OFFSET ?
    ```
*   **Logic**: Uses SQL `LIMIT` and `OFFSET` to fetch only the requested chunk of records, avoiding loading thousands of commands into memory.

### 3. Fetching a Single Page (`getTldrPage`)
*   **Goal**: Get the content for a specific command.
*   **Query**: Selects from `pages` by `url_hash`.
*   **Returns**: Rendered HTML content and full metadata.

### 4. Sitemap Generation
*   **`getTldrSitemapCount`**: Counts total URLs for the sitemap index.
*   **`getTldrSitemapUrls`**: Fetches a chunk of 5000 URLs for individual sitemap files using `LIMIT` and `OFFSET`.

## Data Flow

1.  **Frontend** calls a function in `tldr-utils.ts` (e.g., `getTldrCluster('common')`).
2.  **Utils** calls `query.getMainPage('common')` in `tldr-worker-pool.ts`.
3.  **Pool** selects a worker and sends a message.
4.  **Worker** receives the message, executes the prepared statement, and sends the result back.
5.  **Pool** resolves the promise, returning data to the frontend.
