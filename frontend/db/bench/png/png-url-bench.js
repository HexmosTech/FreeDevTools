#!/usr/bin/env node
/**
 * PNG Icon URL Lookup Benchmark
 *
 * Runs the same multi-process / multi-worker hash benchmark as `url-bench.js`
 * but targets `png-icons-db-v1.db` and the pre-built `png_urls.json`.
 */

import Database from 'better-sqlite3';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  totalQueries: 10000,
  cpus: 2,
  cpuPins: [0, 1],
  workers: [1, 2],
  dbPath: path.join(__dirname, 'png-icons-db-v1.db'),
  urlsPath: path.join(__dirname, 'png_urls.json')
};

const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '-h' || arg === '--help') {
    console.log(`
╔════════════════════════════════════════════════════════════════════╗
║             PNG Icon URL Lookup Benchmark                           ║
╚════════════════════════════════════════════════════════════════════╝

USAGE:
  node png-url-bench.js [options]

OPTIONS:
  --queries <number>     Total queries to execute (default: 10000)
  --workers <list>       Worker counts to test (default: 1,2)
  -h, --help             Show this help

APPROACH:
  1. Use the pre-built png_urls.json list of icon URLs
  2. Hash each lookup URL using SHA256 (first 8 bytes)
  3. Lookup hashes directly against the 'icon' table (no rowid)

CPU PINNING:
  CPU 0: Worker process 1
  CPU 1: Worker process 2

EXAMPLE:
  node png-url-bench.js --queries 20000 --workers 1,2
`);
    process.exit(0);
  } else if (arg === '--queries') {
    config.totalQueries = parseInt(args[++i]);
  } else if (arg === '--workers') {
    config.workers = args[++i].split(',').map((n) => parseInt(n.trim()));
  }
}

