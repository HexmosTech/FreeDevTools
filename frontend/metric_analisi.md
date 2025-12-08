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

./pmd-pin.sh
Pinning PID 64886 (astro-4321) to CPU 0
pid 64886's current affinity list: 0-3
pid 64886's new affinity list: 0
Pinning PID 64887 (astro-4322) to CPU 1
pid 64887's current affinity list: 0-3
pid 64887's new affinity list: 1
./pmd-verifypin.sh
Checking CPU pinning for PMDaemon apps: astro-4321 astro-4322
--------------------------------------
App: astro-4321
  PID: 64886 | pid 64886's current affinity list: 0

App: astro-4322
  PID: 64887 | pid 64887's current affinity list: 1

--------------------------------------
Done.
⬇️  Server up -----------
⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------
hey -z 10s -host hexmos-local.com http://127.0.0.1/freedevtools/tldr/adb/adb

Summary:
  Total:	10.4520 secs
  Slowest:	1.7567 secs
  Fastest:	0.1498 secs
  Average:	0.6029 secs
  Requests/sec:	80.7500
  

Response time histogram:
  0.150 [1]	|
  0.311 [51]	|■■■■■■■■
  0.471 [268]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.632 [218]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.793 [148]	|■■■■■■■■■■■■■■■■■■■■■■
  0.953 [67]	|■■■■■■■■■■
  1.114 [37]	|■■■■■■
  1.275 [26]	|■■■■
  1.435 [17]	|■■■
  1.596 [5]	|■
  1.757 [6]	|■


Latency distribution:
  10% in 0.3486 secs
  25% in 0.4049 secs
  50% in 0.5324 secs
  75% in 0.7229 secs
  90% in 0.9819 secs
  95% in 1.1733 secs
  99% in 1.5549 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0009 secs, 0.1498 secs, 1.7567 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0005 secs, 0.0000 secs, 0.0371 secs
  resp wait:	0.5955 secs, 0.1480 secs, 1.6928 secs
  resp read:	0.0049 secs, 0.0015 secs, 0.0367 secs

Status code distribution:
  [200]	844 responses



Peeking at 4 log files in /home/gk/.pmdaemon/logs...

Request count table:
+------------+------------+--------------+---------------+----------+
| Process    |   Requests |   Dispatches |   Worker Logs |   Errors |
+============+============+==============+===============+==========+
| astro-4321 |          0 |          437 |           874 |        0 |
+------------+------------+--------------+---------------+----------+
| astro-4322 |          0 |          407 |           814 |        0 |
+------------+------------+--------------+---------------+----------+

Total aggregated:
  total lines: 5914
  requests:    0
  dispatches:  844
  worker logs: 1688
  errors:      0

Dispatches represent each time the worker pool received a query and handed it off to a worker thread (logged via [SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB|TLDR_DB] Dispatching <queryName>).

Query Count Details process wise:
+------------+-----------+--------------------------------------------------+
| Process    |   getPage |   getPage params={"platform":"adb","slug":"adb"} |
+============+===========+==================================================+
| astro-4321 |       437 |                                              437 |
+------------+-----------+--------------------------------------------------+
| astro-4322 |       407 |                                              407 |
+------------+-----------+--------------------------------------------------+

Query Duration Details process wise:
+---------+---------+----------+----------+-----------+
| Query   |   Count |   Avg ms |   Max ms |   Sum min |
+=========+=========+==========+==========+===========+
| getPage |     843 |    255.6 |     1373 |      3.59 |
+---------+---------+----------+----------+-----------+

Overall window: 2025-12-06T15:30:44.519000+00:00 → 2025-12-06T15:30:54.588000+00:00
Total coverage: 0:00:10.069000
⬇️ Requesting tldr 10sec
hey -z 10s -host hexmos-local.com http://127.0.0.1/freedevtools/tldr/adb

Summary:
  Total:	10.4763 secs
  Slowest:	0.7539 secs
  Fastest:	0.0799 secs
  Average:	0.4250 secs
  Requests/sec:	114.5440
  

Response time histogram:
  0.080 [1]	|
  0.147 [17]	|■■
  0.215 [21]	|■■
  0.282 [46]	|■■■■■
  0.350 [159]	|■■■■■■■■■■■■■■■■■■
  0.417 [351]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.484 [294]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.552 [162]	|■■■■■■■■■■■■■■■■■■
  0.619 [101]	|■■■■■■■■■■■■
  0.687 [36]	|■■■■
  0.754 [12]	|■


Latency distribution:
  10% in 0.3083 secs
  25% in 0.3618 secs
  50% in 0.4180 secs
  75% in 0.4872 secs
  90% in 0.5651 secs
  95% in 0.6098 secs
  99% in 0.6914 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0002 secs, 0.0799 secs, 0.7539 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0002 secs, 0.0000 secs, 0.0060 secs
  resp wait:	0.4201 secs, 0.0757 secs, 0.7521 secs
  resp read:	0.0045 secs, 0.0016 secs, 0.0319 secs

