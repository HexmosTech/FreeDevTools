---
title: "Control Mouse & Keyboard - ydotool Commands | Online Free DevTools by Hexmos"
name: ydotool
path: /freedevtools/tldr/linux/ydotool
canonical: "https://hexmos.com/freedevtools/tldr/linux/ydotool/"
description: "Control mouse and keyboard inputs with ydotool commands.  Simulate clicks, keystrokes, and more across different display servers. Free online tool, no registration required."
category: linux
keywords:
  - keyboard control commands
  - mouse control commands
  - ydotool commands
  - simulate keystrokes
  - simulate mouse clicks
  - cross-platform input
  - linux input commands
  - command-line input control
  - automated input scripting
  - system input automation
features:
  - Simulate mouse clicks (left, right, etc.)
  - Simulate keyboard key presses and combinations
  - Send key sequences for complex actions
  - Works across different display servers (X11, Wayland)
  - Control input devices via command-line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ydotool

> Control keyboard and mouse inputs via commands in a way that is display server agnostic.
> More information: <https://github.com/ReimuNotMoe/ydotool>.

- Start the ydotool daemon in the background:

`ydotoold`

- Perform a `<LeftClick>` input:

`ydotool click 0xC0`

- Perform a `<RightClick>` input:

`ydotool click 0xC1`

- Input `<Alt F4>`:

`ydotool key 56:1 62:1 62:0 56:0`
