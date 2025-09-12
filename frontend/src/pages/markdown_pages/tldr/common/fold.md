---
title: "Format Text - Wrap Lines with Fold Command | Free DevTools"
name: fold
path: /freedevtools/tldr/common/fold
canonical: "https://hexmos.com/freedevtools/tldr/common/fold/"
description: "Format text files by wrapping lines with the Fold command. Control text output for improved readability using command line. Free online tool, no registration required."
category: common
keywords:
- text wrap command
- line wrap utility
- fold text file
- linux fold command
- macos fold command
- command line text formatting
- terminal text wrapper
- text width controller
- fold command example
- character limit text
features:
- Wrap lines to a specified width
- Break lines at whitespace
- Control text formatting in terminal
- Limit text to a maximum character width
- Format text for readability
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fold

> Wrap each line in an input file to fit a specified width and print it to `stdout`.
> More information: <https://manned.org/fold.1p>.

- Wrap each line to default width (80 characters):

`fold {{path/to/file}}`

- Wrap each line to width "30":

`fold -w30 {{path/to/file}}`

- Wrap each line to width "5" and break the line at spaces (puts each space separated word in a new line, words with length > 5 are wrapped):

`fold -w5 -s {{path/to/file}}`
