---
title: 'Wrk - Generate HTTP Benchmarks | Online Free DevTools by Hexmos'
name: wrk
path: '/freedevtools/tldr/common/wrk/'
canonical: 'https://hexmos.com/freedevtools/tldr/common/wrk/'
description: 'Generate HTTP benchmarks with Wrk, a powerful command-line tool. Measure website performance and optimize server configurations. Free online tool, no registration required.'
category: common
keywords:
  - HTTP benchmarking
  - website performance testing
  - load testing tool
  - server stress test
  - wrk command line
  - performance analysis
  - HTTP request generator
  - benchmark tool
  - wrk http benchmark
  - web server testing
features:
  - Generate HTTP load to simulate real-world traffic
  - Measure website response times and latency
  - Test web server performance under high load
  - Customize request headers for advanced testing
  - Configure threads, connections, and duration of the benchmark
ogImage: 'https://hexmos.com/freedevtools/site-banner.png'
twitterImage: 'https://hexmos.com/freedevtools/site-banner.png'
---

# wrk

> HTTP benchmarking tool.
> More information: <https://github.com/wg/wrk>.

- Run a benchmark for `30` seconds, using `12` threads, and keeping `400` HTTP connections open:

`wrk {{[-t|--threads]}} {{12}} {{[-c|--connections]}} {{400}} {{[-d|--duration]}} {{30s}} "{{http://127.0.0.1:8080/index.html}}"`

- Run a benchmark with a custom header:

`wrk {{[-t|--threads]}} {{2}} {{[-c|--connections]}} {{5}} {{[-d|--duration]}} {{5s}} {{[-H|--header]}} "{{Host: example.com}}" "{{http://example.com/index.html}}"`

- Run a benchmark with a request timeout of `2` seconds:

`wrk {{[-t|--threads]}} {{2}} {{[-c|--connections]}} {{5}} {{[-d|--duration]}} {{5s}} --timeout {{2s}} "{{http://example.com/index.html}}"`
