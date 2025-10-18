import type { APIRoute } from 'astro';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const GET: APIRoute = async ({ url }) => {
  const filename = url.searchParams.get('file');

  if (!filename) {
    return new Response(
      JSON.stringify({ error: 'Filename parameter is required' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const analyticsDir = join(process.cwd(), 'scripts/analytics/output');
    const filePath = join(analyticsDir, filename);

    const content = await readFile(filePath, 'utf-8');
    const data = JSON.parse(content);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Failed to read file: ${error.message}` }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
