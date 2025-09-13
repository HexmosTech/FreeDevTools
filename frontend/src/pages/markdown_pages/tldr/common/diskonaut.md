---
title: "Navigate Disk Space - Control Disk Usage with Diskonaut | Free DevTools"
name: diskonaut
path: /freedevtools/tldr/common/diskonaut
canonical: "https://hexmos.com/freedevtools/tldr/common/diskonaut/"
description: "Control disk space usage with Diskonaut, a terminal disk space navigator. Analyze directory sizes and free up storage space. Free online tool, no registration required."
category: common
keywords:
- disk space analyzer
- terminal disk usage
- command line disk space
- rust disk analyzer
- disk space navigator
- directory size analysis
- linux disk space
- macos disk space
- diskonaut command
- terminal file sizes
features:
- Visualize disk space usage in the terminal
- Navigate directories to analyze space consumption
- Display file sizes or block usage
- Start in a specific directory path
- Disable confirmation before deleting files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# diskonaut

> Terminal disk space navigator, written in Rust.
> More information: <https://github.com/imsnif/diskonaut>.

- Start `diskonaut` in the current directory:

`diskonaut`

- Start `diskonaut` in a specific directory:

`diskonaut {{path/to/directory}}`

- Show file sizes rather than their block usage on the disk:

`diskonaut --apparent-size {{path/to/directory}}`

- Disable deletion confirmation:

`diskonaut --disable-delete-confirmation`
