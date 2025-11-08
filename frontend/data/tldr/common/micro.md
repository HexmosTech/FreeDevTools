---
title: "Micro Editor - Control Text Editing in Terminal | Online Free DevTools by Hexmos"
name: micro
path: "/freedevtools/tldr/common/micro/"
canonical: "https://hexmos.com/freedevtools/tldr/common/micro/"
description: "Control text editing efficiently with Micro Editor. Navigate and manipulate text using keyboard shortcuts or mouse. Free online tool, no registration required."
category: common
keywords:
- text editor command line
- terminal text editor
- console text editor
- linux text editor
- macos text editor
- windows text editor
- keyboard text editor
- mouse text editor
- micro editor commands
- micro editor shortcuts
features:
- Open and edit files in the terminal
- Save file changes with a simple keyboard shortcut
- Search and replace text within a file
- Execute commands directly from the editor
- Cut entire lines of text quickly
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# micro

> A modern and intuitive terminal-based text editor.
> You can use your keyboard, but also your mouse to navigate and/or select text.
> More information: <https://micro-editor.github.io>.

- Open a file:

`micro {{path/to/file}}`

- Save a file:

`<Ctrl s>`

- Cut the entire line:

`<Ctrl k>`

- Search for a pattern in the file (press `<Ctrl n>`/`<Ctrl p>` to go to next/previous match):

`<Ctrl f>{{pattern}}<Enter>`

- Execute a command:

`<Ctrl e>{{command}}<Enter>`

- Perform a substitution in the whole file:

`<Ctrl e>replaceall "{{pattern}}" "{{replacement}}"<Enter>`

- Quit:

`<Ctrl q>`
