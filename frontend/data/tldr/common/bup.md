---
title: "Create Bup Backups - Deduplicate Data | Online Free DevTools by Hexmos"
name: bup
path: "/freedevtools/tldr/common/bup/"
canonical: "https://hexmos.com/freedevtools/tldr/common/bup/"
description: "Create backups with Bup. Easily manage incremental backups with global deduplication and version control, using the Git packfile format. Free online tool, no registration required."
category: common
keywords:
- Bup backup tool
- Git based backup
- Data deduplication
- Incremental backup
- Version control backup
- Command line backup
- Backup repository
- Bup restore
- Linux backup
- MacOS backup
features:
- Initialize a Bup repository
- Index a directory for backup
- Save a directory to the Bup repository
- List available backup snapshots
- Restore a backup snapshot to a target directory
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bup

> Backup system based on the Git packfile format, providing incremental saves and global deduplication.
> More information: <https://manned.org/bup>.

- Initialize a backup repository in a given local directory:

`bup {{[-d|--bup-dir]}} {{path/to/repository}} init`

- Prepare a given directory before taking a backup:

`bup {{[-d|--bup-dir]}} {{path/to/repository}} index {{path/to/directory}}`

- Backup a directory to the repository specifying its name:

`bup {{[-d|--bup-dir]}} {{path/to/repository}} save {{[-n|--name]}} {{backup_name}} {{path/to/directory}}`

- Show the backup snapshots currently stored in the repository:

`bup {{[-d|--bup-dir]}} {{path/to/repository}} ls`

- Restore a specific backup snapshot to a target directory:

`bup {{[-d|--bup-dir]}} {{path/to/repository}} restore {{[-C|--outdir]}} {{path/to/target_directory}} {{backup_name}}`
