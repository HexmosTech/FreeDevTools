---
title: "Build Caddy - Custom Caddy Server Builds | Online Free DevTools by Hexmos"
name: xcaddy
path: "/freedevtools/tldr/common/xcaddy/"
canonical: "https://hexmos.com/freedevtools/tldr/common/xcaddy/"
description: "Build custom Caddy server binaries with xcaddy. Easily add modules, specify versions, and customize your Caddy server. Free online tool, no registration required."
category: common
keywords:
- Caddy server builder
- custom Caddy build
- Caddy module integration
- Caddy version control
- Caddy binary generator
- xcaddy build tool
- web server customization
- go build environment
- Caddy plugin development
- Caddy development server
features:
- Build custom Caddy server binaries from source
- Integrate specific Caddy modules into the build
- Specify the Caddy version to be built
- Output the compiled Caddy server to a specific file
- Run Caddy with a development plugin for testing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xcaddy

> The custom build tool for the Caddy Web Server.
> More information: <https://github.com/caddyserver/xcaddy>.

- Build Caddy server from source:

`xcaddy build`

- Build Caddy server with a specific version (defaults to latest):

`xcaddy build {{version}}`

- Build Caddy with a specific module:

`xcaddy build --with {{module_name}}`

- Build Caddy and output to a specific file:

`xcaddy build --output {{path/to/file}}`

- Build and run Caddy for a development plugin in the current directory:

`xcaddy run`

- Build and run Caddy for a development plugin using a specific Caddy config:

`xcaddy run --config {{path/to/file}}`
