---
title: "Fgconsole - Print Terminal Number | Online Free DevTools by Hexmos"
name: fgconsole
path: /freedevtools/tldr/linux/fgconsole
canonical: "https://hexmos.com/freedevtools/tldr/linux/fgconsole/"
description: "Print current terminal number with Fgconsole. Quickly identify the foreground virtual terminal and manage virtual terminals using Linux command line. Free online tool, no registration required."
category: linux
keywords:
  - terminal number command
  - fgconsole linux
  - virtual terminal identifier
  - tty number retrieval
  - linux terminal tools
  - command line terminal management
  - current terminal number
  - next available terminal
  - terminal switching command
  - foreground terminal identification
features:
  - Print the current foreground virtual terminal number
  - Identify serial terminals with 'serial' output
  - Determine the next available unallocated virtual terminal
  - Support for the '-n' or '--next-available' flag
  - Execute directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fgconsole

> Print the number of the foreground virtual terminal.
> More information: <https://manned.org/fgconsole>.

- Print current terminal number or `serial` if the terminal is serial:

`fgconsole`

- Print the next unallocated virtual terminal:

`fgconsole {{[-n|--next-available]}}`
