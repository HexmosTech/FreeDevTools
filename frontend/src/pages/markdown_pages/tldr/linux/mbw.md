---
title: "Benchmark Memory Bandwidth - Measure System Performance | Online Free DevTools by Hexmos"
name: mbw
path: /freedevtools/tldr/linux/mbw
canonical: "https://hexmos.com/freedevtools/tldr/linux/mbw/"
description: "Benchmark memory bandwidth quickly and efficiently with mbw.  Analyze system performance and identify bottlenecks with detailed statistics. Free online tool, no registration required."
category: linux
keywords:
  - memory bandwidth benchmark
  - memory performance testing
  - system performance analysis
  - memory speed measurement
  - mbw command line tool
  - memory allocation benchmark
  - memcpy benchmark
  - linux memory benchmark
  - memory bandwidth test
  - system resource testing
features:
  - Measures memory bandwidth using different test methods.
  - Provides detailed statistics and averages of test results.
  - Allows specifying memory size and number of test iterations.
  - Supports different test types including memcpy and a "dumb" test.
  - Offers options for outputting only statistics, not averages.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mbw

> Memory Bandwidth Benchmark.
> More information: <https://github.com/raas/mbw>.

- Run 3 memory bandwidth tests with 512MB size:

`mbw -n 3 512`

- Run 3 memory bandwidth tests with 512MB memory size, output only statistics, not averages:

`mbw -n 3 -q -a 512`

- Run memcpy test 3 times with 512MB size, only display statistics:

`mbw -n 3 -q -t{{0}} 512`

- Run the memcpy test 10 times with 1024 byte blocks allocated 8192MB of memory:

`mbw -n 10 -q -t{{2}} -b 1024 8192`

- Run dumb test with 2048MB size, output only statistics, run forever:

`mbw -n 0 -t{{1}} -q 2048`
