---
title: "Count Lines Words - Analyze Text with wc | Online Free DevTools by Hexmos"
name: wc
path: /freedevtools/tldr/common/wc
canonical: "https://hexmos.com/freedevtools/tldr/common/wc/"
description: "Analyze text with wc, a command-line utility for counting lines, words, and bytes. Get accurate statistics and analyze text data quickly. Free online tool, no registration required."
category: common
keywords:
- text line counter
- word count analysis
- byte count tool
- character count command
- wc linux
- wc macos
- wc command line
- file statistics analyzer
- text data analysis
- line word byte count
features:
- Count the number of lines in a file
- Calculate the total word count
- Determine the byte size of a file
- Count the number of characters in a file
- Measure the length of the longest line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wc

> Count lines, words, and bytes.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html>.

- Count all lines in a file:

`wc {{[-l|--lines]}} {{path/to/file}}`

- Count all words in a file:

`wc {{[-w|--words]}} {{path/to/file}}`

- Count all bytes in a file:

`wc {{[-c|--bytes]}} {{path/to/file}}`

- Count all characters in a file (taking multi-byte characters into account):

`wc {{[-m|--chars]}} {{path/to/file}}`

- Count all lines, words and bytes from `stdin`:

`{{find .}} | wc`

- Count the length of the longest line in number of characters:

`wc {{[-L|--max-line-length]}} {{path/to/file}}`
