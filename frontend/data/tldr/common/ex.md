---
title: "Text Editor - Edit Files with ex | Online Free DevTools by Hexmos"
name: ex
path: "/freedevtools/tldr/common/ex/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ex/"
description: "Edit text files efficiently with the ex text editor. Perform regex substitutions, insert text, and switch to Vim seamlessly. Free online tool, no registration required."
category: common
keywords:
- text editor
- ex text editor
- command line editor
- file editor
- vim editor
- linux text editor
- unix text editor
- regular expression editor
- command line text manipulation
- vi compatible editor
features:
- Open and edit files from the command line
- Perform regular expression substitutions
- Insert text into a file
- Save and quit the editor
- Switch to Vim editor mode
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ex

> Text editor.
> See also: `vim`.
> More information: <https://www.vim.org>.

- Open a file:

`ex {{path/to/file}}`

- Save and Quit:

`wq<Enter>`

- Undo the last operation:

`undo<Enter>`

- Search for a pattern in the file:

`/{{search_pattern}}<Enter>`

- Perform a `regex` substitution in the whole file:

`%s/{{regex}}/{{replacement}}/g<Enter>`

- Insert text:

`i<Enter>{{text}}<Ctrl c>`

- Switch to Vim:

`visual<Enter>`
