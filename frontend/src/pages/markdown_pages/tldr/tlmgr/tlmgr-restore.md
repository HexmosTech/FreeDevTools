---
title: "TLMGR Restore - Manage TeX Live Backups | Free DevTools"
name: tlmgr-restore
path: /freedevtools/tldr/tlmgr/tlmgr-restore
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-restore/"
description: "Manage TeX Live backups with TLMGR Restore. Effortlessly recover package versions and configurations. Free online tool, no registration required."
category: common
keywords:
- TeX Live restore
- TLMGR backup restore
- TeX package recovery
- LaTeX backup manager
- TeX Live version control
- TLMGR revision restore
- command line TeX restore
- TeX distribution backup
- TeX Live configuration restore
- TLMGR backup directory
features:
- Restore specific package revisions
- Restore all backed-up packages
- Restore from a custom backup directory
- List available backup revisions
- Perform dry-run restores to preview actions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tlmgr restore

> Restore package backups created with `tlmgr backup`.
> The default backup directory is specified by the `backupdir` option, and can be obtained with `tlmgr option`.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#restore>.

- List all available backup revisions for all packages:

`tlmgr restore`

- List all available backup revisions for a specific package:

`tlmgr restore {{package}}`

- Restore a specific revision of a specific package:

`tlmgr restore {{package}} {{revision}}`

- Restore the latest revision of all backed-up packages:

`tlmgr restore --all`

- Restore a package from a custom backup directory:

`tlmgr restore {{package}} {{revision}} --backupdir {{path/to/backup_directory}}`

- Perform a dry-run and print all taken actions without making them:

`tlmgr restore --dry-run {{package}} {{revision}}`
