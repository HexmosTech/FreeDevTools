---
title: "Load Test - Simulate Website Traffic | Online Free DevTools by Hexmos"
name: loadtest
path: /freedevtools/tldr/common/loadtest
canonical: "https://hexmos.com/freedevtools/tldr/common/loadtest/"
description: "Simulate website traffic with Load Test. Analyze website performance under stress and identify bottlenecks using load testing. Free online tool, no registration required."
category: common
keywords:
- website load testing
- HTTP load testing
- websocket load testing
- website performance testing
- web server load test
- API load testing
- command line load test
- linux load test
- macos load test
- common loadtest
features:
- Simulate concurrent users on a website
- Define requests per second for load simulation
- Add custom HTTP headers to requests
- Specify the HTTP method (GET, POST, etc.)
- Test website performance under load
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# loadtest

> Run a load test on the selected HTTP or WebSockets URL.
> More information: <https://github.com/alexfernandez/loadtest>.

- Run with concurrent users and a specified amount of requests per second:

`loadtest {{[-c|--concurrency]}} {{10}} {{[--rps|--requestsPerSecond]}} {{200}} {{https://example.com}}`

- Run with a custom HTTP header:

`loadtest --headers "{{accept:text/plain;text-html}}" {{https://example.com}}`

- Run with a specific HTTP method:

`loadtest {{[-m|--method]}} {{GET}} {{https://example.com}}`
