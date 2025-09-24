---
title: "Edit Text with Nvim - Text Editing | Online Free DevTools by Hexmos"
name: nvim
path: /freedevtools/tldr/common/nvim
canonical: "https://hexmos.com/freedevtools/tldr/common/nvim/"
description: "Edit text quickly with Nvim. Manipulate and manage text files using this versatile command-line tool. Free online tool, no registration required."
category: common
keywords:
- nvim text editor
- neovim editor commands
- command line text editing
- vim text editing
- text manipulation nvim
- file editing nvim
- nvim search replace
- neovim configuration
- nvim keyboard shortcuts
- cross-platform text editor
features:
- Open and edit files
- Search for patterns within files
- Perform regex-based search and replace
- Save and quit files
- Undo previous operations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nvim

> Neovim, a programmer's text editor based on Vim, provides several modes for different kinds of text manipulation.
> Pressing `<i>` in normal mode enters insert mode. `<Esc>` or `<Ctrl c>` goes back to normal mode, which doesn't allow regular text insertion.
> See also: `vim`, `vimtutor`, `vimdiff`.
> More information: <https://neovim.io>.

- Open a file:

`nvim {{path/to/file}}`

- Enter text editing mode (insert mode):

`<Esc><i>`

- Copy ("yank") or cut ("delete") the current line (paste it with `<p>`):

`<Esc>{{<y><y>|<d><d>}}`

- Enter normal mode and undo the last operation:

`<Esc><u>`

- Search for a pattern in the file (press `<n>`/`<N>` to go to next/previous match):

`<Esc></>{{search_pattern}}<Enter>`

- Perform a `regex` substitution in the whole file:

`<Esc><:>%s/{{regex}}/{{replacement}}/g<Enter>`

- Enter normal mode and save (write) the file, and quit:

`{{<Esc><Z><Z>|<Esc><:>x<Enter>|<Esc><:>wq<Enter>}}`

- Quit without saving:

`<Esc><:>q!<Enter>`
