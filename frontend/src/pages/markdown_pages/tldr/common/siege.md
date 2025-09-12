---
title: "Siege Load Testing - Benchmark Websites | Free DevTools"
name: siege
path: /freedevtools/tldr/common/siege
canonical: "https://hexmos.com/freedevtools/tldr/common/siege/"
description: "Benchmark websites with Siege load testing tool. Analyze website performance and simulate user traffic for stress testing. Free online tool, no registration required."
category: common
keywords:
- website load testing
- HTTP load testing
- website benchmarking
- siege load testing tool
- command line load testing
- website performance testing
- website stress testing
- Linux load testing
- macOS load testing
- network performance analysis
features:
- Perform HTTP load testing on websites
- Benchmark website performance under stress
- Simulate concurrent users to test website capacity
- Run tests for a specified duration
- Test multiple URLs from a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# siege

> HTTP loadtesting and benchmarking tool.
> More information: <https://www.joedog.org/siege-manual/>.

- Test a URL with default settings:

`siege {{https://example.com}}`

- Test a list of URLs:

`siege {{[-f|--file]}} {{path/to/url_list.txt}}`

- Test list of URLs in a random order (Simulates internet traffic):

`siege {{[-i|--internet]}} {{[-f|--file]}} {{path/to/url_list.txt}}`

- Benchmark a list of URLs (without waiting between requests):

`siege {{[-b|--benchmark]}} {{[-f|--file]}} {{path/to/url_list.txt}}`

- Set the amount of concurrent connections:

`siege {{[-c|--concurrent]}} {{50}} {{[-f|--file]}} {{path/to/url_list.txt}}`

- Set how long for the siege to run for:

`siege {{[-t|--time]}} {{30s}} {{[-f|--file]}} {{path/to/url_list.txt}}`
