---
title: "View Files - Interactive File Viewer with Most | Free DevTools"
name: most
path: /freedevtools/tldr/common/most
canonical: "https://hexmos.com/freedevtools/tldr/common/most/"
description: "View files interactively with Most. A powerful file viewer for scrolling, searching, and navigating multiple files with ease. Free online tool, no registration required."
category: common
keywords:
- interactive file viewer
- terminal file pager
- command line file reader
- text file browser
- linux file viewer
- unix file pager
- most command
- most file navigation
- multi-file viewer
- terminal text search
features:
- Open and view multiple files simultaneously
- Search for specific text within files
- Navigate through files using keyboard shortcuts
- Split the window to view multiple files at once
- Jump to a specific line number within a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# most

> Open one or several files for interactive reading, allowing scrolling and search.
> More information: <https://manned.org/most>.

- Open a file:

`most {{path/to/file}}`

- Open several files:

`most {{path/to/file1 path/to/file2 ...}}`

- Open a file at the first occurrence of "string":

`most {{path/to/file}} +/{{string}}`

- Move through opened files:

`<:><n>{{<ArrowUp>|<ArrowDown>}}`

- Jump to the 100th line:

`<j>{{100}}<Enter>`

- Edit current file:

`<e>`

- Split the current window in half:

`<CTRL x><o>`

- Exit:

`<q>`
