---
title: "Backup Data Securely - Control Restic Backups | Free DevTools"
name: restic
path: /freedevtools/tldr/common/restic
canonical: "https://hexmos.com/freedevtools/tldr/common/restic/"
description: "Control data backups securely with Restic. Manage snapshots, restore files, and prune repositories. Free online tool, no registration required."
category: common
keywords:
- restic backup
- restic restore
- restic snapshots
- restic repository
- restic prune
- data backup linux
- data backup macos
- secure data backup
- command line backup
- restic encryption
features:
- Initialize a backup repository.
- Backup directories to a repository.
- List snapshots stored in the repository.
- Restore snapshots to a target directory.
- Prune the repository to save space.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# restic

> A fast, secure and secure backup program.
> More information: <https://restic.net>.

- Initialize a backup repository in the specified local directory:

`restic init --repo {{path/to/repository}}`

- Backup a directory to the repository:

`restic --repo {{path/to/repository}} backup {{path/to/directory}}`

- Show backup snapshots currently stored in the repository:

`restic --repo {{path/to/repository}} snapshots`

- Restore a specific backup snapshot to a target directory:

`restic --repo {{path/to/repository}} restore {{latest|snapshot_id}} --target {{path/to/target}}`

- Restore a specific path from a specific backup to a target directory:

`restic --repo {{path/to/repository}} restore {{snapshot_id}} --target {{path/to/target}} --include {{path/to/restore}}`

- Clean up the repository and keep only the most recent snapshot of each unique backup:

`restic forget --keep-last 1 --prune`
