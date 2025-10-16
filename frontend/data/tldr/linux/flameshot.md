---
title: "Create Screenshots - Flameshot GUI | Online Free DevTools by Hexmos"
name: flameshot
path: "/freedevtools/tldr/linux/flameshot/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/flameshot/"
description: "Create screenshots with Flameshot screenshot utility. Capture screen regions and annotate images directly. Free online tool, no registration required."
category: linux
keywords:
- screenshot linux
- linux screenshot tool
- image capture linux
- flameshot screenshot
- screen capture linux
- linux screen grab
- gui screenshot linux
- linux image annotation
- command line screenshot linux
- linux screenshot utility
features:
- Capture specific screen regions
- Annotate screenshots with shapes and text
- Save screenshots to a specified path
- Copy screenshots to the clipboard
- Capture screenshots with a time delay
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# flameshot

> Screenshot utility with a GUI.
> Supports basic image editing, such as text, shapes, colors, and imgur.
> More information: <https://flameshot.org/docs/advanced/commandline-options/>.

- Create a fullscreen screenshot:

`flameshot full`

- Create a screenshot interactively:

`flameshot gui`

- Create a screenshot and save it to a specific path:

`flameshot gui {{[-p|--path]}} {{path/to/directory}}`

- Create a screenshot interactively in a simplified mode:

`flameshot launcher`

- Create a screenshot from a specific monitor:

`flameshot screen {{[-n|--number]}} {{2}}`

- Create a screenshot and print it to `stdout`:

`flameshot gui {{[-r|--raw]}}`

- Create a screenshot and copy it to the clipboard:

`flameshot gui {{[-c|--clipboard]}}`

- Create a screenshot with a specific delay in milliseconds:

`flameshot full {{[-d|--delay]}} {{5000}}`
