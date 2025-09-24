---
title: "Bundle Node.js - Create Single File with NCC | Online Free DevTools by Hexmos"
name: ncc
path: /freedevtools/tldr/common/ncc
canonical: "https://hexmos.com/freedevtools/tldr/common/ncc/"
description: "Bundle Node.js applications with NCC to create single files. Supports TypeScript, binary addons, and dynamic requires. Free online tool, no registration required."
category: common
keywords:
- Node.js bundler
- JavaScript bundler
- TypeScript bundler
- Single file Node.js
- Vercel ncc
- Node.js compiler
- Node.js single executable
- Node.js deployment
- Node.js minification
- Node.js source maps
features:
- Bundle Node.js applications into a single file
- Minify bundled Node.js applications
- Generate source maps for bundled applications
- Automatically recompile on file changes
- Clean the ncc cache
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ncc

> Compile a Node.js application into a single file.
> Supports TypeScript, binary addons and dynamic requires.
> More information: <https://github.com/vercel/ncc>.

- Bundle a Node.js application:

`ncc build {{path/to/file.js}}`

- Bundle and minify a Node.js application:

`ncc build {{[-m|--minify]}} {{path/to/file.js}}`

- Bundle and minify a Node.js application and generate source maps:

`ncc build {{[-s|--source-map]}} {{path/to/file.js}}`

- Automatically recompile on changes to source files:

`ncc build {{[-w|--watch]}} {{path/to/file.js}}`

- Bundle a Node.js application into a temporary directory and run it for testing:

`ncc run {{path/to/file.js}}`

- Clean the `ncc` cache:

`ncc clean cache`
