---
title: "Control mitmweb - HTTP Proxy Interception | Online Free DevTools by Hexmos"
name: mitmweb
path: /freedevtools/tldr/common/mitmweb
canonical: "https://hexmos.com/freedevtools/tldr/common/mitmweb/"
description: "Control web traffic interception with mitmweb, the interactive HTTP proxy. Analyze, modify, and replay network requests. Free online tool, no registration required."
category: common
keywords:
- HTTP Proxy Analyzer
- Web Traffic Interceptor
- Man-in-the-Middle Proxy
- Network Request Replayer
- SSL/TLS Interception
- Web Debugging Tool
- HTTP/2 Proxy
- mitmproxy tool
- mitmweb command
- common
features:
- Intercept and analyze HTTP/HTTPS traffic in real-time.
- Modify and replay intercepted requests and responses.
- Visualize network traffic in a web-based interface.
- Use scripts to automate traffic processing.
- Capture and save network traffic for later analysis.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mitmweb

> A web-based interactive man-in-the-middle HTTP proxy.
> See also: `mitmproxy`.
> More information: <https://docs.mitmproxy.org/stable/concepts-options>.

- Start `mitmweb` with default settings:

`mitmweb`

- Start `mitmweb` bound to a custom address and port:

`mitmweb --listen-host {{ip_address}} --listen-port {{port}}`

- Start `mitmweb` using a script to process traffic:

`mitmweb --scripts {{path/to/script.py}}`
