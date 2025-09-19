---
title: "Display Messages - Fullscreen Control with sm | Online Free DevTools by Hexmos"
name: sm
path: /freedevtools/tldr/linux/sm
canonical: "https://hexmos.com/freedevtools/tldr/linux/sm/"
description: "Control fullscreen messages instantly with sm. Customize colors, rotation, and input sources. Free online tool, no registration required."
category: linux
keywords:
  - fullscreen message display
  - command-line message
  - terminal message tool
  - console output customization
  - text output manipulation
  - customized message display
  - screen message control
  - terminal fullscreen application
  - CLI message tool
  - simple message display
features:
  - Display full-screen messages with custom text.
  - Invert message colors for high contrast.
  - Set custom foreground and background colors.
  - Rotate messages in 90-degree increments.
  - Display messages from other commands' output.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sm

> Display a short message fullscreen.
> More information: <https://github.com/nomeata/screen-message>.

- Display a message in full-screen:

`sm "{{Hello World!}}"`

- Display a message with inverted colors:

`sm {{[-i|--invert]}} "{{Hello World!}}"`

- Display a message with a custom foreground color:

`sm {{[-f|--foreground]}} {{blue}} "{{Hello World!}}"`

- Display a message with a custom background color:

`sm {{[-b|--background]}} {{#008888}} "{{Hello World!}}"`

- Display a message rotated 3 times (in steps of 90 degrees, counterclockwise):

`sm {{[-r|--rotate]}} {{3}} "{{Hello World!}}"`

- Display a message using the output from another command:

`{{echo "Hello World!"}} | sm -`
