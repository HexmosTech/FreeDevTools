---
title: "Bundle JavaScript - Create Web Bundles with Webpack | Online Free DevTools by Hexmos"
name: webpack
path: /freedevtools/tldr/common/webpack
canonical: "https://hexmos.com/freedevtools/tldr/common/webpack/"
description: "Bundle JavaScript with Webpack for optimized web applications. Minify, transpile, and manage dependencies using command line. Free online tool, no registration required."
category: common
keywords:
- javascript bundler
- webpack bundle creation
- web project packaging
- javascript module loader
- css loader webpack
- dependency management
- javascript minification
- front end build tool
- web application bundling
- webpack configuration
features:
- Bundle JavaScript and other assets into a single file
- Load CSS files directly from JavaScript files
- Use a configuration file for advanced customization
- Automatically recompile on project file changes
- Manage dependencies and create optimized bundles
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# webpack

> Bundle a web project's js files and other assets into a single output file.
> More information: <https://webpack.js.org>.

- Create a single output file from an entry point file:

`webpack {{app.js}} {{bundle.js}}`

- Load CSS files too from the JavaScript file (this uses the CSS loader for CSS files):

`webpack {{app.js}} {{bundle.js}} --module-bind '{{css=css}}'`

- Pass a configuration file (with e.g. the entry script and the output filename) and show compilation progress:

`webpack --config {{webpack.config.js}} --progress`

- Automatically recompile on changes to project files:

`webpack --watch {{app.js}} {{bundle.js}}`
