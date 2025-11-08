---
title: "Generate ASCII Art - Create Text Art with Toilet | Online Free DevTools by Hexmos"
name: toilet
path: "/freedevtools/tldr/linux/toilet/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/toilet/"
description: "Generate stunning ASCII art with the Toilet command-line tool.  Customize fonts and filters to create unique text-based images. Free online tool, no registration required."
category: linux
keywords:
  - ascii art generator
  - text art generator
  - command line art
  - ascii font generator
  - toilet command
  - linux ascii art
  - terminal art
  - text based art
  - custom font ascii
  - ascii filter
features:
  - Generate ASCII art from input text.
  - Utilize various built-in fonts for diverse styles.
  - Apply filters to modify the appearance of the art.
  - Customize output with font selection.
  - List and select available filters for artistic effects.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# toilet

> Display ASCII-art fonts.
> More information: <http://caca.zoy.org/wiki/toilet>.

- Generate ASCII art for a given text:

`toilet {{input_text}}`

- Generate ASCII art using a custom font file:

`toilet {{input_text}} {{[-f|--font]}} {{font_filename}}`

- Generate ASCII art using a filter:

`toilet {{input_text}} {{[-F|--filter]}} {{filter_name}}`

- Show available toilet filters:

`toilet {{[-F|--filter]}} list`
