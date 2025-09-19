---
title: "Stegsnow - Conceal & Extract Text Messages | Online Free DevTools by Hexmos"
name: stegsnow
path: /freedevtools/tldr/linux/stegsnow
canonical: "https://hexmos.com/freedevtools/tldr/linux/stegsnow/"
description: "Conceal and extract messages in text files using stegsnow.  This steganography tool utilizes tabs and spaces for encoding. Free online tool, no registration required."
category: linux
keywords:
  - text file steganography
  - stegsnow encoding
  - hidden message extraction
  - data concealment tool
  - text file encryption
  - password protected steganography
  - compressed message embedding
  - file capacity analysis
  - steganography command line
  - space-tab encoding
features:
  - Extract hidden messages from text files.
  - Extract compressed and password-protected messages.
  - Determine the approximate storage capacity of a file.
  - Conceal messages within text files.
  - Embed compressed message files into text files.
  - Conceal compressed and password-protected messages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stegsnow

> Steganography tool for concealing and extracting messages in text files encoded as tabs and spaces.
> More information: <https://darkside.com.au/snow/manual.html>.

- Extract [m]essage from file:

`stegsnow {{path/to/file.txt}}`

- Extract [C]ompressed and [p]assword protected [m]essage from file:

`stegsnow -C -p {{password}} {{path/to/file.txt}}`

- Determine approximate [S]torage capacity with line [l]ength less than 72 for file:

`stegsnow -S -l 72 {{path/to/file.txt}}`

- Conceal [m]essage in text from file and save to result:

`stegsnow -m '{{message}}' {{path/to/file.txt}} {{path/to/result.txt}}`

- Conceal message [f]ile content [C]ompressed in text from file and save to result:

`stegsnow -C -f '{{path/to/message.txt}}' {{path/to/file.txt}} {{path/to/result.txt}}`

- Conceal [m]essage [C]ompressed and [p]assword protected in text from file and save to result:

`stegsnow -C -p {{password}} -m '{{message}}' {{path/to/file.txt}} {{path/to/result.txt}}`
