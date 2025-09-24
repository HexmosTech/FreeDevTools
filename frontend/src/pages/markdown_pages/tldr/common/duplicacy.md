---
title: "Duplicacy Backup - Manage Cloud Storage Backups | Online Free DevTools by Hexmos"
name: duplicacy
path: /freedevtools/tldr/common/duplicacy
canonical: "https://hexmos.com/freedevtools/tldr/common/duplicacy/"
description: "Manage cloud storage backups with Duplicacy. Efficiently deduplicate data, encrypt snapshots, and restore files with ease. Free online tool, no registration required."
category: common
keywords:
- Cloud Backup Tool
- Data Deduplication Tool
- Incremental Backup
- Lock-Free Backup
- Command Line Backup
- Storage Management
- File Restoration
- Snapshot Management
- Backup Encryption
- Linux Backup
features:
- Initialize SFTP storage with encryption
- Backup repositories to cloud storage
- Restore repositories from snapshots
- Verify snapshot integrity
- Prune old snapshot revisions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# duplicacy

> A lock-free deduplication cloud backup tool.
> More information: <https://github.com/gilbertchen/duplicacy/wiki>.

- Use current directory as the repository, initialize a SFTP storage and encrypt the storage with a password:

`duplicacy init {{[-e|-encrypt]}} {{snapshot_id}} {{sftp://user@192.168.2.100/path/to/storage/}}`

- Save a snapshot of the repository to the default storage:

`duplicacy backup`

- List snapshots of current repository:

`duplicacy list`

- Restore the repository to a previously saved snapshot:

`duplicacy restore -r {{revision}}`

- Check the integrity of snapshots:

`duplicacy check`

- Add another storage to be used for the existing repository:

`duplicacy add {{storage_name}} {{snapshot_id}} {{storage_url}}`

- Prune a specific revision of snapshot:

`duplicacy prune -r {{revision}}`

- Prune revisions, keeping one revision every `n` days for all revisions older than `m` days:

`duplicacy prune -keep {{n:m}}`
