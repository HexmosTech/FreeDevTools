---
title: "Pgbench - Benchmark PostgreSQL Databases | Online Free DevTools by Hexmos"
name: pgbench
path: /freedevtools/tldr/common/pgbench
canonical: "https://hexmos.com/freedevtools/tldr/common/pgbench/"
description: "Benchmark PostgreSQL databases with pgbench. Analyze database performance, simulate client connections, and tune configurations. Free online tool, no registration required."
category: common
keywords:
- postgresql benchmark
- pgbench benchmark
- database benchmarking tool
- postgresql performance testing
- sql benchmark
- command line benchmark tool
- database stress test
- linux database benchmark
- macos database benchmark
- postgresql load testing
features:
- Initialize PostgreSQL databases for benchmarking with custom scaling factors
- Simulate multiple concurrent client connections to assess database load
- Execute custom transaction scripts to mimic real-world workloads
- Generate detailed performance reports with metrics such as transactions per second
- Configure the number of worker threads to optimize benchmark execution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pgbench

> Run a benchmark test on PostgreSQL.
> More information: <https://www.postgresql.org/docs/current/pgbench.html>.

- Initialize a database with a scale factor of 50 times the default size:

`pgbench --initialize --scale={{50}} {{database_name}}`

- Benchmark a database with 10 clients, 2 worker threads, and 10,000 transactions per client:

`pgbench --client={{10}} --jobs={{2}} --transactions={{10000}} {{database_name}}`
