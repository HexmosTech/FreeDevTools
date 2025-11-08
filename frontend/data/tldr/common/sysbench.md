---
title: "Benchmark System - Analyze Performance with Sysbench | Online Free DevTools by Hexmos"
name: sysbench
path: "/freedevtools/tldr/common/sysbench/"
canonical: "https://hexmos.com/freedevtools/tldr/common/sysbench/"
description: "Analyze system performance with Sysbench. Benchmark CPU, memory, and I/O. Free online tool, no registration required."
category: common
keywords:
- system performance benchmark
- cpu benchmark
- memory benchmark
- disk I/O benchmark
- server performance analysis
- linux benchmark tool
- sysbench tutorial
- database benchmark
- system stress test
- performance monitoring tool
features:
- Benchmark CPU performance using single or multiple threads
- Measure memory bandwidth and latency
- Perform file system I/O read and write tests
- Simulate database workloads for performance analysis
- Analyze system resource utilization under stress
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sysbench

> Benchmark a System's CPU, IO and memory.
> More information: <https://github.com/akopytov/sysbench/>.

- Run a CPU benchmark with 1 thread for 10 seconds:

`sysbench cpu run`

- Run a CPU benchmark with multiple threads for a specified time:

`sysbench --threads={{number_of_threads}} --time={{seconds}}`

- Run a memory benchmark with 1 thread for 10 seconds:

`sysbench memory run`

- Prepare a filesystem-level read benchmark:

`sysbench fileio prepare`

- Run a filesystem-level benchmark:

`sysbench --file-test-mode={{rndrd|rndrw|rndwr|seqrd|seqrewr|seqwr}} fileio run`
