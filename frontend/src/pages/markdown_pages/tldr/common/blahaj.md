---
title: "Colorize Output - Format Text with BLAHAJ | Online Free DevTools by Hexmos"
name: blahaj
path: /freedevtools/tldr/common/blahaj
canonical: "https://hexmos.com/freedevtools/tldr/common/blahaj/"
description: "Format text output with BLAHAJ, a command-line colorizer for flags and sharks. Add vibrant colors to your terminal. Free online tool, no registration required."
category: common
keywords:
- terminal colorizer
- output formatting
- command line color
- lolcat colorizer
- flag colorizer
- shark colorizer
- text styling
- command output
- terminal styling
- blahaj command
features:
- Colorize terminal output based on character
- Colorize terminal output based on word
- Print flags with custom colors
- Print sharks with trans colors
- Apply colors to command output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# blahaj

> A lolcat-like output colorizer that also prints flags and colorful sharks.
> More information: <https://codeberg.org/GeopJr/BLAHAJ>.

- Get a list of possible flags/colors:

`blahaj --flags`

- Print a shark (blahaj) with default trans colors:

`blahaj {{[-s|--shark]}}`

- Print a random flag with a 2x size multiplier:

`blahaj {{[-f|--flag]}} {{[-r|--random]}} {{[-m|--multiplier]}} 2`

- Print the result of a text-producing command with lesbian colors:

`{{cowsay "Hello, world"}} | blahaj {{[-c|--colors]}} lesbian`

- Print text and color by individual character:

`echo "{{Hello, world}}" | blahaj {{[-i|--individual]}}`

- Print contents of a text document, coloring the background instead of text, by word:

`blahaj {{[-w|--words]}} {{[-b|--background]}} {{path/to/file}}`
