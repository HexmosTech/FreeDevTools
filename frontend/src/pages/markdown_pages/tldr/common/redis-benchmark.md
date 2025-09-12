---
title: "Redis Benchmark - Measure Redis Server Performance | Free DevTools"
name: redis-benchmark
path: /freedevtools/tldr/common/redis-benchmark
canonical: "https://hexmos.com/freedevtools/tldr/common/redis-benchmark/"
description: "Benchmark Redis performance with Redis Benchmark. Measure server speed and identify bottlenecks. Free online tool, no registration required."
category: common
keywords:
- redis benchmark tool
- redis performance test
- redis speed test
- redis load testing
- redis latency test
- redis server benchmark
- redis command line benchmark
- database benchmark tool
- memory database benchmark
- redis performance optimization
features:
- Measures Redis server speed and throughput
- Simulates client requests to assess performance
- Identifies performance bottlenecks in Redis configurations
- Allows benchmarking of specific Redis commands
- Customizes test parameters for targeted analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# redis-benchmark

> Benchmark a Redis server.
> More information: <https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/benchmarks/>.

- Run full benchmark:

`redis-benchmark`

- Run benchmark on a specific Redis server:

`redis-benchmark -h {{host}} -p {{port}} -a {{password}}`

- Run a subset of tests with default 100000 requests:

`redis-benchmark -h {{host}} -p {{port}} -t {{set,lpush}} -n {{100000}}`

- Run with a specific script:

`redis-benchmark -n {{100000}} script load "{{redis.call('set', 'foo', 'bar')}}"`

- Run benchmark by using 100000 [r]andom keys:

`redis-benchmark -t {{set}} -r {{100000}}`

- Run benchmark by using a [P]ipelining of 16 commands:

`redis-benchmark -n {{1000000}} -t {{set,get}} -P {{16}}`

- Run benchmark [q]uietly and only show query per seconds result:

`redis-benchmark -q`
