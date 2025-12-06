# Overview

Currently I want to find avg of db response time for tldr pages 

Already have a script serve/pmd_logs.py which was used to calculate avg response time for pmd pages.


now modify this script for identifying avg response time for tldr pages.


```
[TLDR_DB] Initializing worker pool with 2 workers...
[TLDR_DB] Worker pool initialized in 128ms
[Auth Middleware] ENABLE_SIGNIN env value: "undefined", enabled: false, Path: /freedevtools/tldr/common/pgmtost4
[Auth Middleware] Signin disabled, skipping auth check
[TLDR_DB][2025-12-06T14:09:57.606Z] Dispatching getPage params={"platform":"common","slug":"pgmtost4"}
[2025-12-06T14:09:57.608Z] [TLDR_DB] Worker 0 START getPage params={"platform":"common","slug":"pgmtost4"}
[2025-12-06T14:09:57.616Z] [TLDR_DB] Worker 0 END getPage finished in 8ms
[TLDR_DB][2025-12-06T14:09:57.616Z] getPage completed in 10ms
[BASE_LAYOUT] Start rendering Convert PGM to ST-4 - Format Images | Online Free DevTools by Hexmos at 2025-12-06T14:09:57.640Z
19:39:57 [200] /tldr/common/pgmtost4 7948ms

```
Current logs are from tldr pages.




## After Removing Body

25-12-06T14:54:57.563548Z  INFO pmdaemon::process: Process astro-4321 started with PID: 51698
Started process 'astro-4321' with ID: 452b784c-fe1f-4d35-9934-b6a411027b68
2025-12-06T14:54:57.564381Z  INFO pmdaemon::manager: Allocated port 4322 to process astro-4322
2025-12-06T14:54:57.564411Z  INFO pmdaemon::process: Starting process: astro-4322
2025-12-06T14:54:57.568546Z  INFO pmdaemon::process: Process astro-4322 started with PID: 51700
Started process 'astro-4322' with ID: 11213e67-1e8c-48a1-9876-1f3b7a0f7ec0
Started 2 processes from config file
pmdaemon list
2025-12-06T14:54:59.594399Z  INFO pmdaemon: PMDaemon v0.1.4 starting
2025-12-06T14:54:59.876916Z  INFO pmdaemon::manager: Loaded 2 process configurations
┌──────────┬────────────┬────────┬───────┬────────┬──────────┬───────┬────────┬──────┐
│ ID       ┆ Name       ┆ Status ┆ PID   ┆ Uptime ┆ Restarts ┆ CPU % ┆ Memory ┆ Port │
╞══════════╪════════════╪════════╪═══════╪════════╪══════════╪═══════╪════════╪══════╡
│ 11213e67 ┆ astro-4322 ┆ online ┆ 51700 ┆ 0s     ┆ 0        ┆ 0.0   ┆ -      ┆ 4322 │
├╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌┤
│ 452b784c ┆ astro-4321 ┆ online ┆ 51698 ┆ 0s     ┆ 0        ┆ 0.0   ┆ -      ┆ 4321 │
└──────────┴────────────┴────────┴───────┴────────┴──────────┴───────┴────────┴──────┘
./pmd-pin.sh
Pinning PID 51698 (astro-4321) to CPU 0
pid 51698's current affinity list: 0-3
pid 51698's new affinity list: 0
Pinning PID 51700 (astro-4322) to CPU 1
pid 51700's current affinity list: 0-3
pid 51700's new affinity list: 1
./pmd-verifypin.sh
Checking CPU pinning for PMDaemon apps: astro-4321 astro-4322
--------------------------------------
App: astro-4321
  PID: 51698 | pid 51698's current affinity list: 0

App: astro-4322
  PID: 51700 | pid 51700's current affinity list: 1

--------------------------------------
Done.
⬇️  Server up -----------
⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------
hey -z 10s -host hexmos-local.com http://127.0.0.1/freedevtools/tldr/adb/adb

Summary:
  Total:	10.0773 secs
  Slowest:	0.4417 secs
  Fastest:	0.0196 secs
  Average:	0.1151 secs
  Requests/sec:	431.7625
  

Response time histogram:
  0.020 [1]	|
  0.062 [621]	|■■■■■■■■■■■■■■■
  0.104 [1614]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.146 [1179]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.188 [508]	|■■■■■■■■■■■■■
  0.231 [190]	|■■■■■
  0.273 [89]	|■■
  0.315 [75]	|■■
  0.357 [33]	|■
  0.399 [37]	|■
  0.442 [4]	|


