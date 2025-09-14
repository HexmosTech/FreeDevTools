---
title: "Chown - Change File Ownership | Free DevTools"
name: chown
path: /freedevtools/tldr/common/chown
canonical: "https://hexmos.com/freedevtools/tldr/common/chown/"
description: "Change file ownership with Chown. Quickly modify user and group ownership of files and directories on Linux and MacOS. Free online tool, no registration required."
category: common
keywords:
- file ownership chown
- linux file permissions
- change file owner
- chown command example
- chown linux
- chown macos
- change group ownership
- recursive chown
- file system security
- chown syntax
features:
- Change the owner of a file or directory.
- Modify the group ownership of files.
- Recursively change ownership of entire directories.
- Update ownership based on a reference file.
- Change ownership of symbolic links.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chown

> Change user and group ownership of files and directories.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/chown-invocation.html>.

- Change the owner user of a file/directory:

`chown {{user}} {{path/to/file_or_directory}}`

- Change the owner user and group of a file/directory:

`chown {{user}}:{{group}} {{path/to/file_or_directory}}`

- Change the owner user and group to both have the name `user`:

`chown {{user}}: {{path/to/file_or_directory}}`

- Recursively change the owner of a directory and its contents:

`chown {{[-R|--recursive]}} {{user}} {{path/to/directory}}`

- Change the owner of a symbolic link:

`chown {{[-h|--no-dereference]}} {{user}} {{path/to/symlink}}`

- Change the owner of a file/directory to match a reference file:

`chown --reference {{path/to/reference_file}} {{path/to/file_or_directory}}`
