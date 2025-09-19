---
title: "Proxify - Capture HTTP/HTTPS Traffic | Online Free DevTools by Hexmos"
name: proxify
path: /freedevtools/tldr/common/proxify
canonical: "https://hexmos.com/freedevtools/tldr/common/proxify/"
description: "Capture HTTP/HTTPS traffic with Proxify. Intercept, manipulate, and replay web traffic with this versatile proxy tool. Free online tool, no registration required."
category: common
keywords:
- HTTP proxy capture
- HTTPS proxy capture
- Web traffic analysis
- Proxy interception tool
- MITM proxy alternative
- Portable proxy server
- Projectdiscovery proxify
- Network traffic monitor
- HTTP/HTTPS traffic replay
- Command-line proxy tool
features:
- Capture and analyze HTTP/HTTPS traffic
- Intercept and modify web requests
- Replay captured HTTP/HTTPS sessions
- Configure proxy server on custom ports
- Output captured traffic in JSON or YAML format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# proxify

> A versatile and portable proxy for capturing, manipulating, and replaying HTTP/HTTPS traffic on the go.
> See also: `mitmproxy`.
> More information: <https://github.com/projectdiscovery/proxify>.

- Start a HTTP proxy (on the loopback network interface `127.0.0.1` and port `8888`):

`proxify`

- Start a HTTP proxy on a custom network interface and port (may require `sudo` for a port number lower than `1024`):

`proxify {{[-ha|-http-addr]}} "{{ip_address}}:{{port_number}}"`

- Specify output format and output file:

`proxify {{[-of|-output-format]}} {{jsonl|yaml}} {{[-o|-output]}} {{path/to/file}}`

- Display help:

`proxify -h`
