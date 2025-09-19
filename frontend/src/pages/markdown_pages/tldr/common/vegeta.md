---
title: "Vegeta Load Test - Generate HTTP Traffic | Online Free DevTools by Hexmos"
name: vegeta
path: /freedevtools/tldr/common/vegeta
canonical: "https://hexmos.com/freedevtools/tldr/common/vegeta/"
description: "Generate HTTP traffic with Vegeta, a versatile HTTP load testing tool. Analyze web server performance and identify bottlenecks. Free online tool, no registration required."
category: common
keywords:
- HTTP load testing
- Vegeta load test
- Performance testing tool
- Web server benchmarking
- HTTP traffic generator
- Command line load test
- Vegeta attack command
- Load test Linux
- Load test macOS
- Load test common
features:
- Launch HTTP load tests with customizable duration and rate
- Generate load against HTTPS servers with self-signed certificates
- Create detailed reports and plots of load test results
- Target multiple URLs from a file for load testing
- Analyze server performance and identify bottlenecks under load
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vegeta

> A utility and a library for HTTP load testing.
> See also: `ab`.
> More information: <https://github.com/tsenart/vegeta>.

- Launch an attack lasting 30 seconds:

`echo "{{GET https://example.com}}" | vegeta attack -duration={{30s}}`

- Launch an attack on a server with a self-signed HTTPS certificate:

`echo "{{GET https://example.com}}" | vegeta attack -insecure -duration={{30s}}`

- Launch an attack with a rate of 10 requests per second:

`echo "{{GET https://example.com}}" | vegeta attack -duration={{30s}} -rate={{10}}`

- Launch an attack and display a report:

`echo "{{GET https://example.com}}" | vegeta attack -duration={{30s}} | vegeta report`

- Launch an attack and plot the results on a graph (latency over time):

`echo "{{GET https://example.com}}" | vegeta attack -duration={{30s}} | vegeta plot > {{path/to/results.html}}`

- Launch an attack against multiple URLs from a file:

`vegeta attack -duration={{30s}} -targets={{requests.txt}} | vegeta report`
