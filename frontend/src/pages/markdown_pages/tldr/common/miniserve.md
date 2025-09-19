---
title: "Serve Files - Control HTTP File Server with miniserve | Online Free DevTools by Hexmos"
name: miniserve
path: /freedevtools/tldr/common/miniserve
canonical: "https://hexmos.com/freedevtools/tldr/common/miniserve/"
description: "Control HTTP file serving with miniserve. Easily serve files and directories over HTTP with authentication. Free online tool, no registration required."
category: common
keywords:
- HTTP file server
- simple file server
- command-line file server
- local file server
- directory sharing tool
- static file hosting
- authentication server
- command line http server
- linux file server
- macos file server
features:
- Serve files and directories over HTTP
- Serve files with basic authentication
- Serve a single file
- Specify the path to serve
- Provide access to files via the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# miniserve

> Simple HTTP file server.
> More information: <https://github.com/svenstaro/miniserve>.

- Serve a directory:

`miniserve {{path/to/directory}}`

- Serve a single file:

`miniserve {{path/to/file}}`

- Serve a directory using HTTP basic authentication:

`miniserve --auth {{username}}:{{password}} {{path/to/directory}}`
