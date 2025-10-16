---
title: "Yank - Extract Text from Input | Online Free DevTools by Hexmos"
name: yank
path: "/freedevtools/tldr/common/yank/"
canonical: "https://hexmos.com/freedevtools/tldr/common/yank/"
description: "Extract text with Yank, a command-line text selection tool. Quickly copy specific fields from standard input to clipboard using delimiters. Free online tool, no registration required."
category: common
keywords:
- text extraction
- command-line text selection
- yank command
- clipboard integration
- stdin processing
- text parsing
- linux text tools
- macos text tools
- field extraction
- text delimiter
features:
- Extract text fields using delimiters
- Copy selected text to the clipboard
- Filter text based on regular expressions
- Extract entire lines of text
- Specify custom delimiters for text extraction
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yank

> Read input from `stdin` and display a selection interface that allows a field to be selected and copied to the clipboard.
> More information: <https://manned.org/yank>.

- Yank using the default delimiters (\f, \n, \r, \s, \t):

`{{sudo dmesg}} | yank`

- Yank an entire line:

`{{sudo dmesg}} | yank -l`

- Yank using a specific delimiter:

`{{echo hello=world}} | yank -d {{=}}`

- Only yank fields matching a specific pattern:

`{{ps ux}} | yank -g "{{[0-9]+}}"`
