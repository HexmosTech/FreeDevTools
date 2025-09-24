---
title: "Compare Files - Meld Graphical Diff Tool | Online Free DevTools by Hexmos"
name: meld
path: /freedevtools/tldr/common/meld
canonical: "https://hexmos.com/freedevtools/tldr/common/meld/"
description: "Compare files with Meld, a graphical diff and merge tool for developers. Visualize differences, resolve conflicts, and track changes. Free online tool, no registration required."
category: common
keywords:
  - file comparison tool
  - graphical diff tool
  - merge tool linux
  - code comparison tool
  - directory comparison
  - visual diff tool
  - file merge utility
  - meld linux
  - meld macos
  - three way merge
features:
  - Visually compare two or three files for differences.
  - Compare directories to identify added, removed, and changed files.
  - Merge changes between files with a graphical interface.
  - Open multiple comparisons in separate tabs.
  - Identify and resolve conflicts within files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# meld

> Graphical diffing and merging tool.
> More information: <https://manned.org/meld>.

- Start `meld`:

`meld`

- Compare 2 files:

`meld {{path/to/file_1}} {{path/to/file_2}}`

- Compare 2 directories:

`meld {{path/to/directory_1}} {{path/to/directory_2}}`

- Compare 3 files:

`meld {{path/to/file_1}} {{path/to/file_2}} {{path/to/file_3}}`

- Open a comparison as a new tab in a pre-existing meld instance:

`meld --newtab {{path/to/file_1}} {{path/to/file_2}}`

- Compare multiple sets of files:

`meld --diff {{path/to/file_1}} {{path/to/file_2}} --diff {{path/to/file_3}} {{path/to/file_4}}`
