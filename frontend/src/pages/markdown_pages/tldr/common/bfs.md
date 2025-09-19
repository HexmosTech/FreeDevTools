---
title: "Find Files - Breadth-First Search with BFS | Online Free DevTools by Hexmos"
name: bfs
path: /freedevtools/tldr/common/bfs
canonical: "https://hexmos.com/freedevtools/tldr/common/bfs/"
description: "Find files quickly with BFS Breadth-First Search command. Efficiently locate files by name, extension, or size across directories. Free online tool, no registration required."
category: common
keywords:
- breadth-first search
- bfs file search
- file system traversal
- find files by extension
- find files by size
- find files linux
- find files macos
- directory search
- file search command
- bfs command examples
features:
- Search files by name and extension recursively
- Filter files based on size ranges
- Execute commands on found files
- Exclude specific paths during search
- Find empty files and directories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bfs

> Breadth-first search for your files.
> More information: <https://manned.org/bfs>.

- Find files by extension:

`bfs {{root_path}} -name '{{*.ext}}'`

- Find files matching multiple path/name patterns:

`bfs {{root_path}} -path '{{**/path/**/*.ext}}' -or -name '{{*pattern*}}'`

- Find directories matching a given name, in case-insensitive mode:

`bfs {{root_path}} -type d -iname '{{*lib*}}'`

- Find files matching a given pattern, excluding specific paths:

`bfs {{root_path}} -name '{{*.py}}' -not -path '{{*/site-packages/*}}'`

- Find files matching a given size range, limiting the recursive depth to "1":

`bfs {{root_path}} -maxdepth 1 -size {{+500k}} -size {{-10M}}`

- Run a command for each file (use `{}` within the command to access the filename):

`bfs {{root_path}} -name '{{*.ext}}' -exec {{wc -l}} {} \;`

- Find all files modified today and pass the results to a single command as arguments:

`bfs {{root_path}} -daystart -mtime {{-1}} -exec {{tar -cvf archive.tar}} {} \+`

- Find empty files (0 byte) or directories and delete them verbosely:

`bfs {{root_path}} -type {{f|d}} -empty -delete -print`
