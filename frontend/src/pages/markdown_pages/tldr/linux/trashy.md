---
title: "Trash Command - Delete Files Securely with Trashy | Online Free DevTools by Hexmos"
name: trashy
path: /freedevtools/tldr/linux/trashy
canonical: "https://hexmos.com/freedevtools/tldr/linux/trashy/"
description: "Delete files securely with Trashy, the Rust-based trash utility. Recover deleted files and manage your trash from the command line. Free online tool, no registration required."
category: linux
keywords:
- linux trash command
- command line trash utility
- rust trash tool
- trashy file deletion
- linux file recovery
- command line file manager
- trash cli alternative
- secure file deletion linux
- restore deleted files linux
- trash management linux
features:
- Move files to the trash securely from the command line.
- List files currently residing in the trash.
- Restore specific files from the trash.
- Empty the trash, permanently deleting specified files.
- Restore or empty all files in the trash.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# trashy

> An alternative to `rm` and `trash-cli` written in Rust.
> More information: <https://github.com/oberblastmeister/trashy>.

- Move a specific file to the trash:

`trash {{path/to/file}}`

- Move specific files to the trash:

`trash {{path/to/file1 path/to/file2 ...}}`

- List items in the trash:

`trash list`

- Restore a specific file from the trash:

`trash restore {{file}}`

- Remove a specific file from the trash:

`trash empty {{file}}`

- Restore all files from the trash:

`trash restore --all`

- Remove all files from the trash:

`trash empty --all`
