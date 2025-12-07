
import path from 'path';
import { Worker } from 'worker_threads';

const workerPath = path.resolve('../../db/tldrs/tldr-worker.ts');
const dbPath = path.resolve('../../db/all_dbs/tldr-db-v1.db');

const worker = new Worker(workerPath, {
  workerData: {
    dbPath,
    workerId: 1,
  },
  execArgv: ['--loader', 'ts-node/esm'], // Use ts-node loader if needed, or just run with bun
});

worker.on('message', (message) => {
  if (message.ready) {
    console.log('Worker ready');
    worker.postMessage({
      id: '1',
      type: 'getSitemapUrls',
      params: { limit: 10, offset: 0 },
    });
  } else if (message.id === '1') {
    console.log('Sitemap URLs:', message.result);
    worker.terminate();
  } else if (message.error) {
    console.error('Error:', message.error);
    worker.terminate();
  }
});
