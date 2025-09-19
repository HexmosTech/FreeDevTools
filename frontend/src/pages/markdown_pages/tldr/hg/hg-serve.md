---
title: "Start Mercurial Server - Browse Repositories | Online Free DevTools by Hexmos"
name: hg-serve
path: /freedevtools/tldr/hg/hg-serve
canonical: "https://hexmos.com/freedevtools/tldr/hg/hg-serve/"
description: "Start Mercurial server to browse repositories with hg-serve. Access and manage your Mercurial repositories easily. Free online tool, no registration required."
category: common
keywords:
- mercurial server
- mercurial repository browser
- hg serve command
- version control web server
- mercurial web interface
- hg web server
- repository browsing tool
- code repository server
- mercurial server configuration
- hg serve options
features:
- Start a Mercurial web server instance
- Specify the listening port for the server
- Define the listening address for the server
- Set a custom server identifier
- Customize the server theme using styles
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hg serve

> Start a standalone Mercurial web server for browsing repositories.
> More information: <https://www.mercurial-scm.org/help/commands/serve>.

- Start a web server instance:

`hg serve`

- Start a web server instance on the specified port:

`hg serve {{[-p|--port]}} {{port}}`

- Start a web server instance on the specified listening address:

`hg serve {{[-a|--address]}} {{address}}`

- Start a web server instance with a specific identifier:

`hg serve {{[-n|--name]}} {{name}}`

- Start a web server instance using the specified theme (see the templates directory):

`hg serve --style {{style}}`

- Start a web server instance using the specified SSL certificate bundle:

`hg serve --certificate {{path/to/certificate}}`