Latency distribution:
  10% in 0.0573 secs
  25% in 0.0735 secs
  50% in 0.1024 secs
  75% in 0.1389 secs
  90% in 0.1877 secs
  95% in 0.2377 secs
  99% in 0.3527 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0001 secs, 0.0196 secs, 0.4417 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0001 secs, 0.0000 secs, 0.0381 secs
  resp wait:	0.1141 secs, 0.0151 secs, 0.4414 secs
  resp read:	0.0007 secs, 0.0001 secs, 0.0496 secs

Status code distribution:
  [200]	4351 responses



Peeking at 4 log files in /home/gk/.pmdaemon/logs...

Request count table:
+------------+------------+--------------+---------------+----------+
| Process    |   Requests |   Dispatches |   Worker Logs |   Errors |
+============+============+==============+===============+==========+
| astro-4321 |          0 |         2167 |          4334 |        0 |
+------------+------------+--------------+---------------+----------+
| astro-4322 |          0 |         2184 |          4368 |        0 |
+------------+------------+--------------+---------------+----------+

Total aggregated:
  total lines: 26112
  requests:    0
  dispatches:  4351
  worker logs: 8702
  errors:      0

Dispatches represent each time the worker pool received a query and handed it off to a worker thread (logged via [SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB|TLDR_DB] Dispatching <queryName>).

Query Count Details process wise:
+------------+-----------+--------------------------------------------------+
| Process    |   getPage |   getPage params={"platform":"adb","slug":"adb"} |
+============+===========+==================================================+
| astro-4321 |      2167 |                                             2167 |
+------------+-----------+--------------------------------------------------+
| astro-4322 |      2184 |                                             2184 |
+------------+-----------+--------------------------------------------------+

Query Duration Details process wise:
+---------+---------+----------+----------+-----------+
| Query   |   Count |   Avg ms |   Max ms |   Sum min |
+=========+=========+==========+==========+===========+
| getPage |    4348 |     28.1 |      172 |      2.04 |
+---------+---------+----------+----------+-----------+

Overall window: 2025-12-06T14:55:04.533000+00:00 → 2025-12-06T14:55:14.353000+00:00
Total coverage: 0:00:09.820000
⬇️ Requesting tldr 10sec
hey -z 10s -host hexmos-local.com http://127.0.0.1/freedevtools/tldr/adb

Summary:
  Total:	10.4494 secs
  Slowest:	1.7798 secs
  Fastest:	0.1264 secs
  Average:	0.6972 secs
  Requests/sec:	70.1477
  

Response time histogram:
  0.126 [1]	|
  0.292 [24]	|■■■■
  0.457 [101]	|■■■■■■■■■■■■■■■■■■
  0.622 [154]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.788 [224]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.953 [126]	|■■■■■■■■■■■■■■■■■■■■■■■
  1.118 [58]	|■■■■■■■■■■
  1.284 [25]	|■■■■
  1.449 [12]	|■■
  1.614 [5]	|■
  1.780 [3]	|■


Latency distribution:
  10% in 0.3748 secs
  25% in 0.5263 secs
  50% in 0.6778 secs
  75% in 0.8459 secs
  90% in 1.0186 secs
  95% in 1.1422 secs
  99% in 1.4638 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0003 secs, 0.1264 secs, 1.7798 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0003 secs, 0.0000 secs, 0.0123 secs
  resp wait:	0.6899 secs, 0.1229 secs, 1.7779 secs
  resp read:	0.0059 secs, 0.0016 secs, 0.0564 secs

Status code distribution:
  [200]	733 responses



Peeking at 4 log files in /home/gk/.pmdaemon/logs...

Request count table:
+------------+------------+--------------+---------------+----------+
| Process    |   Requests |   Dispatches |   Worker Logs |   Errors |
+============+============+==============+===============+==========+
| astro-4321 |          0 |         2546 |          5092 |        0 |
+------------+------------+--------------+---------------+----------+
| astro-4322 |          0 |         2538 |          5076 |        0 |
+------------+------------+--------------+---------------+----------+

Total aggregated:
  total lines: 31976
  requests:    0
  dispatches:  5084
  worker logs: 10168
  errors:      0

Dispatches represent each time the worker pool received a query and handed it off to a worker thread (logged via [SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB|TLDR_DB] Dispatching <queryName>).

