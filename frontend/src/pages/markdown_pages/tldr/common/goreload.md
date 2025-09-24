---
title: "Reload Go Programs - Live Reload with Goreload | Online Free DevTools by Hexmos"
name: goreload
path: /freedevtools/tldr/common/goreload
canonical: "https://hexmos.com/freedevtools/tldr/common/goreload/"
description: "Live reload Go programs with Goreload. Automate server restarts and speed up development with hot reloading. Free online tool, no registration required."
category: common
keywords:
- go live reload
- go hot reload
- go development reload
- go file watcher
- go automatic restart
- goreload go
- goreload linux
- goreload macos
- goreload windows
- go server reload
features:
- Automatically reload Go programs on file changes
- Monitor specific files for changes
- Customize the log prefix
- Reload on any file change in the directory
- Watch binary files for changes and trigger reload
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# goreload

> Live reload utility for Go programs.
> More information: <https://github.com/acoshift/goreload>.

- Watch a binary file (defaults to `.goreload`):

`goreload {{[-b|--bin]}} {{path/to/binary}} {{path/to/file.go}}`

- Set a custom log prefix (defaults to `goreload`):

`goreload --logPrefix {{prefix}} {{path/to/file.go}}`

- Reload whenever any file changes:

`goreload --all`
