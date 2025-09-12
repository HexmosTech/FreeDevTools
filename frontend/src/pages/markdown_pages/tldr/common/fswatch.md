---
title: "Monitor File Changes - fswatch | Free DevTools"
name: fswatch
path: /freedevtools/tldr/common/fswatch
canonical: "https://hexmos.com/freedevtools/tldr/common/fswatch/"
description: "Monitor file changes with fswatch, triggering actions on updates or deletions. Cross-platform file change monitor. Free online tool, no registration required."
category: common
keywords:
- file change monitor
- file system monitor
- directory change detection
- real-time file monitoring
- event-driven file watching
- cross platform file watcher
- file modification detection
- fswatch bash script
- fswatch linux
- fswatch macos
features:
- Trigger commands upon file creation, modification, or deletion.
- Watch multiple files and directories simultaneously.
- Filter changes based on specific event types (e.g., Updated, Removed).
- Output absolute paths of changed files for easy integration.
- Monitor file system events in real-time.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fswatch

> A cross-platform file change monitor.
> More information: <https://emcrisostomo.github.io/fswatch>.

- Run a Bash command on file creation, update or deletion:

`fswatch {{path/to/file}} | xargs {{[-n|--max-args]}} 1 {{bash_command}}`

- Watch one or more files and/or directories:

`fswatch {{path/to/file}} {{path/to/directory}} {{path/to/another_directory/**/*.js}} | xargs {{[-n|--max-args]}} 1 {{bash_command}}`

- Print the absolute paths of the changed files:

`fswatch {{path/to/directory}} | xargs {{[-n|--max-args]}} 1 -I _ echo _`

- Filter by event type:

`fswatch --event {{Updated|Removed|Created|...}} {{path/to/directory}} | xargs {{[-n|--max-args]}} 1 {{bash_command}}`
