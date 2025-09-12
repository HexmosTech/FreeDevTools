---
title: "Tag Files - Organize Files with tmsu | Free DevTools"
name: tmsu
path: /freedevtools/tldr/common/tmsu
canonical: "https://hexmos.com/freedevtools/tldr/common/tmsu/"
description: "Tag files efficiently with tmsu. Organize your files using multiple tags and boolean expressions for advanced searching. Free online tool, no registration required."
category: common
keywords:
- file tagging
- tag files linux
- tmsu tagger
- command line file tagging
- virtual file system
- metadata tagging
- organize files cli
- tag files macos
- tag files bash
- file organization command
features:
- Tag files with multiple keywords simultaneously
- List files by specific tags or tag combinations
- Mount a tmsu virtual filesystem
- Search files with boolean tag expressions
- Manage file metadata from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tmsu

> Simple tool for tagging files.
> More information: <https://tmsu.org>.

- Tag a specific file with multiple tags:

`tmsu tag {{path/to/file.mp3}} {{music}} {{big-jazz}} {{mp3}}`

- Tag multiple files:

`tmsu tag --tags "{{music mp3}}" {{*.mp3}}`

- List tags of specified file(s):

`tmsu tags {{*.mp3}}`

- List files with specified tag(s):

`tmsu files {{big-jazz}} {{music}}`

- List files with tags matching boolean expression:

`tmsu files "{{(year >= 1990 and year <= 2000)}} and {{grunge}}"`

- Mount tmsu virtual filesystem to an existing directory:

`tmsu mount {{path/to/directory}}`
