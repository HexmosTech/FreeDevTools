---
title: "Find Files with Skim - Fuzzy Finder in Rust | Online Free DevTools by Hexmos"
name: sk
path: /freedevtools/tldr/common/sk
canonical: "https://hexmos.com/freedevtools/tldr/common/sk/"
description: "Find files quickly with Skim, a command-line fuzzy finder written in Rust. Locate files, filter processes, and select multiple items efficiently. Free online tool, no registration required."
category: common
keywords:
- fuzzy file finder
- command line fuzzy finder
- rust fuzzy finder
- skim fuzzy finder
- terminal file finder
- linux file finder
- macos file finder
- command line search
- fuzzy search tool
- process filtering
features:
- Find files recursively in a directory
- Filter running processes
- Execute searches using a specified query
- Select multiple files using shift tab
- Output selected files to a new file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sk

> Fuzzy finder written in Rust.
> Similar to `fzf`.
> More information: <https://github.com/lotabout/skim>.

- Start `skim` on all files in the specified directory:

`find {{path/to/directory}} -type f | sk`

- Start `skim` for running processes:

`ps aux | sk`

- Start `skim` with a specified query:

`sk --query "{{query}}"`

- Select multiple files with `<Shift Tab>` and write to a file:

`find {{path/to/directory}} -type f | sk --multi > {{path/to/file}}`