Query Count Details process wise:
+------------+---------------+--------------------------------------------------+-----------+--------------------------------------------------+
| Process    |   getMainPage |   getMainPage params={"platform":"adb","page":1} |   getPage |   getPage params={"platform":"adb","slug":"adb"} |
+============+===============+==================================================+===========+==================================================+
| astro-4321 |           379 |                                              379 |      2167 |                                             2167 |
+------------+---------------+--------------------------------------------------+-----------+--------------------------------------------------+
| astro-4322 |           354 |                                              354 |      2184 |                                             2184 |
+------------+---------------+--------------------------------------------------+-----------+--------------------------------------------------+

Query Duration Details process wise:
+-------------+---------+----------+----------+-----------+
| Query       |   Count |   Avg ms |   Max ms |   Sum min |
+=============+=========+==========+==========+===========+
| getPage     |    4348 |     28.1 |      172 |      2.04 |
+-------------+---------+----------+----------+-----------+
| getMainPage |     733 |    313.9 |     1137 |      3.84 |
+-------------+---------+----------+----------+-----------+

Overall window: 2025-12-06T14:55:04.533000+00:00 → 2025-12-06T14:55:27.777000+00:00
Total coverage: 0:00:23.244000
10s Requesting tldr main
hey -z 10s -host hexmos-local.com http://127.0.0.1/freedevtools/tldr

Summary:
  Total:	11.4074 secs
  Slowest:	1.9906 secs
  Fastest:	0.0813 secs
  Average:	0.7989 secs
  Requests/sec:	58.3833
  

Response time histogram:
  0.081 [1]	|
  0.272 [22]	|■■■■■
  0.463 [63]	|■■■■■■■■■■■■■
  0.654 [138]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.845 [193]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  1.036 [119]	|■■■■■■■■■■■■■■■■■■■■■■■■■
  1.227 [66]	|■■■■■■■■■■■■■■
  1.418 [34]	|■■■■■■■
  1.609 [12]	|■■
  1.800 [12]	|■■
  1.991 [6]	|■


Latency distribution:
  10% in 0.4215 secs
  25% in 0.5787 secs
  50% in 0.7709 secs
  75% in 0.9753 secs
  90% in 1.2127 secs
  95% in 1.4018 secs
  99% in 1.8291 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0018 secs, 0.0813 secs, 1.9906 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0002 secs, 0.0000 secs, 0.0312 secs
  resp wait:	0.7901 secs, 0.0773 secs, 1.9882 secs
  resp read:	0.0066 secs, 0.0019 secs, 0.0508 secs

Status code distribution:
  [200]	666 responses



Peeking at 4 log files in /home/gk/.pmdaemon/logs...

Request count table:
+------------+------------+--------------+---------------+----------+
| Process    |   Requests |   Dispatches |   Worker Logs |   Errors |
+============+============+==============+===============+==========+
| astro-4321 |          0 |         2906 |          5812 |        0 |
+------------+------------+--------------+---------------+----------+
| astro-4322 |          0 |         2844 |          5688 |        0 |
+------------+------------+--------------+---------------+----------+

Total aggregated:
  total lines: 36638
  requests:    0
  dispatches:  5750
  worker logs: 11500
  errors:      0

Dispatches represent each time the worker pool received a query and handed it off to a worker thread (logged via [SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB|TLDR_DB] Dispatching <queryName>).

Query Count Details process wise:
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+
| Process    |   getMainPage |   getMainPage params={"platform":"adb","page":1} |   getMainPage params={"platform":"index","page":1} |   getPage |   getPage params={"platform":"adb","slug":"adb"} |
+============+===============+==================================================+====================================================+===========+==================================================+
| astro-4321 |           739 |                                              379 |                                                360 |      2167 |                                             2167 |
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+
| astro-4322 |           660 |                                              354 |                                                306 |      2184 |                                             2184 |
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+

Query Duration Details process wise:
+-------------+---------+----------+----------+-----------+
| Query       |   Count |   Avg ms |   Max ms |   Sum min |
+=============+=========+==========+==========+===========+
| getPage     |    4348 |     28.1 |      172 |      2.04 |
+-------------+---------+----------+----------+-----------+
| getMainPage |    1399 |    320.2 |     1137 |      7.47 |
+-------------+---------+----------+----------+-----------+

