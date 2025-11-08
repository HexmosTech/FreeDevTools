---
title: "Control HTTP Traffic - mitmproxy | Online Free DevTools by Hexmos"
name: mitmproxy
path: "/freedevtools/tldr/common/mitmproxy/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mitmproxy/"
description: "Control HTTP traffic with mitmproxy, an interactive man-in-the-middle proxy. Intercept, inspect, and modify network requests easily. Free online tool, no registration required."
category: common
keywords:
- HTTP proxy
- man-in-the-middle proxy
- traffic interception
- network inspection
- request modification
- TLS decryption
- SSL proxy
- proxy server
- mitmproxy linux
- mitmproxy macos
features:
- Intercept and inspect HTTP/HTTPS traffic in real-time
- Modify requests and responses on the fly
- Save and replay captured HTTP flows
- Decrypt SSL/TLS traffic for inspection
- Automate traffic analysis with custom scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mitmproxy

> An interactive man-in-the-middle HTTP proxy.
> See also: `mitmweb`, `mitmdump`.
> More information: <https://docs.mitmproxy.org/stable/>.

- Start `mitmproxy` with default settings (will listen on port `8080`):

`mitmproxy`

- Start `mitmproxy` bound to a custom address and port:

`mitmproxy --listen-host {{ip_address}} {{[-p|--listen-port]}} {{port}}`

- Start `mitmproxy` using a script to process traffic:

`mitmproxy {{[-s|--scripts]}} {{path/to/script.py}}`

- Export the logs with SSL/TLS master keys to external programs (wireshark, etc.):

`SSLKEYLOGFILE="{{path/to/file}}" mitmproxy`

- Specify mode of operation of the proxy server (`regular` is the default):

`mitmproxy {{[-m|--mode]}} {{regular|transparent|socks5|...}}`

- Set the console layout:

`mitmproxy --console-layout {{horizontal|single|vertical}}`

- Save all proxied traffic to a file for later analysis:

`mitmproxy {{[-w|--save-stream-file]}} {{path/to/dump.mitm}}`

- Replay a previously saved HTTP flow file:

`mitmproxy {{[-nr|--no-server --rfile]}} {{path/to/dump.mitm}}`
