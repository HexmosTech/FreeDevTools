---
title: "Remove Columns - Control Text Columns with colrm | Online Free DevTools by Hexmos"
name: colrm
path: /freedevtools/tldr/linux/colrm
canonical: "https://hexmos.com/freedevtools/tldr/linux/colrm/"
description: "Control text columns with colrm. Effortlessly remove and manipulate columns in text streams. Free online tool, no registration required. Manipulate text streams."
category: linux
keywords:
  - text column remover
  - stdin column editor
  - command line text processing
  - colrm text filter
  - remove text columns
  - text manipulation tool
  - linux text editor
  - macos text editor
  - unix column utility
  - text stream processing
features:
  - Remove specified columns from input
  - Delete columns from a starting point to the end
  - Process column removal on standard input
  - Operate from command line interface
  - Filter and modify text column data
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# colrm

> Remove columns from `stdin`.
> More information: <https://manned.org/colrm>.

- Remove first column of `stdin`:

`colrm {{1 1}}`

- Remove from 3rd column till the end of each line:

`colrm {{3}}`

- Remove from the 3rd column till the 5th column of each line:

`colrm {{3 5}}`
