/**
 * SVG Icon Thread Worker - executes hash-based lookups against the icon table
 */

import { parentPort, workerData } from 'worker_threads';
import Database from 'better-sqlite3';
import crypto from 'crypto';
import os from 'os';

const { dbPath, queryUrls, processId, workerId } = workerData;

function getCpuUsage() {
  const cpus = os.cpus();
  return cpus.map((cpu) => {
    const total = Object.values(cpu.times).reduce((acc, time) => acc + time, 0);
    const idle = cpu.times.idle;
    return { total, idle };
  });
}

const startCpu = getCpuUsage();

const db = new Database(dbPath, {
  readonly: true,
  fileMustExist: true
});

db.defaultSafeIntegers(true);
db.pragma('cache_size = -64000');
db.pragma('temp_store = MEMORY');
db.pragma('mmap_size = 268435456');
db.pragma('query_only = ON');

const stmt = db.prepare('SELECT url FROM icon WHERE url_hash = ?');

const startTime = process.hrtime.bigint();
let queryCount = 0;
let totalRowsReturned = 0;
let totalHashTime = 0;

for (let i = 0; i < queryUrls.length; i++) {
  const url = queryUrls[i];
  const hashStart = process.hrtime.bigint();
  const hash = crypto.createHash('sha256').update(url).digest();
  const hashKey = hash.readBigInt64BE(0);
  const hashEnd = process.hrtime.bigint();
  totalHashTime += Number(hashEnd - hashStart);

  const result = stmt.get(hashKey);
  if (result) totalRowsReturned++;
  queryCount++;
}

const endTime = process.hrtime.bigint();
const durationNs = endTime - startTime;
const durationMs = Number(durationNs) / 1_000_000;
const hashTimeMs = totalHashTime / 1_000_000;
const dbTimeMs = durationMs - hashTimeMs;

db.close();

const endCpu = getCpuUsage();
const cpuUsage = endCpu.map((end, i) => {
  const start = startCpu[i];
  const totalDiff = end.total - start.total;
  const idleDiff = end.idle - start.idle;
  return totalDiff > 0 ? ((totalDiff - idleDiff) / totalDiff) * 100 : 0;
});

parentPort.postMessage({
  processId,
  workerId,
  queryCount,
  durationMs,
  hashTimeMs,
  dbTimeMs,
  totalRowsReturned,
  queriesPerSecond: (queryCount / durationMs) * 1000,
  cpuUsage
});

