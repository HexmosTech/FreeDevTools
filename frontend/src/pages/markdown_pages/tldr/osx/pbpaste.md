---
title: "Control Clipboard - Access Clipboard Contents | Online Free DevTools by Hexmos"
name: pbpaste
path: /freedevtools/tldr/osx/pbpaste
canonical: "https://hexmos.com/freedevtools/tldr/osx/pbpaste/"
description: "Control clipboard contents on macOS with pbpaste. Access data, copy to file, or pipe into commands easily. Free online tool, no registration required."
category: osx
keywords:
- clipboard content
- macOS clipboard
- paste from clipboard
- command line clipboard
- text from clipboard
- stdout clipboard
- pbpaste macOS
- clipboard data access
- clipboard command
- system clipboard
features:
- Output clipboard contents to standard output
- Write clipboard data to a file
- Pipe clipboard data to other commands
- Access text and data stored in the clipboard
- Integrate clipboard content into shell scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbpaste

> Send the contents of the clipboard to `stdout`.
> Comparable to pressing `<Cmd v>` on the keyboard.
> More information: <https://keith.github.io/xcode-man-pages/pbcopy.1>.

- Write the contents of the clipboard to a file:

`pbpaste > {{path/to/file}}`

- Use the contents of the clipboard as input to a command:

`pbpaste | grep foo`
