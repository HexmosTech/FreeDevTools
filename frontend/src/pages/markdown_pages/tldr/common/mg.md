---
title: "Control Text Files - Edit Files with mg | Online Free DevTools by Hexmos"
name: mg
path: /freedevtools/tldr/common/mg
canonical: "https://hexmos.com/freedevtools/tldr/common/mg/"
description: "Edit text files efficiently with mg, a lightweight `emacs`-based editor. Open, modify, and save files quickly. Free online tool, no registration required."
category: common
keywords:
- text file editor
- command line editor
- mg editor linux
- mg editor macos
- portable text editor
- small text editor
- emacs alternative
- lightweight text editor
- file editing cli
- terminal text editor
features:
- Open and edit text files from the command line
- Open files at a specific line number
- Open files in read-only mode
- Disable backup file creation
- Edit files quickly and efficiently
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mg

> A small, fast, and portable text editor based on `emacs`.
> More information: <https://manned.org/mg>.

- Open a file for editing:

`mg {{path/to/file}}`

- Open a file at a specified line number:

`mg +{{line_number}} {{path/to/file}}`

- Open files in a read-only mode:

`mg -R {{path/to/file1 path/to/file2 ...}}`

- Disable `~` backup files while editing:

`mg -n {{path/to/file}}`
