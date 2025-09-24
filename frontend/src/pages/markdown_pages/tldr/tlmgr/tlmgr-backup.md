---
title: "TeX Live Backup - Manage Package Backups | Online Free DevTools by Hexmos"
name: tlmgr-backup
path: "/freedevtools/tldr/tlmgr/tlmgr-backup"
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-backup/"
description: "Manage TeX Live package backups with tlmgr backup. Create, clean, and restore packages. Free online tool, no registration required."
category: common
keywords:
- TeX Live backup
- LaTeX package backup
- tlmgr package management
- TeX distribution backup
- backup LaTeX packages
- restore TeX Live packages
- TeX Live backup command
- tlmgr backup clean
- TeX package archive
- TeX Live distribution
features:
- Create backups of individual TeX Live packages
- Create a complete backup of the entire TeX Live distribution
- Specify a custom directory for backup storage
- Remove backups of specific packages
- Remove all existing package backups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr backup

> Manage backups of TeX Live packages.
> The default backup directory is specified by the `backupdir` option, and can be obtained with `tlmgr option`.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#backup>.

- Make a backup of one or more packages:

`tlmgr backup {{package1 package2 ...}}`

- Make a backup of all packages:

`tlmgr backup --all`

- Make a backup to a custom directory:

`tlmgr backup {{package}} --backupdir {{path/to/backup_directory}}`

- Remove a backup of one or more packages:

`tlmgr backup clean {{package1 package2 ...}}`

- Remove all backups:

`tlmgr backup clean --all`
