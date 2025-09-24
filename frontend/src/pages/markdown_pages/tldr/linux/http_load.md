---
title: "HTTP Load Test - Benchmark Web Server Throughput | Online Free DevTools by Hexmos"
name: http_load
path: /freedevtools/tldr/linux/http_load
canonical: "https://hexmos.com/freedevtools/tldr/linux/http_load/"
description: "Load test your web server with HTTP Load. Simulate concurrent requests and measure throughput. Free online tool, no registration required."
category: linux
keywords:
  - HTTP load testing
  - web server benchmarking
  - website performance test
  - HTTP throughput analysis
  - concurrent request simulation
  - website stress testing
  - Linux load test
  - MacOS load test
  - command-line benchmarking
  - HTTP response time
features:
  - Simulate concurrent HTTP requests
  - Measure web server throughput
  - Perform website load testing
  - Analyze HTTP response times
  - Benchmark web server performance
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# http_load

> An HTTP benchmarking tool.
> Runs multiple HTTP fetches in parallel to test the throughput of a web server.
> More information: <https://www.acme.com/software/http_load/>.

- Emulate 20 requests based on a given URL list file per second for 60 seconds:

`http_load -rate {{20}} -seconds {{60}} {{path/to/urls.txt}}`

- Emulate 5 concurrent requests based on a given URL list file for 60 seconds:

`http_load -parallel {{5}} -seconds {{60}} {{path/to/urls.txt}}`

- Emulate 1000 requests at 20 requests per second, based on a given URL list file:

`http_load -rate {{20}} -fetches {{1000}} {{path/to/urls.txt}}`

- Emulate 1000 requests at 5 concurrent requests at a time, based on a given URL list file:

`http_load -parallel {{5}} -fetches {{1000}} {{path/to/urls.txt}}`
