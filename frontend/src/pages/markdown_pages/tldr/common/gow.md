---
title: "Watch Go Files - Restart App on Change | Online Free DevTools by Hexmos"
name: gow
path: /freedevtools/tldr/common/gow
canonical: "https://hexmos.com/freedevtools/tldr/common/gow/"
description: "Watch Go files and automatically restart your application with Gow. Detect code changes, rebuild, and relaunch your app. Free online tool, no registration required."
category: common
keywords:
- go file watcher
- go auto restart
- go development
- go hot reload
- go live reload
- go build tool
- go rebuild on change
- go development server
- command line go
- gow command
features:
- Automatically restarts the application on file changes
- Watches specified file extensions
- Supports verbose mode for detailed output
- Watches multiple directories simultaneously
- Accepts arguments to pass to the application
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gow

> Watches Go files and restarts the app on changes.
> More information: <https://github.com/mitranim/gow>.

- Start and watch the current directory:

`gow run .`

- Start the application with the specified arguments:

`gow run . {{argument1 argument2 ...}}`

- Watch subdirectories in verbose mode:

`gow -v -w={{path/to/directory1,path/to/directory2,...}} run .`

- Watch the specified file extensions:

`gow -e={{go,html}} run .`

- Display help:

`gow -h`
