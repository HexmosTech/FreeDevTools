---
title: "Display Keys - Control Screenkey | Online Free DevTools by Hexmos"
name: screenkey
path: /freedevtools/tldr/linux/screenkey
canonical: "https://hexmos.com/freedevtools/tldr/linux/screenkey/"
description: "Display pressed keys with Screenkey on Linux. Show keystrokes and mouse clicks on screen for screencasting and presentations. Free online tool, no registration required."
category: linux
keywords:
- keystroke display
- screenkey screencast
- linux keystroke visualizer
- pressed keys display
- mouse click indicator
- linux screen recorder
- linux presentation tool
- screencast keyboard overlay
- keystroke visualizer linux
- on-screen keyboard display
features:
- Display pressed keys on the screen
- Visualize mouse clicks alongside keystrokes
- Customize the display position on the screen
- Change the appearance with custom colors and fonts
- Select a specific window for screenkey display
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# screenkey

> A screencast tool to display keys pressed.
> More information: <https://www.thregr.org/~wavexx/software/screenkey/>.

- Display keys which are currently being pressed on the screen:

`screenkey`

- Display keys and mouse buttons which are currently being pressed on the screen:

`screenkey {{[-M|--mouse]}}`

- Launch the settings menu of screenkey:

`screenkey --show-settings`

- Launch screenkey at a specific position:

`screenkey {{[-p|--position]}} {{top|center|bottom|fixed}}`

- Change the format of the key modifiers displayed on screen:

`screenkey --mods-mode {{normal|emacs|mac|win|tux}}`

- Change the appearance of screenkey:

`screenkey --bg-color "{{#a1b2c3}}" {{[-f|--font]}} {{Hack}} --font-color {{yellow}} --opacity {{0.8}}`

- Drag and select a window on screen to display screenkey:

`screenkey {{[-p|--position]}} fixed {{[-g|--geometry]}} {{$(slop --nodecorations --format '%g')}}`
