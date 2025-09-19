---
title: "Zed Editor - Open Files and Directories | Online Free DevTools by Hexmos"
name: zed
path: /freedevtools/tldr/common/zed
canonical: "https://hexmos.com/freedevtools/tldr/common/zed/"
description: "Open and edit files with Zed Editor, a fast and efficient text editor. Quickly navigate directories and manage code. Free online tool, no registration required."
category: common
keywords:
- text editor
- code editor
- file editor
- directory navigator
- zed editor linux
- zed editor macos
- zed editor windows
- open files zed
- edit code zed
- diff tool zed
features:
- Open files and directories in Zed
- Open files at specific line and column
- Compare file versions using diff mode
- Open files in foreground with logs
- Open paths in new Zed window
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zed

> Text editor designed to be fast, efficient and convenient.
> More information: <https://zed.dev/docs/#cli>.

- Open specific paths in Zed:

`zed {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Open a path in foreground and display logs:

`zed {{path/to/project}} --foreground`

- Open a path in new window:

`zed {{path/to/project}} {{[-n|--new]}}`

- Open a file at the given line number and column:

`zed {{path/to/file}}:{{line_number}}:{{column_number}}`

- Open a diff tab in Zed for two versions of a file:

`zed --diff {{path/to/old_file}} {{path/to/new_file}}`