async function runBenchmark(workerCount, urls) {
  const processes = [];
  const results = [];

  const totalWorkers = config.cpus * workerCount;
  const queriesPerWorker = Math.floor(config.totalQueries / totalWorkers);

  process.stdout.write(
    `   ${config.cpus}p × ${workerCount}w (${totalWorkers} workers, ${queriesPerWorker} queries each) ... `
  );

  const queryUrls = [];
  for (let i = 0; i < config.totalQueries; i++) {
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    queryUrls.push(randomUrl.url);
  }

  const queriesPerProcess = Math.floor(queryUrls.length / config.cpus);

  for (let i = 0; i < config.cpus; i++) {
    const cpuPin = config.cpuPins[i];
    const processQueries = queryUrls.slice(
      i * queriesPerProcess,
      (i + 1) * queriesPerProcess
    );

    const childProcess = spawn(
      'taskset',
      [
        '-c',
        cpuPin.toString(),
        process.execPath,
        path.join(__dirname, 'png-url-worker.js')
      ],
      { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] }
    );

    const processPromise = new Promise((resolve, reject) => {
      let ready = false;

      childProcess.on('message', (msg) => {
        if (msg.ready) {
          ready = true;
          childProcess.send({
            processId: i,
            workerCount,
            queriesPerWorker,
            queryUrls: processQueries,
            dbPath: config.dbPath,
            cpuAffinity: cpuPin
          });
        } else {
          results.push(msg);
          resolve();
        }
      });

      childProcess.on('error', reject);
      childProcess.on('exit', (code) => {
        if (code !== 0 && !ready) {
          reject(new Error(`Process ${i} exited with code ${code}`));
        }
      });
    });

    processes.push(processPromise);
  }

  const benchStart = process.hrtime.bigint();
  await Promise.all(processes);
  const benchEnd = process.hrtime.bigint();
  const wallClockMs = Number(benchEnd - benchStart) / 1_000_000;

  const totalQueriesExecuted = results.reduce((sum, r) => sum + r.totalQueries, 0);
  const overallQPS = (totalQueriesExecuted / wallClockMs) * 1000;

  console.log(`✓ ${(wallClockMs / 1000).toFixed(3)}s`);

  return {
    configName: `${config.cpus}p-${workerCount}w`,
    processCount: config.cpus,
    workerCount,
    totalWorkers,
    queriesPerWorker,
    totalQueries: totalQueriesExecuted,
    durationMs: wallClockMs.toFixed(2),
    durationSec: (wallClockMs / 1000).toFixed(3),
    overallQPS: overallQPS.toFixed(2),
    avgQueryTimeMicrosec: ((wallClockMs / totalQueriesExecuted) * 1000).toFixed(2)
  };
}

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════════════╗');
  console.log('║             PNG Icon URL Lookup Benchmark                          ║');
  console.log('╚════════════════════════════════════════════════════════════════════╝\n');

  if (!fs.existsSync(config.dbPath) || !fs.existsSync(config.urlsPath)) {
    console.error('❌ png-icons-db-v1.db or png_urls.json is missing. Run png-icon-hashes first.');
    process.exit(1);
  }

  const db = new Database(config.dbPath, { readonly: true, fileMustExist: true });
  const iconRows = db.prepare('SELECT COUNT(*) AS count FROM icon').get().count;
  db.close();

  const urls = JSON.parse(fs.readFileSync(config.urlsPath, 'utf8'));

  console.log('📋 Configuration:');
  console.log(`   Icon rows:           ${iconRows.toLocaleString()}`);
  console.log(`   URL entries:         ${urls.length.toLocaleString()}`);
  console.log(`   Total queries:       ${config.totalQueries.toLocaleString()} (fixed)`);
  console.log(`   Worker configs:      [${config.workers.join(', ')}]`);
  console.log(`   CPU pinning:         Workers on CPU [${config.cpuPins.join(', ')}]`);
  console.log(`   Hash algorithm:      SHA256 (first 8 bytes as INTEGER)`);
  console.log(`   Table structure:     WITHOUT ROWID (clustered by url_hash)`);

  console.log('⚡ Running benchmarks...\n');

  const allResults = [];
  for (const workerCount of config.workers) {
    const result = await runBenchmark(workerCount, urls);
    allResults.push(result);
  }

  const sortedResults = [...allResults].sort(
    (a, b) => parseFloat(a.durationMs) - parseFloat(b.durationMs)
  );

  console.log('\n' + '═'.repeat(110));
  console.log('📈 RESULTS - PNG ICON URL LOOKUP PERFORMANCE');
  console.log('═'.repeat(110));
  console.log('');
  console.log('┌──────┬────────────┬──────────┬──────────┬──────────────┬──────────────┬─────────────┬──────────────┐');
  console.log('│ Rank │ Config     │ Proc×Wrk │ Queries  │ Duration (s) │ QPS          │ Avg Query   │ vs Slowest   │');
  console.log('├──────┼────────────┼──────────┼──────────┼──────────────┼──────────────┼─────────────┼──────────────┤');

  const slowestDuration = parseFloat(sortedResults[sortedResults.length - 1].durationMs);

  sortedResults.forEach((result, index) => {
    const rank = (index + 1).toString().padStart(4);
    const configName = result.configName.padEnd(10);
    const procWork = `${result.processCount}×${result.workerCount}`.padStart(8);
    const queries = result.totalQueries.toLocaleString().padStart(8);
    const duration = result.durationSec.padStart(12);
    const qps = parseFloat(result.overallQPS).toLocaleString(undefined, { maximumFractionDigits: 0 }).padStart(12);
    const avgQuery = `${result.avgQueryTimeMicrosec}µs`.padStart(11);
    const speedup = `${(slowestDuration / parseFloat(result.durationMs)).toFixed(2)}x`.padStart(12);

    console.log(`│ ${rank} │ ${configName} │ ${procWork} │ ${queries} │ ${duration} │ ${qps} │ ${avgQuery} │ ${speedup} │`);
  });

  console.log('└──────┴────────────┴──────────┴──────────┴──────────────┴──────────────┴─────────────┴──────────────┘');

  const fastest = sortedResults[0];

  console.log('\n📌 Summary:');
  console.log(`   🎯 Workload:        ${fastest.totalQueries.toLocaleString()} URL lookups`);
  console.log(`   ⚡ Best config:     ${fastest.configName} → ${fastest.durationSec}s`);
  console.log(`   🚀 Peak QPS:        ${parseFloat(fastest.overallQPS).toLocaleString()} queries/second`);
  console.log(`   ⏱️  Avg lookup:      ${fastest.avgQueryTimeMicrosec}µs per URL`);
  console.log('\n✅ PNG icon URL lookup approach validated!\n');
}

main().catch((err) => {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
});
