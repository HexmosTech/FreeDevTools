---
title: "Reverse Text - Reverse Lines and Files | Online Free DevTools by Hexmos"
name: rev
path: "/freedevtools/tldr/linux/rev/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/rev/"
description: "Reverse text strings with rev. Quickly reverse entire files or specific lines of text using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - Text Reversal
  - String Reversal
  - File Reversal
  - Line Reversal
  - Command Line Text Reversal
  - Unix rev
  - Linux rev
  - MacOS rev
  - Standard Input Reversal
  - Zero Terminated Reversal
features:
  - Reverse individual lines of text from standard input
  - Reverse entire files from the command line
  - Utilize '\0' as a line separator for zero termination
  - Output reversed content to stdout
  - Display help and version information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rev

> Reverse a line of text or a file.
> More information: <https://manned.org/rev>.

- Reverse text typed into terminal:

`rev`

- Reverse the text string "hello":

`echo "hello" | rev`

- Reverse an entire file and print to `stdout`:

`rev {{path/to/file}}`

- Use '\0' as a line separator (zero termination):

`rev {{[-0|--zero]}} {{path/to/file}}`

- Display help:

`rev {{[-h|--help]}}`

- Display version:

`rev {{[-V|--version]}}`
