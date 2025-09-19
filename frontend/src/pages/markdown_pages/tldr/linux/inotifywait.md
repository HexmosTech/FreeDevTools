---
title: "Inotifywait - Monitor File Changes | Online Free DevTools by Hexmos"
name: inotifywait
path: /freedevtools/tldr/linux/inotifywait
canonical: "https://hexmos.com/freedevtools/tldr/linux/inotifywait/"
description: "Monitor file changes with Inotifywait. Watch files and directories for specific events, such as modification, access, or creation. Free online tool, no registration required."
category: linux
keywords:
- file change monitor
- directory watch linux
- inotifywait file events
- linux file system monitoring
- command line file watcher
- inotifywait recursive watch
- file modification detection
- linux inotify
- event-based file system monitoring
- real-time file change notification
features:
- Watch specific files or directories for events.
- Monitor file system changes recursively.
- Filter events based on regular expressions.
- Exit after a specified timeout period.
- Trigger commands upon file access or modification.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# inotifywait

> Waits for changes to files.
> More information: <https://manned.org/inotifywait>.

- Watch a specific file for events, exiting after the first one:

`inotifywait {{path/to/file}}`

- Continuously watch a specific file for events without exiting:

`inotifywait {{[-m|--monitor]}} {{path/to/file}}`

- Watch a directory recursively for events:

`inotifywait {{[-m|--monitor]}} {{[-r|--recursive]}} {{path/to/directory}}`

- Watch a directory for changes, excluding files, whose names match a `regex`:

`inotifywait {{[-m|--monitor]}} {{[-r|--recursive]}} --exclude "{{regex}}" {{path/to/directory}}`

- Watch a file for changes, exiting when no event occurs for 30 seconds:

`inotifywait {{[-m|--monitor]}} {{[-t|--timeout]}} {{30}} {{path/to/file}}`

- Only watch a file for file modification events:

`inotifywait {{[-e|--event]}} {{modify}} {{path/to/file}}`

- Watch a file printing only events, and no status messages:

`inotifywait {{[-q|--quiet]}} {{path/to/file}}`

- Run a command when a file is accessed:

`inotifywait {{[-e|--event]}} {{access}} {{path/to/file}} && {{command}}`
