---
title: "File Move - Rename Files & Directories | Online Free DevTools by Hexmos"
name: mv
path: /freedevtools/tldr/common/mv
canonical: "https://hexmos.com/freedevtools/tldr/common/mv/"
description: "Move files and directories with the mv command. Easily rename files, move them to different locations, and manage file operations. Free online tool, no registration required."
category: common
keywords:
- file move
- rename files
- move directory
- linux mv command
- macos mv command
- command line file management
- bulk file rename
- directory reorganization
- file system manipulation
- cli move files
features:
- Rename files and directories
- Move files between directories
- Overwrite files with optional confirmation
- Move multiple files simultaneously
- Move files using a target directory specifier
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mv

> Move or rename files and directories.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/mv-invocation.html>.

- Rename a file or directory when the target is not an existing directory:

`mv {{path/to/source}} {{path/to/target}}`

- Move a file or directory into an existing directory:

`mv {{path/to/source}} {{path/to/existing_directory}}`

- Move multiple files into an existing directory, keeping the filenames unchanged:

`mv {{path/to/source1 path/to/source2 ...}} {{path/to/existing_directory}}`

- Do not prompt for confirmation before overwriting existing files:

`mv {{[-f|--force]}} {{path/to/source}} {{path/to/target}}`

- Prompt for confirmation interactively before overwriting existing files, regardless of file permissions:

`mv {{[-i|--interactive]}} {{path/to/source}} {{path/to/target}}`

- Do not overwrite existing files at the target:

`mv {{[-n|--no-clobber]}} {{path/to/source}} {{path/to/target}}`

- Move files in verbose mode, showing files after they are moved:

`mv {{[-v|--verbose]}} {{path/to/source}} {{path/to/target}}`

- Specify target directory so that you can use external tools to gather movable files:

`{{find /var/log -type f -name '*.log' -print0}} | {{xargs -0}} mv {{[-t|--target-directory]}} {{path/to/target_directory}}`
