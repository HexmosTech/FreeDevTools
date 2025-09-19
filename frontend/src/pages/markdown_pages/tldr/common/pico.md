---
title: "Edit Text with Pico - Command-Line Editor | Online Free DevTools by Hexmos"
name: pico
path: /freedevtools/tldr/common/pico
canonical: "https://hexmos.com/freedevtools/tldr/common/pico/"
description: "Edit text with Pico, a simple command-line text editor based on Alpine Composer. Create and modify files directly from your terminal. Free online tool, no registration required."
category: common
keywords:
- pico text editor
- command line text editor
- linux text editor
- unix text editor
- alpine composer pico
- terminal text editing
- pico editor commands
- console based text editor
- pico file editor
- text editing tools
features:
- Open and edit text files from the command line
- Navigate to a specific line within a file
- Define a custom quote string for email-like formatting
- Enable mouse support for easier navigation in terminals like xterm
- Enable a read-only mode to prevent accidental modifications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pico

> Text editor styled after the Alpine Composer.
> More information: <https://manned.org/pico>.

- Start the editor:

`pico {{path/to/file}}`

- Start the editor with the cursor located n lines into the file:

`pico +{{n}} {{path/to/file}}`

- Start the editor with the cursor shown before the current selection:

`pico -g {{path/to/file}}`

- Define the quote string for files such as email:

`pico -Q "{{quotestring}}" {{path/to/file}}`

- Enable mouse functionality when run within an `xterm` window:

`pico -m {{path/to/file}}`

- Set the operating directory for `pico`:

`pico -o {{path/to/directory}}`

- Enable "view only" mode, which disallows any edits:

`pico -v {{path/to/file}}`

- Display all files including those beginning with a period:

`pico -a`
