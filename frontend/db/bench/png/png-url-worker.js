/**
 * PNG Icon Worker Process - spawns thread workers for icon hash lookups
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

process.send({ ready: true });

process.on('message', async (config) => {
  const { processId, workerCount, queriesPerWorker, queryUrls, dbPath } = config;
  const workers = [];
  const workerResults = [];
  const urlsPerWorker = Math.floor(queryUrls.length / workerCount);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  for (let i = 0; i < workerCount; i++) {
    const workerQueryUrls = queryUrls.slice(i * urlsPerWorker, (i + 1) * urlsPerWorker);
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const worker = new Worker(path.join(__dirname, 'png-url-thread-worker.js'), {
      workerData: {
        dbPath,
        queryUrls: workerQueryUrls,
        processId,
        workerId: i
      }
    });

    const workerPromise = new Promise((resolve, reject) => {
      worker.on('message', (result) => {
        workerResults.push(result);
        resolve();
      });

      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker ${i} exited with code ${code}`));
        }
      });
    });

    workers.push(workerPromise);
  }

  await Promise.all(workers);

  const totalQueries = workerResults.reduce((sum, r) => sum + r.queryCount, 0);
  const totalRows = workerResults.reduce((sum, r) => sum + r.totalRowsReturned, 0);
  const totalDuration = workerResults.reduce((sum, r) => sum + r.durationMs, 0);

  process.send({
    processId,
    workerCount,
    totalQueries,
    totalRows,
    totalDuration,
    workerResults
  });

  process.exit(0);
});

