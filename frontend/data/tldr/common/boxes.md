---
title: "Create ASCII Art Boxes - Draw Boxes | Online Free DevTools by Hexmos"
name: boxes
path: "/freedevtools/tldr/common/boxes/"
canonical: "https://hexmos.com/freedevtools/tldr/common/boxes/"
description: "Draw ASCII art boxes with Boxes. Customize box designs and sizes for visually appealing command-line output. Free online tool, no registration required."
category: common
keywords:
- ASCII Art Generator
- Box Drawing Tool
- Command Line Boxes
- Text Art Maker
- Terminal Box Art
- ASCII Box Design
- Linux Box Command
- macOS Boxes
- Shell Scripting Art
- String Art Converter
features:
- Draw boxes around text strings in the command line
- Remove existing boxes from text
- Customize the box design using various styles
- Specify the box size in columns and lines
- Align text within the box horizontally and vertically
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# boxes

> Draw, remove, and repair ASCII art boxes.
> More information: <https://boxes.thomasjensen.com/boxes-man-1.html>.

- Draw a box around a string:

`echo "{{string}}" | boxes`

- Remove a box from a string:

`echo "{{string}}" | boxes {{[-r|--remove]}}`

- Specify the box design:

`echo "{{string}}" | boxes {{[-d|--design]}} {{parchment}}`

- Specify the box size (in columns by lines):

`echo "{{string}}" | boxes {{[-s|--size]}} {{10}}x{{5}}`

- Align the box text [h]orizonally (at [l]eft, [c]enter or [r]ight):

`echo "{{string}}" | boxes {{[-a|--align]}} h{{l|c|r}}`

- Align the box text [v]ertically (at [t]op, [c]enter or [b]ottom):

`echo "{{string}}" | boxes {{[-a|--align]}} v{{t|c|b}}`

- [j]ustify the box text (at [l]eft, [c]enter or [r]ight):

`echo "{{string}}" | boxes {{[-a|--align]}} j{{l|c|r}}{{vt}}`
