---
title: "Format Text - Reformat Text Files with fmt | Online Free DevTools by Hexmos"
name: fmt
path: /freedevtools/tldr/common/fmt
canonical: "https://hexmos.com/freedevtools/tldr/common/fmt/"
description: "Reformat text with fmt. Efficiently adjust line widths and paragraph spacing for improved readability. Free online tool, no registration required."
category: common
keywords:
- text formatter
- format text file
- fmt command
- line width adjuster
- paragraph spacing tool
- text reflowing
- coreutils fmt
- linux text formatting
- gnu fmt
- command line text formatter
features:
- Reformat text files to a specified width
- Join paragraphs for consistent formatting
- Split lines to enforce maximum line length
- Uniformly space words and paragraphs
- Adjust spacing between paragraphs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fmt

> Reformat a text file by joining its paragraphs and limiting the line width to a number of characters (75 by default).
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/fmt-invocation.html>.

- Reformat a file:

`fmt {{path/to/file}}`

- Reformat a file producing output lines of (at most) `n` characters:

`fmt {{[-w|--width]}} {{n}} {{path/to/file}}`

- Reformat a file without joining lines shorter than the given width together:

`fmt {{[-s|--split-only]}} {{path/to/file}}`

- Reformat a file with uniform spacing (1 space between words and 2 spaces between paragraphs):

`fmt {{[-u|--uniform-spacing]}} {{path/to/file}}`
