---
title: "Hugo Server - Build Websites Quickly | Online Free DevTools by Hexmos"
name: hugo-server
path: /freedevtools/tldr/common/hugo-server
canonical: "https://hexmos.com/freedevtools/tldr/common/hugo-server/"
description: "Build sites rapidly with Hugo Server. Develop, test, and preview your Hugo website instantly with hot reloading. Free online tool, no registration required."
category: common
keywords:
- hugo website build
- hugo development server
- static site generation
- local website hosting
- gohugo server
- hugo live reload
- hugo development workflow
- hugo build process
- hugo server port configuration
- hugo minified output
features:
- Builds and serves Hugo sites locally
- Allows specification of a custom port
- Minifies output for optimized performance
- Supports full re-renders in production environments
- Provides command-line help documentation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hugo server

> Build and serve a site with Hugo's built-in webserver.
> More information: <https://gohugo.io/commands/hugo_server/>.

- Build and serve a site:

`hugo server`

- Build and serve a site on a specified port number:

`hugo server {{[-p|--port]}} {{port_number}}`

- Build and serve a site while minifying supported output formats (HTML, XML, etc.):

`hugo server --minify`

- Build and serve a site in the production environment with full re-renders while minifying supported formats:

`hugo server {{[-e|--environment]}} {{production}} --disableFastRender --minify`

- Display help:

`hugo server {{[-h|--help]}}`
