---
title: "Sequence Generator - Output Number Sequences | Online Free DevTools by Hexmos"
name: seq
path: /freedevtools/tldr/common/seq
canonical: "https://hexmos.com/freedevtools/tldr/common/seq/"
description: "Generate number sequences with seq. Create custom number lists, format output, and control spacing. Free online tool, no registration required."
category: common
keywords:
- number sequence generator
- sequence output tool
- generate number list
- format sequence output
- linux seq command
- macos seq command
- command line sequence
- custom number sequence
- generate arithmetic sequence
- seq number formatting
features:
- Generate sequences of numbers
- Customize output format with padding
- Control the separator between numbers
- Define start, increment, and end values
- Output sequences to standard output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# seq

> Output a sequence of numbers to `stdout`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/seq-invocation.html>.

- Sequence from 1 to 10:

`seq 10`

- Every 3rd number from 5 to 20:

`seq 5 3 20`

- Separate the output with a space instead of a newline:

`seq {{[-s|--separator]}} " " 5 3 20`

- Format output width to a minimum of 4 digits padding with zeros as necessary:

`seq {{[-f|--format]}} "%04g" 5 3 20`
