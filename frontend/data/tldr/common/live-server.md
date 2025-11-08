---
title: "Serve Files - Live Server with Live Reload | Online Free DevTools by Hexmos"
name: live-server
path: "/freedevtools/tldr/common/live-server/"
canonical: "https://hexmos.com/freedevtools/tldr/common/live-server/"
description: "Serve files instantly with Live Server. Develop websites with live reload functionality for faster development. Free online tool, no registration required."
category: common
keywords:
- live reload server
- development server
- http server
- web server
- local server
- localhost server
- file server
- web development server
- auto reload server
- static file server
features:
- Serve static files from a local directory.
- Automatically reload the browser on file changes.
- Specify a custom port for the server.
- Open a specific file in the browser.
- Proxy requests to a different URL.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# live-server

> A simple development HTTP server with live reload capability.
> More information: <https://github.com/tapio/live-server>.

- Serve an `index.html` file and reload on changes:

`live-server`

- Specify a port (default is 8080) from which to serve a file:

`live-server --port={{8081}}`

- Specify a given file to serve:

`live-server --open={{about.html}}`

- Proxy all requests for ROUTE to URL:

`live-server --proxy={{/}}:{{http:localhost:3000}}`
