---
title: "Vim Editor - Control Text Editing with Vim | Free DevTools"
name: vim
path: /freedevtools/tldr/common/vim
canonical: "https://hexmos.com/freedevtools/tldr/common/vim/"
description: "Control text editing with Vim Editor, a powerful command-line text editor. Perform regex substitutions, search patterns, and navigate files efficiently. Free online tool, no registration required."
category: common
keywords:
- text editor vim
- command line vim
- vim regex substitution
- vim file navigation
- vim search pattern
- vim text manipulation
- vim help manual
- vim save quit
- vim line numbers
- vim command mode
features:
- Open and edit files from the command line
- Perform regular expression substitutions
- Search for patterns within a file
- Display line numbers for easy navigation
- Save changes and exit the editor
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vim

> Vim (Vi IMproved), a command-line text editor, provides several modes for different kinds of text manipulation.
> Pressing `<i>` in normal mode enters insert mode. Pressing `<Esc>` goes back to normal mode, which enables the use of Vim commands.
> See also: `vimdiff`, `vimtutor`, `nvim`, `gvim`.
> More information: <https://www.vim.org>.

- Open a file:

`vim {{path/to/file}}`

- Open a file at a specified line number:

`vim +{{line_number}} {{path/to/file}}`

- View Vim's help manual:

`<:>help<Enter>`

- Save and quit the current buffer:

`{{<Esc><Z><Z>|<Esc><:>x<Enter>|<Esc><:>wq<Enter>}}`

- Enter normal mode and undo the last operation:

`<Esc><u>`

- Search for a pattern in the file (press `<n>`/`<N>` to go to next/previous match):

`</>{{search_pattern}}<Enter>`

- Perform a `regex` substitution in the whole file:

`<:>%s/{{regex}}/{{replacement}}/g<Enter>`

- Display the line numbers:

`<:>set nu<Enter>`
