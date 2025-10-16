---
title: "Copy Clipboard - Transfer Data from Stdin | Online Free DevTools by Hexmos"
name: pbcopy
path: "/freedevtools/tldr/osx/pbcopy/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/pbcopy/"
description: "Copy text to the clipboard with pbcopy. Transfer data from stdin to the clipboard for easy pasting in other applications. Free online tool, no registration required."
category: osx
keywords:
- clipboard copy
- stdin to clipboard
- osx clipboard
- macos clipboard copy
- command line clipboard
- text to clipboard
- file copy
- standard input copy
- pbcopy macos
- shell clipboard
features:
- Copy content of files to the clipboard
- Transfer command output directly to the clipboard
- Copy data from standard input to the clipboard
- Programmatically copy text to the clipboard on macOS
- Integrate clipboard functionality into shell scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbcopy

> Copy data from `stdin` to the clipboard.
> Comparable to pressing `<Cmd c>` on the keyboard.
> More information: <https://keith.github.io/xcode-man-pages/pbcopy.1.html>.

- Place the contents of a specific file in the clipboard:

`pbcopy < {{path/to/file}}`

- Place the results of a specific command in the clipboard:

`find . -type t -name "*.png" | pbcopy`
