---
title: "Varnishlog - Display Varnish Logs | Online Free DevTools by Hexmos"
name: varnishlog
path: /freedevtools/tldr/common/varnishlog
canonical: "https://hexmos.com/freedevtools/tldr/common/varnishlog/"
description: "Display Varnish logs in real-time with Varnishlog. Analyze website traffic and debug caching issues using advanced filtering. Free online tool, no registration required."
category: common
keywords:
- varnish cache logs
- varnishlog analysis
- varnish cache monitoring
- varnishlog filtering
- varnish cache debugging
- varnish access logs
- varnish performance analysis
- varnish cache statistics
- varnish query language
- varnish cache command line
features:
- Display logs in real-time
- Filter logs by request headers
- Filter logs by HTTP method
- Filter logs by URL path
- Filter logs using regular expressions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# varnishlog

> Display Varnish logs.
> More information: <https://varnish-cache.org/docs/trunk/reference/varnishlog.html>.

- Display logs in real time:

`varnishlog`

- Only display requests to a specific domain:

`varnishlog -q 'ReqHeader eq "Host: {{example.com}}"'`

- Only display POST requests:

`varnishlog -q 'ReqMethod eq "{{POST}}"'`

- Only display requests to a specific path:

`varnishlog -q 'ReqURL eq "/{{path}}"'`

- Only display requests to paths matching a `regex`:

`varnishlog -q 'ReqURL ~ "{{regex}}"'`
