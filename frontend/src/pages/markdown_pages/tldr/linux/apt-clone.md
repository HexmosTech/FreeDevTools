---
title: "Clone Packages - Backup Debian Systems with apt-clone | Free DevTools"
name: apt-clone
path: /freedevtools/tldr/unknown/apt-clone
canonical: "https://hexmos.com/freedevtools/tldr/unknown/apt-clone/"
description: "Backup Debian systems with apt-clone. Clone package states for disaster recovery and system migration. Free online tool, no registration required."
category: unknown
keywords:
- debian package backup
- apt package clone
- system state backup linux
- clone debian packages
- debian package manager
- apt-clone backup
- apt-clone restore
- linux package migration
- debian system migration
- debian recovery
features:
- Clone the current system package state
- Create a backup archive of installed packages
- Restore package state from a clone file
- Display information about a clone file
- Verify restore compatibility on the current system
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apt-clone

> Clone/backup/restore the package state of a Debian-based system.
> More information: <https://github.com/mvo5/apt-clone>.

- Clone the package state of the current system into a specified directory:

`apt-clone clone {{path/to/directory}}`

- Create a clone file (`tar.gz`) for backup purposes:

`apt-clone clone --destination {{path/to/backup.tar.gz}}`

- Restore the package state from a clone file:

`apt-clone restore {{path/to/backup.tar.gz}}`

- Show information about a clone file (e.g., the release, architecture):

`apt-clone info {{path/to/backup.tar.gz}}`

- Check if the clone file can be restored on the current system:

`apt-clone restore {{path/to/backup.tar.gz}} --destination {{path/to/restore}}`
