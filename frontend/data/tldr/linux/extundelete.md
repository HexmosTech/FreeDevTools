---
title: "Recover Deleted Files - extundelete | Online Free DevTools by Hexmos"
name: extundelete
path: "/freedevtools/tldr/linux/extundelete/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/extundelete/"
description: "Recover deleted files with extundelete, a powerful data recovery tool for ext3/ext4 partitions. Restore files and directories with ease. Free online tool, no registration required."
category: linux
keywords:
  - extundelete data recovery
  - ext4 file recovery
  - ext3 file recovery
  - linux file recovery
  - deleted file recovery
  - partition data recovery
  - command line data recovery
  - journal parsing recovery
  - undelete files linux
  - recover deleted files ext4
features:
  - Restore all deleted files from a partition
  - Recover specific files by path
  - Restore deleted directories recursively
  - Recover files deleted after a specific date
  - Parse journal to restore data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# extundelete

> Recover deleted files from ext3 or ext4 partitions by parsing the journal.
> See also: `date` for Unix time information and `umount` for unmounting partitions.
> More information: <https://extundelete.sourceforge.net/options.html>.

- Restore all deleted files inside partition N on device X:

`sudo extundelete {{/dev/sdXN}} --restore-all`

- Restore a file from a path relative to root (Do not start the path with `/`):

`extundelete {{/dev/sdXN}} --restore-file {{path/to/file}}`

- Restore a directory from a path relative to root (Do not start the path with `/`):

`extundelete {{/dev/sdXN}} --restore-directory {{path/to/directory}}`

- Restore all files deleted after January 1st, 2020 (in Unix time):

`extundelete {{/dev/sdXN}} --restore-all --after {{1577840400}}`
