---
title: "Control Kakoune - Edit Code with Multiple Selections | Free DevTools"
name: kak
path: /freedevtools/tldr/common/kak
canonical: "https://hexmos.com/freedevtools/tldr/common/kak/"
description: "Control code editing with Kakoune, leveraging multiple selections for efficient text manipulation. Collaborative editing and advanced search capabilities. Free online tool, no registration required."
category: common
keywords:
- kakoune editor
- multiple selections editor
- collaborative code editing
- modal editor
- linux code editor
- macos code editor
- text manipulation
- code navigation
- kak commands
- kak scripting
features:
- Open and edit files in a terminal-based environment
- Use multiple selections for simultaneous editing
- Search and select text using regular expressions
- Replace text across multiple selections
- Execute shell commands within the editor
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kak

> Kakoune is a mode-based code editor implementing the "multiple selections" paradigm.
> Data can be selected and simultaneously edited in different locations, using multiple selections; users can also connect to the same session for collaborative editing.
> More information: <https://kakoune.org>.

- Open a file and enter normal mode, to execute commands:

`kak {{path/to/file}}`

- Enter insert mode from normal mode, to write text into the file:

`<i>`

- Escape insert mode, to go back to normal mode:

`<Esc>`

- Replace all instances of "foo" in the current file with "bar":

`%s{{foo}}<Enter>c{{bar}}<Esc>`

- Unselect all secondary selections, and keep only the main one:

`<Space>`

- Search for numbers and select the first two:

`/\d+<Enter>N`

- Insert the contents of a file:

`<!>cat {{path/to/file}}<Enter>`

- Save the current file:

`<:>w<Enter>`
