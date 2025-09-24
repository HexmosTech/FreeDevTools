---
title: "Tree - Visualize Directory Structure | Online Free DevTools by Hexmos"
name: tree
path: "/freedevtools/tldr/common/tree"
canonical: "https://hexmos.com/freedevtools/tldr/common/tree/"
description: "Visualize directory structures with Tree. Explore files and folders in a tree-like format, understanding hierarchy easily. Free online tool, no registration required."
category: common
keywords:
- directory tree visualizer
- file system tree
- linux tree command
- directory structure viewer
- unix tree command
- macos tree command
- common tree tool
- folder structure tree
- recursive directory listing
- command line tree
features:
- Display directory content as a tree.
- Limit the depth of the tree display.
- Show hidden files and directories.
- Display file sizes in a human-readable format.
- Filter files and directories using wildcard patterns.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tree

> Show the contents of the current directory as a tree.
> More information: <https://manned.org/tree>.

- Print files and directories up to 'num' levels of depth (where 1 means the current directory):

`tree -L {{num}}`

- Print directories only:

`tree -d`

- Print hidden files too with colorization on:

`tree -a -C`

- Print the tree without indentation lines, showing the full path instead (use `-N` to not escape non-printable characters):

`tree -i -f`

- Print the size of each file and the cumulative size of each directory, in human-readable format:

`tree -s -h --du`

- Print files within the tree hierarchy, using a wildcard (glob) pattern, and pruning out directories that don't contain matching files:

`tree -P '{{*.txt}}' --prune`

- Print directories within the tree hierarchy, using the wildcard (glob) pattern, and pruning out directories that aren't ancestors of the wanted one:

`tree -P {{directory_name}} --matchdirs --prune`

- Print the tree ignoring the given directories:

`tree -I '{{directory_name1|directory_name2}}'`
