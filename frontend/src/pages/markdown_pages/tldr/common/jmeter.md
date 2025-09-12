---
title: "JMeter Load Testing - Measure Performance | Free DevTools"
name: jmeter
path: /freedevtools/tldr/common/jmeter
canonical: "https://hexmos.com/freedevtools/tldr/common/jmeter/"
description: "Measure performance with JMeter load testing tool. Analyze web application performance and identify bottlenecks effortlessly. Free online tool, no registration required."
category: common
keywords:
- JMeter load testing
- web application performance testing
- performance test tool
- Java performance analyzer
- server performance metrics
- command-line load test
- stress testing tool
- Apache JMeter
- application response time
- performance benchmark tool
features:
- Run JMeter tests in non-GUI mode for efficiency
- Specify a custom log file for detailed test results
- Execute tests using a specified proxy for realistic scenarios
- Define JMeter properties to customize test behavior
- Run load tests against web applications or APIs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jmeter

> Open source Java application designed for load testing functional behavior and measure performance.
> More information: <https://jmeter.apache.org>.

- Run a specific test plan in nongui mode:

`jmeter --nongui --testfile {{path/to/file.jmx}}`

- Run a test plan in nongui mode using a specific log file:

`jmeter --nogui --testfile {{path/to/file.jmx}} --logfile {{path/to/logfile.jtl}}`

- Run a test plan in nongui mode using a specific proxy:

`jmeter --nongui --testfile {{path/to/file.jmx}} --proxyHost {{127.0.0.1}} --proxyPort {{8888}}`

- Run a test plan in nongui mode using a specific JMeter property:

`jmeter --jmeterproperty {{key}}='{{value}}' --nongui --testfile {{path/to/file.jmx}}`
