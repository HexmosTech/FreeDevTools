---
title: "Generate Terminal GIFs - VHS Tape Recorder | Online Free DevTools by Hexmos"
name: vhs
path: /freedevtools/tldr/common/vhs
canonical: "https://hexmos.com/freedevtools/tldr/common/vhs/"
description: "Generate animated GIFs from terminal recordings with VHS. Create high-quality GIFs for documentation, tutorials, or presentations with this tape recorder. Free online tool, no registration required."
category: common
keywords:
- Terminal GIF generator
- VHS tape recorder
- Command line GIF recorder
- Animated GIF creator
- Terminal recording tool
- Shell recording GIF
- GIF from terminal
- Charmbracelet VHS
- vhs cli tool
- Tape file GIF converter
features:
- Create GIF animations from terminal recordings.
- Validate syntax of tape files.
- Record terminal inputs to tape files.
- Publish GIFs to shareable URLs.
- Customize terminal settings within tape files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vhs

> Generate terminal GIFs from a tape file.
> More information: <https://github.com/charmbracelet/vhs>.

- Create a tape file (add commands to the tape file using an editor):

`vhs new {{path/to/file.tape}}`

- Record inputs to a tape file:

`vhs record > {{path/to/file.tape}}`

- Record inputs to a tape file using a specific shell:

`vhs record {{[-s|--shell]}} {{shell}} > {{path/to/file.tape}}`

- Stop recording:

`exit`

- Validate the syntax of a tape file:

`vhs validate {{path/to/file.tape}}`

- Create a GIF from a tape file:

`vhs {{path/to/file.tape}}`

- Publish a GIF to <https://vhs.charm.sh> and get a shareable URL:

`vhs publish {{path/to/file.gif}}`
