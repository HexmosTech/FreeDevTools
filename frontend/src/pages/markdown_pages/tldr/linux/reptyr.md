---
title: "Control Process Terminal - Move Processes with reptyr | Free DevTools"
name: reptyr
path: /freedevtools/tldr/linux/reptyr
canonical: "https://hexmos.com/freedevtools/tldr/linux/reptyr/"
description: "Control running processes with reptyr. Move existing processes to a new terminal easily, even after you've forgotten to use screen. Free online tool, no registration required."
category: linux
keywords:
- process terminal control
- move running process
- reptyr linux command
- attach process to terminal
- linux terminal management
- process redirection
- command line process control
- terminal session management
- pid terminal attach
- linux process detach
features:
- Move a running process to a new terminal
- Attach to a process using its PID
- Attach to a process using its name
- Redirect process output to a new terminal
- Detach and re-attach processes to different terminals
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# reptyr

> Move a running process to a new terminal.
> Best used when you forget to start a long running task in `screen`.
> More information: <https://github.com/nelhage/reptyr>.

- Move a running process to your current terminal:

`reptyr {{pid}}`

- Attach to a process using its name:

`reptyr $(pidof {{htop}})`
