---
title: "Rdiff-backup - Backup Files Incrementally | Online Free DevTools by Hexmos"
name: rdiff-backup
path: /freedevtools/tldr/common/rdiff-backup
canonical: "https://hexmos.com/freedevtools/tldr/common/rdiff-backup/"
description: "Backup files with rdiff-backup for local or remote mirroring. Incrementally manage file versions and restore specific points in time. Free online tool, no registration required."
category: common
keywords:
- rdiff-backup file backup
- incremental backup tool
- remote file mirroring
- local file mirroring
- versioned file backup
- linux rdiff-backup
- command line backup
- differential backup
- data recovery tool
- file restoration tool
features:
- Back up files to local or remote repositories
- List incremental backups in a repository
- Restore files from the most recent backup
- Restore files to a specific point in time
- Perform differential backups for efficiency
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rdiff-backup

> Local/remote mirror and incremental backup tool.
> More information: <https://rdiff-backup.net/rdiff-backup.1.html>.

- Back up `path/to/source` to `path/to/backup`:

`rdiff-backup backup {{path/to/source}} {{path/to/backup}}`

- List incremental backups in repository (location path, local or remote):

`rdiff-backup list increments {{repository}}`

- Restore from most recent backup:

`rdiff-backup restore {{path/to/backup}} {{path/to/destination}}`

- Restore backed up files as they were 3 days ago:

`rdiff-backup restore --at 3D  {{path/to/backup}} {{path/to/destination}}`
