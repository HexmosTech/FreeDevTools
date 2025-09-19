---
title: "Create Xephyr Window - Nested X Server | Online Free DevTools by Hexmos"
name: xephyr
path: /freedevtools/tldr/common/xephyr
canonical: "https://hexmos.com/freedevtools/tldr/common/xephyr/"
description: "Create nested X servers with Xephyr, a tool for running X applications within X windows. Easily test environments and manage multiple displays. Free online tool, no registration required."
category: common
keywords:
- nested X server
- Xephyr X window
- X application testing
- Linux X server
- virtual display
- X11 application
- X server emulator
- Xephyr display manager
- X window manager
- graphical testing
features:
- Create nested X server environments
- Run X applications in virtual windows
- Manage multiple virtual displays
- Test graphical applications in isolation
- Isolate X environments for security
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Xephyr

> A nested X server that runs as an X application.
> More information: <https://manned.org/xserver-xephyr>.

- Create a black window with display ID ":2":

`Xephyr -br -ac -noreset -screen {{800x600}} {{:2}}`

- Start an X application on the new screen:

`DISPLAY=:2 {{command_name}}`
