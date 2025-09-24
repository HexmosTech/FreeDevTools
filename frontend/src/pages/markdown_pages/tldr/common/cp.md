---
title: "Copy File - Copy Files and Directories | Online Free DevTools by Hexmos"
name: cp
path: /freedevtools/tldr/common/cp
canonical: "https://hexmos.com/freedevtools/tldr/common/cp/"
description: "Copy files easily with the cp command. Transfer directories recursively and manage file permissions efficiently with this free online tool, no registration required."
category: common
keywords:
- copy file
- copy directory
- linux cp command
- macos cp command
- gnu cp
- recursive copy
- cp verbose mode
- copy with parents
- copy symbolic links
- file management command
features:
- Copy files to new locations.
- Recursively copy entire directories.
- Preserve file attributes during copy.
- Copy multiple files at once.
- Follow symbolic links when copying.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cp

> Copy files and directories.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html>.

- Copy a file to another location:

`cp {{path/to/source_file.ext}} {{path/to/target_file.ext}}`

- Copy a file into another directory, keeping the filename:

`cp {{path/to/source_file.ext}} {{path/to/target_parent_directory}}`

- Recursively copy a directory's contents to another location (if the destination exists, the directory is copied inside it):

`cp {{[-r|--recursive]}} {{path/to/source_directory}} {{path/to/target_directory}}`

- Copy a directory recursively, in verbose mode (shows files as they are copied):

`cp {{[-vr|--verbose --recursive]}} {{path/to/source_directory}} {{path/to/target_directory}}`

- Copy multiple files at once to a directory:

`cp {{[-t|--target-directory]}} {{path/to/destination_directory}} {{path/to/file1 path/to/file2 ...}}`

- Copy all files with a specific extension to another location, in interactive mode (prompts user before overwriting):

`cp {{[-i|--interactive]}} {{*.ext}} {{path/to/target_directory}}`

- Follow symbolic links before copying:

`cp {{[-L|--dereference]}} {{link}} {{path/to/target_directory}}`

- Use the full path of source files, creating any missing intermediate directories when copying:

`cp --parents {{source/path/to/file}} {{path/to/target_file}}`
