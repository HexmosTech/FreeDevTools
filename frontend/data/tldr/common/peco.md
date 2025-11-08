---
title: "Filter Files - Interactive Filtering with Peco | Online Free DevTools by Hexmos"
name: peco
path: "/freedevtools/tldr/common/peco/"
canonical: "https://hexmos.com/freedevtools/tldr/common/peco/"
description: "Filter files interactively with Peco. Quickly find and select files and processes using command-line filtering. Free online tool, no registration required."
category: common
keywords:
- interactive filtering
- command line filter
- file filtering
- process filtering
- peco filter
- fuzzy finder
- terminal filter
- linux filter
- macos filter
- interactive search
features:
- Filter files from a directory using `find` command
- Filter running processes using `ps` command
- Start peco with a pre-defined query
- Interactively search through command output
- Select files and processes directly from the terminal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# peco

> Interactive filtering tool.
> More information: <https://github.com/peco/peco>.

- Start `peco` on all files in the specified directory:

`find {{path/to/directory}} -type f | peco`

- Start `peco` for running processes:

`ps aux | peco`

- Start `peco` with a specified query:

`peco --query "{{query}}"`
