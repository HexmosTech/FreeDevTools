---
title: "Benchmark HTTP - Analyze Server Performance with AB | Online Free DevTools by Hexmos"
name: ab
path: /freedevtools/tldr/common/ab
canonical: "https://hexmos.com/freedevtools/tldr/common/ab/"
description: "Analyze HTTP server performance with AB. Measure response times, concurrency, and overall efficiency using this command-line benchmarking tool. Free online tool, no registration required."
category: common
keywords:
- HTTP benchmark analysis
- AB server performance test
- Apache benchmark tool
- website load testing
- web server stress test
- URL performance analysis
- command-line benchmarking
- concurrent request testing
- HTTP GET request analysis
- HTTP POST request testing
features:
- Execute HTTP GET and POST requests to a specified URL.
- Simulate concurrent user load with configurable concurrency levels.
- Measure server response times and throughput under different loads.
- Customize requests with headers, payloads, and request methods.
- Generate CSV output for detailed performance analysis and reporting.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ab

> Apache HTTP server benchmarking tool.
> More information: <https://httpd.apache.org/docs/current/programs/ab.html>.

- Execute 100 HTTP GET requests to a given URL:

`ab -n 100 {{url}}`

- Execute 100 HTTP GET requests, in concurrent batches of 10, to a URL:

`ab -n 100 -c 10 {{url}}`

- Execute 100 HTTP POST requests to a URL, using a JSON payload from a file:

`ab -n 100 -T {{application/json}} -p {{path/to/file.json}} {{url}}`

- Use HTTP [k]eep-Alive, i.e. perform multiple requests within one HTTP session:

`ab -k {{url}}`

- Set the maximum number of seconds ([t]imeout) to spend for benchmarking (30 by default):

`ab -t {{60}} {{url}}`

- Write the results to a CSV file:

`ab -e {{path/to/file.csv}}`
