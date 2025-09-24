---
title: "Watch Command - Monitor Program Output | Online Free DevTools by Hexmos"
name: watch
path: /freedevtools/tldr/common/watch
canonical: "https://hexmos.com/freedevtools/tldr/common/watch/"
description: "Monitor program output with Watch Command. Execute commands periodically and observe changes with highlighting. Free online tool, no registration required."
category: common
keywords:
- Command Monitor
- Program Output Viewer
- Watch Command Linux
- Linux Terminal Watch
- Realtime Command Output
- Periodic Command Execution
- Terminal Output Monitor
- Watch Command macOS
- macOS Command Watcher
- Full Screen Output
features:
- Execute programs periodically
- Highlight differences in output
- Display output in full-screen mode
- Monitor commands at specified intervals
- Exit when output changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# watch

> Execute a program periodically and monitor the output in full-screen mode.
> More information: <https://manned.org/watch>.

- Repeatedly run a command and show the result:

`watch {{command}}`

- Re-run a command every 60 seconds:

`watch {{[-n|--interval]}} 60 {{command}}`

- Monitor disk space, highlighting differences as they appear:

`watch {{[-d|--differences]}} {{df}}`

- Repeatedly run a pipeline and show the result:

`watch "{{command_1}} | {{command_2}} | {{command_3}}"`

- Exit `watch` if the visible output changes:

`watch {{[-g|--chgexit]}} {{lsblk}}`

- Interpret terminal control characters:

`watch {{[-c|--color]}} {{ls --color=always}}`
