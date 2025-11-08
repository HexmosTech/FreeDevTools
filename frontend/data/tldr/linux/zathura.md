---
title: "Control Documents with Zathura - Modal Viewer | Online Free DevTools by Hexmos"
name: zathura
path: "/freedevtools/tldr/linux/zathura/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/zathura/"
description: "Control documents easily with Zathura, a modal document viewer. Navigate, rotate, and search within documents using a command-line interface. Free online tool, no registration required."
category: linux
keywords:
- linux document viewer
- modal document reader
- zathura linux command
- command line pdf viewer
- pdf reader linux
- postscript document viewer
- djvu file reader
- zathura configuration
- ebook reader linux
- lightweight document viewer
features:
- View and navigate documents using Vim-like keybindings.
- Rotate and invert colors within documents.
- Search for specific text strings.
- Create and manage bookmarks within documents.
- Open various document formats (PDF, PostScript, DjVu).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zathura

> A Vim-like modal document viewer, with an integrated command-line.
> Make sure a backend is installed (poppler, PostScript, or DjVu).
> More information: <https://pwmt.org/projects/zathura/>.

- Open a file:

`zathura {{path/to/file}}`

- Navigate left/up/down/right:

`{{<h>|<j>|<k>|<l>|<ArrowKeys>}}`

- Rotate:

`<r>`

- Invert Colors:

`<Ctrl r>`

- Search for text by a given string:

`</>{{string}}`

- Create/delete bookmarks:

`<:>{{bmark|bdelete}} {{bookmark_name}}<Enter>`

- List bookmarks:

`<:>blist<Enter>`
