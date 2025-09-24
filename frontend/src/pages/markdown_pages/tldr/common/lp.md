---
title: "Print Files - Print Files on Linux, macOS | Online Free DevTools by Hexmos"
name: lp
path: /freedevtools/tldr/common/lp
canonical: "https://hexmos.com/freedevtools/tldr/common/lp/"
description: "Print files with lp on Linux and macOS. Easily send files to printers, specify printers, and manage print jobs from the command line. Free online tool, no registration required."
category: common
keywords:
- print files linux
- print files macos
- print command linux
- print command macos
- linux print utility
- macos print utility
- command line printing
- lp command printing
- print job manager
- cups printing command
features:
- Print files to the default printer
- Print files to a specific named printer
- Print multiple copies of a file
- Print specific pages from a file
- Resume interrupted print jobs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lp

> Print files.
> More information: <https://manned.org/lp>.

- Print the output of a command to the default printer (see `lpstat` command):

`echo "test" | lp`

- Print a file to the default printer:

`lp {{path/to/filename}}`

- Print a file to a named printer (see `lpstat` command):

`lp -d {{printer_name}} {{path/to/filename}}`

- Print `n` copies of a file to the default printer:

`lp -n {{n}} {{path/to/filename}}`

- Print only certain pages to the default printer (print pages 1, 3-5, and 16):

`lp -P 1,3-5,16 {{path/to/filename}}`

- Resume printing a job:

`lp -i {{job_id}} -H resume`
