---
title: "Rainbow Colorizer - Colorize Text with lolcat | Online Free DevTools by Hexmos"
name: lolcat
path: "/freedevtools/tldr/common/lolcat/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lolcat/"
description: "Colorize text with lolcat and add rainbow effects to your console output. Enhance command line text with vibrant truecolor. Free online tool, no registration required."
category: common
keywords:
- rainbow colorizer
- terminal color
- console colorizer
- text colorizer
- colorize text
- linux colorizer
- macos colorizer
- command line color
- animated text
- truecolor text
features:
- Print files to the console in rainbow colors
- Animate rainbow colors for dynamic output
- Render 24-bit truecolor rainbow effects
- Pipe output from other commands through rainbow colors
- Customize rainbow animation speed
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lolcat

> Put a rainbow in everything you `cat` to the console.
> More information: <https://github.com/busyloop/lolcat>.

- Print a file to the console in rainbow colors:

`lolcat {{path/to/file}}`

- Print the result of a text-producing command in rainbow colors:

`{{fortune}} | lolcat`

- Print a file to the console with animated rainbow colors:

`lolcat {{[-a|--animate]}} {{path/to/file}}`

- Print a file to the console with 24-bit (truecolor) rainbow colors:

`lolcat {{[-t|--truecolor]}} {{path/to/file}}`