Overall window: 2025-12-06T14:55:04.533000+00:00 → 2025-12-06T14:55:42.117000+00:00
Total coverage: 0:00:37.584000
1min Requesting tldr 1min
hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/tldr/npm/npm-fund/
^[[F
Summary:
  Total:	60.1223 secs
  Slowest:	0.5615 secs
  Fastest:	0.0149 secs
  Average:	0.0942 secs
  Requests/sec:	530.2025
  

Response time histogram:
  0.015 [1]	|
  0.070 [9937]	|■■■■■■■■■■■■■■■■■■■■■■■■■
  0.124 [16046]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.179 [4520]	|■■■■■■■■■■■
  0.234 [949]	|■■
  0.288 [298]	|■
  0.343 [90]	|
  0.398 [16]	|
  0.452 [16]	|
  0.507 [1]	|
  0.562 [3]	|


Latency distribution:
  10% in 0.0499 secs
  25% in 0.0643 secs
  50% in 0.0860 secs
  75% in 0.1136 secs
  90% in 0.1460 secs
  95% in 0.1731 secs
  99% in 0.2471 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0149 secs, 0.5615 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0001 secs, 0.0000 secs, 0.0277 secs
  resp wait:	0.0933 secs, 0.0074 secs, 0.5612 secs
  resp read:	0.0007 secs, 0.0001 secs, 0.0437 secs

Status code distribution:
  [200]	31877 responses



Peeking at 4 log files in /home/gk/.pmdaemon/logs...

Request count table:
+------------+------------+--------------+---------------+----------+
| Process    |   Requests |   Dispatches |   Worker Logs |   Errors |
+============+============+==============+===============+==========+
| astro-4321 |          0 |        18973 |         37946 |        0 |
+------------+------------+--------------+---------------+----------+
| astro-4322 |          0 |        18654 |         37308 |        0 |
+------------+------------+--------------+---------------+----------+

Total aggregated:
  total lines: 227900
  requests:    0
  dispatches:  37627
  worker logs: 75254
  errors:      0

Dispatches represent each time the worker pool received a query and handed it off to a worker thread (logged via [SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB|TLDR_DB] Dispatching <queryName>).

Query Count Details process wise:
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+-------------------------------------------------------+
| Process    |   getMainPage |   getMainPage params={"platform":"adb","page":1} |   getMainPage params={"platform":"index","page":1} |   getPage |   getPage params={"platform":"adb","slug":"adb"} |   getPage params={"platform":"npm","slug":"npm-fund"} |
+============+===============+==================================================+====================================================+===========+==================================================+=======================================================+
| astro-4321 |           739 |                                              379 |                                                360 |     18234 |                                             2167 |                                                 16067 |
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+-------------------------------------------------------+
| astro-4322 |           660 |                                              354 |                                                306 |     17994 |                                             2184 |                                                 15810 |
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+-------------------------------------------------------+

Query Duration Details process wise:
+-------------+---------+----------+----------+-----------+
| Query       |   Count |   Avg ms |   Max ms |   Sum min |
+=============+=========+==========+==========+===========+
| getPage     |   36217 |     21.8 |      172 |     13.15 |
+-------------+---------+----------+----------+-----------+
| getMainPage |    1399 |    320.2 |     1137 |      7.47 |
+-------------+---------+----------+----------+-----------+

Overall window: 2025-12-06T14:55:04.533000+00:00 → 2025-12-06T14:56:46.257000+00:00
Total coverage: 0:01:41.724000
5min Requesting tldr 5min
hey -z 5m -host hexmos-local.com http://127.0.0.1/freedevtools/tldr/npm/npm-fund/
^C
Summary:
  Total:	137.1782 secs
  Slowest:	0.4614 secs
  Fastest:	0.0061 secs
  Average:	0.0946 secs
  Requests/sec:	528.5095
  

Response time histogram:
  0.006 [1]	|
  0.052 [9227]	|■■■■■■■■■■
  0.097 [35898]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.143 [18525]	|■■■■■■■■■■■■■■■■■■■■■
  0.188 [5496]	|■■■■■■
  0.234 [2113]	|■■
  0.279 [856]	|■
  0.325 [238]	|
  0.370 [99]	|
  0.416 [32]	|
  0.461 [15]	|


Latency distribution:
  10% in 0.0485 secs
  25% in 0.0633 secs
  50% in 0.0849 secs
  75% in 0.1137 secs
  90% in 0.1515 secs
  95% in 0.1841 secs
  99% in 0.2560 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0061 secs, 0.4614 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0001 secs, 0.0000 secs, 0.0599 secs
  resp wait:	0.0935 secs, 0.0057 secs, 0.4612 secs
  resp read:	0.0008 secs, 0.0001 secs, 0.1262 secs

Status code distribution:
  [200]	72500 responses


## After Adding Body

