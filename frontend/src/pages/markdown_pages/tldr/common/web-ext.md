---
title: "Web Extension Manager - Control Firefox Extensions | Online Free DevTools by Hexmos"
name: web-ext
path: /freedevtools/tldr/common/web-ext
canonical: "https://hexmos.com/freedevtools/tldr/common/web-ext/"
description: "Control web extension development with Web Ext Manager. Build, run, lint, and sign your Firefox extensions easily. Free online tool, no registration required."
category: common
keywords:
- web extension manager
- firefox extension development
- web-ext run
- web-ext build
- web-ext lint
- web extension signing
- firefox extension testing
- web extension packaging
- firefox android extension
- web-ext firefox-android
features:
- Run web extensions in Firefox desktop and Android
- Lint manifest and source files for errors
- Build and package web extensions
- Sign packages for self-hosting
- Control extension development from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# web-ext

> Manage web extension development.
> More information: <https://github.com/mozilla/web-ext>.

- Run the web extension in the current directory in Firefox:

`web-ext run`

- Run a web extension from a specific directory in Firefox:

`web-ext run --source-dir {{path/to/directory}}`

- Display verbose execution output:

`web-ext run --verbose`

- Run a web extension in Firefox Android:

`web-ext run --target firefox-android`

- Lint the manifest and source files for errors:

`web-ext lint`

- Build and package the extension:

`web-ext build`

- Display verbose build output:

`web-ext build --verbose`

- Sign a package for self-hosting:

`web-ext sign --api-key {{api_key}} --api-secret {{api_secret}}`
