---
title: "Measure Web Latency - HTTPing Network Performance | Free DevTools"
name: httping
path: /freedevtools/tldr/http/httping
canonical: "https://hexmos.com/freedevtools/tldr/http/httping/"
description: "Measure web latency with HTTPing. Analyze server response times and throughput using this network debugging tool. Free online tool, no registration required."
category: common
keywords:
- web latency analysis
- network performance monitoring
- HTTP ping utility
- server response time measurement
- website speed test tool
- HTTP debugging command
- network troubleshooting tool
- linux network analysis
- macOS network analysis
- common network commands
features:
- Measure web server latency and throughput.
- Ping a specified URL to test its responsiveness.
- Ping a web server on a specified host and port.
- Test TLS connections using HTTPS.
- Authenticate with HTTP basic authentication.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# httping

> Measure the latency and throughput of a web server.
> More information: <https://manned.org/httping>.

- Ping the specified URL:

`httping -g {{url}}`

- Ping the web server on `host` and `port`:

`httping -h {{host}} -p {{port}}`

- Ping the web server on `host` using a TLS connection:

`httping -l -g https://{{host}}`

- Ping the web server on `host` using HTTP basic authentication:

`httping -g http://{{host}} -U {{username}} -P {{password}}`
