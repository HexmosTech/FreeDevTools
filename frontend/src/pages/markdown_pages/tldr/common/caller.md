---
title: "Print Function Context - Caller Command | Online Free DevTools by Hexmos"
name: caller
path: /freedevtools/tldr/common/caller
canonical: "https://hexmos.com/freedevtools/tldr/common/caller/"
description: "Print function context with Caller command. Inspect bash script function calls, line numbers, and file names. Free online tool, no registration required."
category: common
keywords:
- bash function context
- caller command
- shell script debugging
- bash script introspection
- function call stack trace
- linux caller command
- macos caller command
- print caller information
- bash script file name
- bash script line number
features:
- Print the caller's file name
- Print the caller's line number
- Display the calling function name
- Show the call stack frame count
- Inspect function calls in bash scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# caller

> Print function context.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-caller>.

- Print the line and filename where the current function was called:

`caller`

- Print the line, function and filename where the current function was called:

`caller 0`

- Print the line, the function name and the filename of a function call `n` frames back:

`caller {{n}}`
