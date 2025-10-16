---
title: "Slop - Capture Screen Selections | Online Free DevTools by Hexmos"
name: slop
path: "/freedevtools/tldr/linux/slop/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/slop/"
description: "Capture screen selections instantly with Slop. Define screen regions and retrieve geometry data for scripting. Free online tool, no registration required."
category: linux
keywords:
- screen selection tool
- linux screen capture
- slop screen region
- geometry extractor
- area selection tool
- linux window selection
- screen coordinate tool
- selection rectangle tool
- desktop capture tool
- region capture linux
features:
- Output selection geometry to stdout
- Customize selection rectangle color
- Highlight selected screen area
- Draw selection with double-click
- Specify output format for selection data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# slop

> Get a selection of the screen.
> More information: <https://github.com/naelstrof/slop>.

- Wait for the user to make a selection and output its geometry to `stdout`:

`slop`

- Double click, rather than click and drag, to draw a selection:

`slop {{[-D|--nodrag]}}`

- Highlight the selection rather than outlining it:

`slop {{[-l|--highlight]}}`

- Specify the output format:

`slop {{[-f|--format]}} {{format_string}}`

- Specify the selection rectangle's color:

`slop {{[-c|--color]}} {{red}},{{green}},{{blue}},{{alpha}}`
