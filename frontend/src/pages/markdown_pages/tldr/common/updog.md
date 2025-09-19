---
title: "Serve Files - Control HTTP Server with Updog | Online Free DevTools by Hexmos"
name: updog
path: /freedevtools/tldr/common/updog
canonical: "https://hexmos.com/freedevtools/tldr/common/updog/"
description: "Serve files with Updog, a lightweight HTTP server for uploads and downloads. Quickly share files and directories with basic auth and SSL support. Free online tool, no registration required."
category: common
keywords:
- HTTP file server
- file sharing server
- simple HTTP server
- command-line server
- updog file server
- local web server
- Python SimpleHTTPServer replacement
- ad hoc SSL certificate server
- HTTP basic auth server
- directory sharing server
features:
- Serve files and directories over HTTP/HTTPS.
- Enable basic authentication for access control.
- Configure SSL certificates for secure connections.
- Specify a custom port for the server.
- Upload files to the server via HTTP.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# updog

> A replacement for Python's SimpleHTTPServer.
> It allows uploading and downloading via HTTP/S, can set ad hoc SSL certificates and use HTTP basic auth.
> More information: <https://github.com/sc0tfree/updog>.

- Start a HTTP server for the current directory:

`updog`

- Start a HTTP server for a specified directory:

`updog --directory /{{path/to/directory}}`

- Start a HTTP server on a specified port:

`updog --port {{port}}`

- Start a HTTP server with a password (To log in, leave the username blank and enter the password in the password field):

`updog --password {{password}}`

- Enable transport encryption via SSL:

`updog --ssl`
