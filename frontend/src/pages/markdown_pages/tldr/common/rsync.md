---
title: "Rsync File Transfer - Sync and Copy Files | Free DevTools"
name: rsync
path: "/freedevtools/tldr/common/rsync"
canonical: "https://hexmos.com/freedevtools/tldr/common/rsync/"
description: "Transfer files instantly with Rsync. Securely copy files between systems, efficiently update directories, and manage file versions. Free online tool, no registration required."
category: common
keywords:
- rsync file transfer
- rsync remote sync
- rsync file copy
- rsync directory sync
- rsync ssh transfer
- rsync linux
- rsync macos
- rsync data backup
- rsync file synchronization
- rsync incremental backup
features:
- Securely transfer files over SSH
- Synchronize directories recursively
- Preserve file permissions and ownership
- Update destination with source changes
- Efficiently copy only changed files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rsync

> Transfer files either to or from a remote host (but not between two remote hosts), by default using SSH.
> To specify a remote path, use `user@host:path/to/file_or_directory`.
> More information: <https://download.samba.org/pub/rsync/rsync.1>.

- Transfer a file:

`rsync {{path/to/source}} {{path/to/destination}}`

- Use archive mode (recursively copy directories, copy symlinks without resolving, and preserve permissions, ownership and modification times):

`rsync {{[-a|--archive]}} {{path/to/source}} {{path/to/destination}}`

- Compress the data as it is sent to the destination, display verbose and human-readable progress, and keep partially transferred files if interrupted:

`rsync {{[-zvhP|--compress --verbose --human-readable --partial --progress]}} {{path/to/source}} {{path/to/destination}}`

- Recursively copy directories:

`rsync {{[-r|--recursive]}} {{path/to/source}} {{path/to/destination}}`

- Transfer directory contents, but not the directory itself:

`rsync {{[-r|--recursive]}} {{path/to/source}}/ {{path/to/destination}}`

- Use archive mode, resolve symlinks, and skip files that are newer on the destination:

`rsync {{[-auL|--archive --update --copy-links]}} {{path/to/source}} {{path/to/destination}}`

- Transfer a directory from a remote host running `rsyncd` and delete files on the destination that do not exist on the source:

`rsync {{[-r|--recursive]}} --delete rsync://{{host}}:{{path/to/source}} {{path/to/destination}}`

- Transfer a file over SSH using a different port than the default (22) and show global progress:

`rsync {{[-e|--rsh]}} 'ssh -p {{port}}' --info=progress2 {{host}}:{{path/to/source}} {{path/to/destination}}`
