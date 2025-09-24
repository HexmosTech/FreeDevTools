---
title: "CopyQ Clipboard Manager - Control Clipboard History | Online Free DevTools by Hexmos"
name: copyq
path: /freedevtools/tldr/common/copyq
canonical: "https://hexmos.com/freedevtools/tldr/common/copyq/"
description: "Control clipboard history with CopyQ Clipboard Manager. Efficiently manage text snippets, images, and other data. Free online tool, no registration required."
category: common
keywords:
- clipboard manager
- text manager
- image clipboard
- copy paste history
- command line clipboard
- cross platform clipboard
- linux clipboard
- macos clipboard
- windows clipboard
- clipboard data
features:
- Manage clipboard history effectively
- Add text and images to the clipboard
- Print clipboard content by index
- Copy file contents to the clipboard
- Insert text with escape sequences
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# copyq

> Clipboard manager with advanced features.
> More information: <https://copyq.readthedocs.io/en/latest/command-line.html>.

- Launch CopyQ to store clipboard history:

`copyq`

- Show current clipboard content:

`copyq clipboard`

- Insert raw text into the clipboard history:

`copyq add -- {{text1}} {{text2}} {{text3}}`

- Insert text containing escape sequences ('\n', '\t') into the clipboard history:

`copyq add {{firstline\nsecondline}}`

- Print the content of the first 3 items in the clipboard history:

`copyq read 0 1 2`

- Copy a file's contents into the clipboard:

`copyq copy < {{path/to/file.txt}}`

- Copy a JPEG image into the clipboard:

`copyq copy image/jpeg < {{path/to/image.jpg}}`
