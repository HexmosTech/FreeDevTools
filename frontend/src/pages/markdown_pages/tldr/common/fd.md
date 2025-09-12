---
title: "Find Files - Search Files Quickly with fd | Free DevTools"
name: fd
path: /freedevtools/tldr/common/fd
canonical: "https://hexmos.com/freedevtools/tldr/common/fd/"
description: "Search files quickly with fd. Find files by name, extension, or directory recursively. A faster and easier alternative to find. Free online tool, no registration required."
category: common
keywords:
- file search
- find files
- fd command
- command line file search
- linux file search
- macos file search
- alternative to find
- recursive file search
- find files by extension
- find files by name
features:
- Recursively searches for files and directories.
- Filters files by name or regular expression.
- Filters files by extension.
- Includes hidden and ignored files in searches.
- Executes commands on found files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fd

> An alternative to `find`.
> Aims to be faster and easier to use than `find`.
> More information: <https://github.com/sharkdp/fd#how-to-use>.

- Recursively find files matching a specific pattern in the current directory:

`fd "{{string|regex}}"`

- Find files that begin with a specific string:

`fd "{{^string}}"`

- Find files with a specific extension:

`fd {{[-e|--extension]}} {{txt}}`

- Find files in a specific directory:

`fd "{{string|regex}}" {{path/to/directory}}`

- Include ignored and hidden files in the search:

`fd {{[-H|--hidden]}} {{[-I|--no-ignore]}} "{{string|regex}}"`

- Execute a command on each search result returned:

`fd "{{string|regex}}" {{[-x|--exec]}} {{command}}`
