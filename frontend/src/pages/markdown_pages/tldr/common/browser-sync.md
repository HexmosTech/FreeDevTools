---
title: "Browser Sync - Update Browser on File Changes | Online Free DevTools by Hexmos"
name: browser-sync
path: /freedevtools/tldr/common/browser-sync
canonical: "https://hexmos.com/freedevtools/tldr/common/browser-sync/"
description: "Sync browser updates instantly with Browser Sync. Auto-reload browser on file changes and streamline web development workflow. Free online tool, no registration required."
category: common
keywords:
- browser sync server
- file change detection
- live browser reload
- web development server
- local web server
- front-end development workflow
- css auto-reload
- html auto-reload
- javascript auto-reload
- browser auto-refresh
features:
- Automatically refresh browser on file changes
- Serve files from a specific directory
- Watch specific file types for changes
- Integrate with build tools and task runners
- Create a configuration file for customized settings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# browser-sync

> A local web server that updates browser on file changes.
> More information: <https://browsersync.io/docs/command-line>.

- Start a server from a specific directory:

`browser-sync start --server {{path/to/directory}} --files {{path/to/directory}}`

- Start a server from local directory, watching all CSS files in a directory:

`browser-sync start --server --files '{{path/to/directory/*.css}}'`

- Create configuration file:

`browser-sync init`

- Start Browsersync from configuration file:

`browser-sync start --config {{config_file}}`
