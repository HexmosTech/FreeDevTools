---
title: "Synchronize Directories - Lsyncd File Watcher | Online Free DevTools by Hexmos"
name: lsyncd
path: /freedevtools/tldr/common/lsyncd
canonical: "https://hexmos.com/freedevtools/tldr/common/lsyncd/"
description: "Synchronize files with Lsyncd, an automated file watcher. Keep directories in sync across systems using rsync, ensuring immediate mirroring. Free online tool, no registration required."
category: common
keywords:
- directory synchronization
- file synchronization
- lsyncd
- rsync
- file watcher
- real-time synchronization
- linux file sync
- cross-system file sync
- directory mirroring
- lsyncd configuration
features:
- Watch directories for file changes in real-time.
- Automatically synchronize files to a remote destination using rsync.
- Use SSH for secure file synchronization over networks.
- Configure synchronization behavior with detailed options.
- Mirror file systems across different servers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lsyncd

> Watch files and directories and run `rsync` when they change.
> It is often used to keep two directories on separate systems in sync, ensuring that changes made in one directory are immediately mirrored to the other.
> More information: <https://github.com/lsyncd/lsyncd>.

- Watch the source for changes and run `rsync` to synchronize files to the destination on every change:

`lsyncd -rsync {{path/to/source}} {{host::share_name}}`

- Use SSH instead of `rsyncd` shares:

`lsyncd -rsyncssh {{path/to/source}} {{host}} {{path/to/destination}}`
