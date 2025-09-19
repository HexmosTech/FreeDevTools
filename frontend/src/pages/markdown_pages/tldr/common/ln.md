---
title: "Create Symbolic Links - Files & Directories | Online Free DevTools by Hexmos"
name: ln
path: /freedevtools/tldr/common/ln
canonical: "https://hexmos.com/freedevtools/tldr/common/ln/"
description: "Create symbolic links easily with ln. Manage file system links on Linux and macOS using command line. Free online tool, no registration required."
category: common
keywords:
- symbolic link generator
- create symbolic link linux
- create symbolic link macos
- linux symbolic link
- macos symbolic link
- file system links
- symbolic link command
- hard link command
- ln command linux
- ln command macos
features:
- Create symbolic links to files
- Create symbolic links to directories
- Overwrite existing symbolic links
- Create hard links to files
- Manage file system links via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ln

> Create links to files and directories.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/ln-invocation.html>.

- Create a symbolic link to a file or directory:

`ln {{[-s|--symbolic]}} /{{path/to/file_or_directory}} {{path/to/symlink}}`

- Overwrite an existing symbolic link to point to a different file:

`ln {{[-sf|--symbolic --force]}} /{{path/to/new_file}} {{path/to/symlink}}`

- Create a hard link to a file:

`ln /{{path/to/file}} {{path/to/hardlink}}`