Status code distribution:
  [200]	1200 responses



Peeking at 4 log files in /home/gk/.pmdaemon/logs...

Request count table:
+------------+------------+--------------+---------------+----------+
| Process    |   Requests |   Dispatches |   Worker Logs |   Errors |
+============+============+==============+===============+==========+
| astro-4321 |          0 |         1032 |          2064 |        0 |
+------------+------------+--------------+---------------+----------+
| astro-4322 |          0 |         1012 |          2024 |        0 |
+------------+------------+--------------+---------------+----------+

Total aggregated:
  total lines: 14314
  requests:    0
  dispatches:  2044
  worker logs: 4088
  errors:      0

Dispatches represent each time the worker pool received a query and handed it off to a worker thread (logged via [SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB|TLDR_DB] Dispatching <queryName>).

Query Count Details process wise:
+------------+---------------+--------------------------------------------------+-----------+--------------------------------------------------+
| Process    |   getMainPage |   getMainPage params={"platform":"adb","page":1} |   getPage |   getPage params={"platform":"adb","slug":"adb"} |
+============+===============+==================================================+===========+==================================================+
| astro-4321 |           595 |                                              595 |       437 |                                              437 |
+------------+---------------+--------------------------------------------------+-----------+--------------------------------------------------+
| astro-4322 |           605 |                                              605 |       407 |                                              407 |
+------------+---------------+--------------------------------------------------+-----------+--------------------------------------------------+

Query Duration Details process wise:
+-------------+---------+----------+----------+-----------+
| Query       |   Count |   Avg ms |   Max ms |   Sum min |
+=============+=========+==========+==========+===========+
| getPage     |     843 |    255.6 |     1373 |      3.59 |
+-------------+---------+----------+----------+-----------+
| getMainPage |    1200 |    167.2 |      493 |      3.34 |
+-------------+---------+----------+----------+-----------+

Overall window: 2025-12-06T15:30:44.519000+00:00 → 2025-12-06T15:31:07.329000+00:00
Total coverage: 0:00:22.810000
10s Requesting tldr main
hey -z 10s -host hexmos-local.com http://127.0.0.1/freedevtools/tldr

Summary:
  Total:	10.4226 secs
  Slowest:	1.0527 secs
  Fastest:	0.0418 secs
  Average:	0.4193 secs
  Requests/sec:	116.8619
  

Response time histogram:
  0.042 [1]	|
  0.143 [29]	|■■■
  0.244 [73]	|■■■■■■■■
  0.345 [351]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.446 [357]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.547 [180]	|■■■■■■■■■■■■■■■■■■■■
  0.648 [108]	|■■■■■■■■■■■■
  0.749 [54]	|■■■■■■
  0.851 [23]	|■■■
  0.952 [23]	|■■■
  1.053 [19]	|■■


Latency distribution:
  10% in 0.2592 secs
  25% in 0.3152 secs
  50% in 0.3743 secs
  75% in 0.5005 secs
  90% in 0.6468 secs
  95% in 0.7638 secs
  99% in 0.9848 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0002 secs, 0.0418 secs, 1.0527 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0001 secs, 0.0000 secs, 0.0155 secs
  resp wait:	0.4140 secs, 0.0365 secs, 1.0500 secs
  resp read:	0.0048 secs, 0.0018 secs, 0.0322 secs

Status code distribution:
  [200]	1218 responses



Peeking at 4 log files in /home/gk/.pmdaemon/logs...

Request count table:
+------------+------------+--------------+---------------+----------+
| Process    |   Requests |   Dispatches |   Worker Logs |   Errors |
+============+============+==============+===============+==========+
| astro-4321 |          0 |         1653 |          3306 |        0 |
+------------+------------+--------------+---------------+----------+
| astro-4322 |          0 |         1609 |          3218 |        0 |
+------------+------------+--------------+---------------+----------+

Total aggregated:
  total lines: 21622
  requests:    0
  dispatches:  3262
  worker logs: 6524
  errors:      0

Dispatches represent each time the worker pool received a query and handed it off to a worker thread (logged via [SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB|TLDR_DB] Dispatching <queryName>).

Query Count Details process wise:
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+
| Process    |   getMainPage |   getMainPage params={"platform":"adb","page":1} |   getMainPage params={"platform":"index","page":1} |   getPage |   getPage params={"platform":"adb","slug":"adb"} |
+============+===============+==================================================+====================================================+===========+==================================================+
| astro-4321 |          1216 |                                              595 |                                                621 |       437 |                                              437 |
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+
| astro-4322 |          1202 |                                              605 |                                                597 |       407 |                                              407 |
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+

Query Duration Details process wise:
+-------------+---------+----------+----------+-----------+
| Query       |   Count |   Avg ms |   Max ms |   Sum min |
+=============+=========+==========+==========+===========+
| getPage     |     843 |    255.6 |     1373 |      3.59 |
+-------------+---------+----------+----------+-----------+
| getMainPage |    2418 |    162.6 |      639 |      6.55 |
+-------------+---------+----------+----------+-----------+

