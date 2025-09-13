---
title: "Charm Account Manager - Control SSH Keys | Free DevTools"
name: charm
path: /freedevtools/tldr/common/charm
canonical: "https://hexmos.com/freedevtools/tldr/common/charm/"
description: "Control SSH keys and manage your Charm account with Charm Account Manager. Securely backup, import, and manage your keys for terminal-based apps. Free online tool, no registration required."
category: common
keywords:
- Charm account manager
- SSH key management
- Terminal application backend
- Charmbracelet backup keys
- Charm SSH keys
- Charm ID lookup
- Charm server management
- Charm account backup
- Terminal application authentication
- Command-line key manager
features:
- Backup Charm account keys securely
- Import previously backed up keys
- Locate the `cloud.charm.sh` folder
- Start a local Charm server
- Print linked SSH keys
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# charm

> Set of tools that makes adding a backend to your terminal-based applications, without worrying about user accounts, data storage and encryption.
> More information: <https://github.com/charmbracelet/charm>.

- Backup your Charm account keys:

`charm backup-keys`

- Backup Charm account keys to a specific location:

`charm backup-keys {{[-o|--output]}} {{path/to/output_file.tar}}`

- Import previously backed up Charm account keys:

`charm import-keys "{{charm-keys-backup.tar}}"`

- Find where your `cloud.charm.sh` folder resides on your machine:

`charm where`

- Start your Charm server:

`charm serve`

- Print linked SSH keys:

`charm keys`

- Print your Charm ID:

`charm id`
