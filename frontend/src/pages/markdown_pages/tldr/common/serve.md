---
title: "Serve Files - Start Static HTTP Server | Online Free DevTools by Hexmos"
name: serve
path: "/freedevtools/tldr/common/serve"
canonical: "https://hexmos.com/freedevtools/tldr/common/serve/"
description: "Start static files serving with Serve. Quickly create a local HTTP server for development and testing. Free online tool, no registration required."
category: common
keywords:
- static file server
- serve directory
- HTTP server
- local server
- command line server
- serve files
- static website hosting
- dev server
- simple HTTP server
- file hosting
features:
- Serve static files from a specified directory.
- Start an HTTP server with CORS enabled.
- Rewrite not-found requests to a specific file (e.g., index.html).
- Start an HTTPS server using provided SSL certificates.
- Configure the server using a JSON configuration file.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# serve

> Static file serving and directory listing.
> More information: <https://github.com/vercel/serve>.

- Start an HTTP server listening on the default port to serve the current directory:

`serve`

- Start an HTTP server on a specific [p]ort to serve a specific directory:

`serve -p {{port}} {{path/to/directory}}`

- Start an HTTP server with CORS enabled by including the `Access-Control-Allow-Origin: *` header in all responses:

`serve {{[-C|--cors]}}`

- Start an HTTP server on the default port rewriting all not-found requests to the `index.html` file:

`serve {{[-s|--single]}}`

- Start an HTTPS server on the default port using the specified certificate:

`serve --ssl-cert {{path/to/cert.pem}} --ssl-key {{path/to/key.pem}}`

- Start an HTTP server on the default port using a specific configuration file:

`serve {{[-c|--config]}} {{path/to/serve.json}}`

- Display help:

`serve --help`