Overall window: 2025-12-06T15:30:44.519000+00:00 → 2025-12-06T15:31:20.147000+00:00
Total coverage: 0:00:35.628000
1min Requesting tldr 1min
hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/tldr/npm/npm-fund/

Summary:
  Total:	60.2830 secs
  Slowest:	0.9633 secs
  Fastest:	0.0354 secs
  Average:	0.2889 secs
  Requests/sec:	172.6026
  

Response time histogram:
  0.035 [1]	|
  0.128 [157]	|■
  0.221 [1498]	|■■■■■■■■■■■
  0.314 [5651]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.407 [2383]	|■■■■■■■■■■■■■■■■■
  0.499 [491]	|■■■
  0.592 [113]	|■
  0.685 [52]	|
  0.778 [26]	|
  0.871 [24]	|
  0.963 [9]	|


Latency distribution:
  10% in 0.2043 secs
  25% in 0.2374 secs
  50% in 0.2784 secs
  75% in 0.3256 secs
  90% in 0.3830 secs
  95% in 0.4294 secs
  99% in 0.5985 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0354 secs, 0.9633 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0001 secs, 0.0000 secs, 0.0173 secs
  resp wait:	0.2850 secs, 0.0299 secs, 0.9565 secs
  resp read:	0.0037 secs, 0.0012 secs, 0.0668 secs

Status code distribution:
  [200]	10405 responses



Peeking at 4 log files in /home/gk/.pmdaemon/logs...

Request count table:
+------------+------------+--------------+---------------+----------+
| Process    |   Requests |   Dispatches |   Worker Logs |   Errors |
+============+============+==============+===============+==========+
| astro-4321 |          0 |         6865 |         13730 |        0 |
+------------+------------+--------------+---------------+----------+
| astro-4322 |          0 |         6802 |         13604 |        0 |
+------------+------------+--------------+---------------+----------+

Total aggregated:
  total lines: 94457
  requests:    0
  dispatches:  13667
  worker logs: 27334
  errors:      0

Dispatches represent each time the worker pool received a query and handed it off to a worker thread (logged via [SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB|TLDR_DB] Dispatching <queryName>).

Query Count Details process wise:
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+-------------------------------------------------------+
| Process    |   getMainPage |   getMainPage params={"platform":"adb","page":1} |   getMainPage params={"platform":"index","page":1} |   getPage |   getPage params={"platform":"adb","slug":"adb"} |   getPage params={"platform":"npm","slug":"npm-fund"} |
+============+===============+==================================================+====================================================+===========+==================================================+=======================================================+
| astro-4321 |          1216 |                                              595 |                                                621 |      5649 |                                              437 |                                                  5212 |
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+-------------------------------------------------------+
| astro-4322 |          1202 |                                              605 |                                                597 |      5600 |                                              407 |                                                  5193 |
+------------+---------------+--------------------------------------------------+----------------------------------------------------+-----------+--------------------------------------------------+-------------------------------------------------------+

Query Duration Details process wise:
+-------------+---------+----------+----------+-----------+
| Query       |   Count |   Avg ms |   Max ms |   Sum min |
+=============+=========+==========+==========+===========+
| getPage     |   11242 |    126.7 |     1373 |     23.75 |
+-------------+---------+----------+----------+-----------+
| getMainPage |    2418 |    162.6 |      639 |      6.55 |
+-------------+---------+----------+----------+-----------+

Overall window: 2025-12-06T15:30:44.519000+00:00 → 2025-12-06T15:32:22.965000+00:00
Total coverage: 0:01:38.446000
5min Requesting tldr 5min
hey -z 5m -host hexmos-local.com http://127.0.0.1/freedevtools/tldr/npm/npm-fund/
^C
Summary:
  Total:	162.4016 secs
  Slowest:	2.0663 secs
  Fastest:	0.0312 secs
  Average:	0.4522 secs
  Requests/sec:	110.4484
  

Response time histogram:
  0.031 [1]	|
  0.235 [3399]	|■■■■■■■■■■■■■■■■■■
  0.438 [7598]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.642 [3444]	|■■■■■■■■■■■■■■■■■■
  0.845 [1814]	|■■■■■■■■■■
  1.049 [913]	|■■■■■
  1.252 [454]	|■■
  1.456 [197]	|■
  1.659 [81]	|
  1.863 [26]	|
  2.066 [10]	|


Latency distribution:
  10% in 0.2039 secs
  25% in 0.2577 secs
  50% in 0.3705 secs
  75% in 0.5644 secs
  90% in 0.8283 secs
  95% in 1.0118 secs
  99% in 1.3745 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0312 secs, 2.0663 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0001 secs, 0.0000 secs, 0.0647 secs
  resp wait:	0.4477 secs, 0.0230 secs, 2.0513 secs
  resp read:	0.0042 secs, 0.0012 secs, 0.1001 secs

Status code distribution:
  [200]	17937 responses