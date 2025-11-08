---
title: "MITMDump - Capture and Analyze HTTP Traffic | Online Free DevTools by Hexmos"
name: mitmdump
path: "/freedevtools/tldr/common/mitmdump/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mitmdump/"
description: "Capture HTTP traffic with MITMDump. Analyze, record, and transform network data with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- HTTP traffic capture
- network analysis tool
- mitmdump traffic recording
- intercept HTTP requests
- mitmproxy command-line
- HTTP proxy analyzer
- network packet inspection
- traffic filtering mitmdump
- DNS traffic intercept
- command-line HTTP debugging
features:
- Record HTTP traffic to a file for later analysis.
- Filter captured traffic based on request methods.
- Replay saved HTTP traffic for testing purposes.
- Intercept DNS traffic for security analysis.
- Programmatically transform HTTP traffic using scripts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mitmdump

> View, record, and programmatically transform HTTP traffic.
> The command-line counterpart to mitmproxy.
> More information: <https://docs.mitmproxy.org/stable/#mitmdump>.

- Start a proxy and save all output to a file:

`mitmdump {{[-w|--wfile]}} {{path/to/file}}`

- Filter a saved traffic file to just POST requests:

`mitmdump {{[-nr|--no-server --read-flows]}} {{input_filename}} {{[-w|--wfile]}} {{output_filename}} "{{~m post}}"`

- Replay a saved traffic file:

`mitmdump {{[-nc|--no-server --client-replay]}} {{path/to/file}}`

- Intercept DNS traffic (starts an intercepting DNS server on 127.0.0.1:53):

`sudo mitmdump {{[-m|--mode]}} dns`
