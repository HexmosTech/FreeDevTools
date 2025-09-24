---
title: "Less - View Files Interactively | Online Free DevTools by Hexmos"
name: less
path: /freedevtools/tldr/less/less
canonical: "https://hexmos.com/freedevtools/tldr/less/less/"
description: "View files interactively with Less. Navigate, search, and follow file content directly from the command line. Free online tool, no registration required."
category: common
keywords:
- less file viewer
- interactive file reader
- command line pager
- less terminal navigation
- less file search
- less log viewer
- less linux
- less macos
- less text pager
- less scroll command
features:
- Open and display text files interactively
- Navigate through files using page up/down
- Search for specific strings within files
- Follow real-time updates to files
- Open files in an external editor
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# less

> Open a file for interactive reading, allowing scrolling and search.
> More information: <https://greenwoodsoftware.com/less/>.

- Open a file:

`less {{source_file}}`

- Page down/up:

`{{<Space>|<b>}}`

- Go to end/start of file:

`{{<G>|<g>}}`

- Forward search for a string (press `<n>`/`<N>` to go to next/previous match):

`</>{{something}}`

- Backward search for a string (press `<n>`/`<N>` to go to next/previous match):

`<?>{{something}}`

- Follow the output of the currently opened file:

`<F>`

- Open the current file in an editor:

`<v>`

- Exit:

`<q>`
