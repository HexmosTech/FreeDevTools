---
title: "Xvfb-run - Run Commands in Virtual X Server | Online Free DevTools by Hexmos"
name: xvfb-run
path: /freedevtools/tldr/linux/xvfb-run
canonical: "https://hexmos.com/freedevtools/tldr/linux/xvfb-run/"
description: "Run commands virtually with Xvfb-run, creating a virtual X server environment. Execute graphical applications without a display using this Linux command. Free online tool, no registration required."
category: linux
keywords:
- virtual x server
- xvfb-run command
- linux virtual display
- headless application execution
- x server environment
- xvfb command linux
- run graphical commands
- auto server number xvfb
- pass arguments to xvfb
- virtual frame buffer
features:
- Run commands in a virtual X server environment
- Execute graphical applications without a display
- Automatically determine a free server number
- Pass custom arguments to the Xvfb server
- Create a virtual frame buffer for headless execution
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xvfb-run

> Run a command in a virtual X server environment.
> More information: <https://manned.org/xvfb-run>.

- Run the specified command in a virtual X server:

`xvfb-run {{command}}`

- Try to get a free server number, if the default (99) is not available:

`xvfb-run {{[-a|--auto-servernum]}} {{command}}`

- Pass arguments to the Xvfb server:

`xvfb-run {{[-s|--server-args]}} "{{-screen 0 1024x768x24}}" {{command}}`
