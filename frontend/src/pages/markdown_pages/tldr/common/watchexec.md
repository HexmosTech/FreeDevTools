---
title: "Watchexec - Control File Changes | Online Free DevTools by Hexmos"
name: watchexec
path: /freedevtools/tldr/common/watchexec
canonical: "https://hexmos.com/freedevtools/tldr/common/watchexec/"
description: "Control file changes with Watchexec. Automate actions upon file modifications, triggering commands and tasks instantly. Free online tool, no registration required."
category: common
keywords:
- file change watcher
- file system monitoring
- file event handling
- command execution on file change
- automatic task runner
- file change trigger
- watchexec automation
- directory monitoring
- file update detection
- linux file watcher
features:
- Executes commands automatically on file changes
- Watches specific directories or files for modifications
- Restarts processes with custom stop signals
- Filters changes based on file extensions
- Polls for changes at defined intervals
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# watchexec

> Run arbitrary commands when files change.
> More information: <https://manned.org/watchexec>.

- Call `ls -la` when any file in the current directory changes:

`watchexec {{ls -la}}`

- Run `make` when any JavaScript, CSS and HTML file in the current directory changes:

`watchexec {{[-e|--exts]}} {{js,css,html}} make`

- Run `make` when any file in the `lib` or `src` directory changes:

`watchexec {{[-w|--watch]}} {{lib}} {{[-w|--watch]}} {{src}} {{make}}`

- Call/restart `my_server` when any file in the current directory changes, sending `SIGKILL` to stop the child process:

`watchexec {{[-r|--restart]}} --stop-signal {{SIGKILL}} {{my_server}}`

- Restart the execution of a command when any Java source file in the current directory changes, sending `SIGKILL` and only checking for updates every `n`ms:

`watchexec {{[-r|--restart]}} --stop-signal {{SIGKILL}} --poll {{10000}} {{[-e|--exts]}} {{java}} {{command}}`
