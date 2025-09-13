---
title: "Create Code Images - Carbon-now CLI | Free DevTools"
name: carbon-now
path: /freedevtools/tldr/common/carbon-now
canonical: "https://hexmos.com/freedevtools/tldr/common/carbon-now/"
description: "Create beautiful code images instantly with carbon-now CLI. Generate shareable code snippets with syntax highlighting and customizable themes. Free online tool, no registration required."
category: common
keywords:
- code image generator
- carbon-now cli
- code snippet image
- source code to image
- code screenshot tool
- code sharing tool
- carbon now command line
- cli image generator
- code image from file
- terminal image generator
features:
- Generate images from code files
- Create images from clipboard content
- Generate images from standard input
- Customize images with interactive settings
- Load image settings from saved presets
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# carbon-now

> Create beautiful images of code.
> More information: <https://github.com/mixn/carbon-now-cli>.

- Create an image from a file using default settings:

`carbon-now {{path/to/file}}`

- Create an image from a text in clipboard using default settings:

`carbon-now --from-clipboard`

- Create an image from `stdin` using default settings and copy to the clipboard:

`{{input}} | carbon-now --to-clipboard`

- Create images interactively for custom settings and optionally save a preset:

`carbon-now {{[-i|--interactive]}} {{path/to/file}}`

- Create images from a previously saved preset:

`carbon-now {{[-p|--preset]}} {{preset}} {{path/to/file}}`

- Start at a specified line of text:

`carbon-now {{[-s|--start]}} {{line}} {{path/to/file}}`

- End at a specific line of text:

`carbon-now {{[-e|--end]}} {{line}} {{path/to/file}}`

- Open image in a browser instead of saving:

`carbon-now --open {{path/to/file}}`
