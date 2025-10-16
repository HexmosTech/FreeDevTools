---
title: "Bundle JavaScript - Build and Minify with esbuild | Online Free DevTools by Hexmos"
name: esbuild
path: "/freedevtools/tldr/common/esbuild/"
canonical: "https://hexmos.com/freedevtools/tldr/common/esbuild/"
description: "Bundle JavaScript with esbuild, a blazing-fast bundler and minifier. Optimize your web apps with advanced features like JSX support and source maps. Free online tool, no registration required."
category: common
keywords:
- javascript bundler
- javascript minifier
- esbuild bundler
- esbuild minify
- jsx bundler
- esm bundler
- commonjs bundler
- web application bundler
- frontend bundler
- browserify alternative
features:
- Bundle JavaScript and JSX applications from command line
- Minify JavaScript code for production deployments
- Generate source maps for easier debugging
- Target specific browser versions for compatibility
- Enable JSX syntax in .js files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# esbuild

> JavaScript bundler and minifier built for speed.
> More information: <https://esbuild.github.io/api/#general-options>.

- Bundle a JavaScript application and print to `stdout`:

`esbuild --bundle {{path/to/file.js}}`

- Bundle a JSX application from `stdin`:

`esbuild --bundle --outfile={{path/to/out.js}} < {{path/to/file.jsx}}`

- Bundle and minify a JSX application with source maps in `production` mode:

`esbuild --bundle --define:{{process.env.NODE_ENV=\"production\"}} --minify --sourcemap {{path/to/file.js}}`

- Bundle a JSX application for a comma-separated list of browsers:

`esbuild --bundle --minify --sourcemap --target={{chrome58,firefox57,safari11,edge16}} {{path/to/file.jsx}}`

- Bundle a JavaScript application for a specific node version:

`esbuild --bundle --platform={{node}} --target={{node12}} {{path/to/file.js}}`

- Bundle a JavaScript application enabling JSX syntax in `.js` files:

`esbuild --bundle app.js --loader:{{.js=jsx}} {{path/to/file.js}}`

- Bundle and serve a JavaScript application on an HTTP server:

`esbuild --bundle --serve={{port}} --outfile={{index.js}} {{path/to/file.js}}`

- Bundle a list of files to an output directory:

`esbuild --bundle --outdir={{path/to/output_directory}} {{path/to/file1 path/to/file2 ...}}`
