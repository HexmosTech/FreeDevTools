---
title: "Fuzzy Find Files - Search Files Quickly | Online Free DevTools by Hexmos"
name: fzf
path: "/freedevtools/tldr/common/fzf/"
canonical: "https://hexmos.com/freedevtools/tldr/common/fzf/"
description: "Search files quickly with Fzf, a powerful fuzzy finder. Instantly locate files, processes, and commands. Free online tool, no registration required."
category: common
keywords:
- fuzzy file finder
- command line file search
- interactive file selection
- terminal fuzzy finder
- fzf file search
- fzf linux
- fzf macos
- fzf windows
- command line process finder
- fuzzy search tool
features:
- Search files in a specified directory using fuzzy matching
- Find and select running processes via fuzzy search
- Select multiple files using Shift Tab
- Filter entries based on specified query
- Match entries based on regular expressions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fzf

> Fuzzy finder.
> Similar to `sk`.
> More information: <https://github.com/junegunn/fzf#usage>.

- Start `fzf` on all files in the specified directory:

`find {{path/to/directory}} -type f | fzf`

- Start `fzf` for running processes:

`ps aux | fzf`

- Select multiple files with `<Shift Tab>` and write to a file:

`find {{path/to/directory}} -type f | fzf {{[-m|--multi]}} > {{path/to/file}}`

- Start `fzf` with a specified query:

`fzf {{[-q|--query]}} "{{query}}"`

- Start `fzf` on entries that start with `core` and end with either `go`, `rb`, or `py`:

`fzf {{[-q|--query]}} "^core go$ | rb$ | py$"`

- Start `fzf` on entries that not match `pyc` and match exactly `travis`:

`fzf {{[-q|--query]}} "\!pyc 'travis'"`
