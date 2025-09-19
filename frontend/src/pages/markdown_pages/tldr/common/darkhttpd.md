---
title: "Start darkhttpd Server - Serve Files Simply | Online Free DevTools by Hexmos"
name: darkhttpd
path: /freedevtools/tldr/common/darkhttpd
canonical: "https://hexmos.com/freedevtools/tldr/common/darkhttpd/"
description: "Serve files simply with darkhttpd. Quickly start a web server and share your documents and resources. Free online tool, no registration required."
category: common
keywords:
- darkhttpd web server
- simple web server
- file serving linux
- serve files command line
- lightweight web server
- http server configuration
- document root server
- linux web server
- command line server
- minimal http server
features:
- Serve files from a specified directory.
- Run on a custom port.
- Listen on a specific IP address.
- Serve static content quickly.
- Start a web server easily.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# darkhttpd

> Darkhttpd web server.
> More information: <https://github.com/emikulic/darkhttpd#how-to-run-darkhttpd>.

- Start server serving the specified document root:

`darkhttpd {{path/to/docroot}}`

- Start server on specified port (port 8080 by default if running as non-root user):

`darkhttpd {{path/to/docroot}} --port {{port}}`

- Listen only on specified IP address (by default, the server listens on all interfaces):

`darkhttpd {{path/to/docroot}} --addr {{ip_address}}`
