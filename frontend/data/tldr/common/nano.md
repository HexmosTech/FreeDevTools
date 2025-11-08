---
title: "Nano Editor - Edit Text Files with Nano | Online Free DevTools by Hexmos"
name: nano
path: "/freedevtools/tldr/common/nano/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nano/"
description: "Edit text files efficiently with Nano Editor, an enhanced pico clone. Customize configurations and manage files effortlessly using the command line. Free online tool, no registration required."
category: common
keywords:
- text editor nano
- nano command line
- linux text editor
- macos text editor
- nano editor tutorial
- nano editor shortcuts
- nano configuration files
- edit text files nano
- open text files nano
- save text files nano
features:
- Open and edit multiple files simultaneously
- Configure editor settings with custom configuration files
- Position the cursor at a specific line and column in a file
- Enable soft wrapping for better readability
- Create backup files automatically on save
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nano

> Text editor. An enhanced `pico` clone.
> See also: `pico`, `rnano`.
> More information: <https://nano-editor.org/dist/latest/nano.html>.

- Open specific files, moving to the next file after closing the previous one:

`nano {{path/to/file1 path/to/file2 ...}}`

- Start the editor without using configuration files:

`nano {{[-I|--ignorercfiles]}}`

- Open a file and position the cursor at a specific line and column:

`nano +{{line}},{{column}} {{path/to/file}}`

- Open a file and enable soft wrapping:

`nano {{[-S|--softwrap]}} {{path/to/file}}`

- Open a file and indent new lines to the previous line's indentation:

`nano {{[-i|--autoindent]}} {{path/to/file}}`

- Open a file and create a backup file (`path/to/file~`) on save:

`nano {{[-B|--backup]}} {{path/to/file}}`

- Open a file in restricted mode (i.e. don't read/write to files not specified on the command-line):

`nano {{[-R|--restricted]}} {{path/to/file}}`

- Exit nano:

`<Ctrl x>`
