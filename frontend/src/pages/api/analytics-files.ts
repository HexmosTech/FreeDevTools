import type { APIRoute } from 'astro';
import { readdir } from 'fs/promises';
import { join } from 'path';

export const GET: APIRoute = async () => {
  try {
    const analyticsDir = join(process.cwd(), 'public', 'analytics', 'output');
    const files = await readdir(analyticsDir);

    const jsonFiles = files
      .filter((file) => file.endsWith('.json'))
      .map((file) => ({
        filename: file,
        url: file
          .replace(/_desktop_\d{8}_\d{6}\.json$/, '')
          .replace(/_/g, '/')
          .replace('freedevtools', 'https://hexmos.com/freedevtools'),
        timestamp: file.match(/_(\d{8}_\d{6})\.json$/)?.[1] || 'unknown',
      }))
      .sort((a, b) => b.timestamp.localeCompare(a.timestamp));

    return new Response(JSON.stringify(jsonFiles), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Failed to read directory: ${error.message}` }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
