---
title: "Vimdiff - Compare Files | Free DevTools"
name: vimdiff
path: /freedevtools/tldr/common/vimdiff
canonical: "https://hexmos.com/freedevtools/tldr/common/vimdiff/"
description: "Compare files with Vimdiff. This free online tool quickly finds and highlights differences between text files directly in your browser. Free online tool, no registration required."
category: common
keywords:
- vimdiff compare files
- vimdiff diff tool
- text comparison tool
- file comparison utility
- command line diff
- vim text editor
- vimdiff windows
- vimdiff navigation
- code difference viewer
- file merge tool
features:
- Compare two or more files in Vim
- Navigate between differences using keyboard shortcuts
- Copy highlighted differences between windows
- Update diff highlights and folds
- Toggle code folds for better readability
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vimdiff

> Open up two or more files in vim and show the differences between them.
> See also: `vim`, `vimtutor`, `nvim`.
> More information: <https://www.vim.org>.

- Open two files and show the differences:

`vimdiff {{path/to/file1}} {{path/to/file2}}`

- Move the cursor to the window on the left|right:

`<Ctrl w>{{<h>|<l>}}`

- Jump to the previous difference:

`<[><c>`

- Jump to the next difference:

`<]><c>`

- Copy the highlighted difference from the other window to the current window:

`<d><o>`

- Copy the highlighted difference from the current window to the other window:

`<d><p>`

- Update all highlights and folds:

`<:>diffupdate`

- Toggle the highlighted code fold:

`<z><a>`
