---
title: "Repquota - Display Linux Filesystem Quotas | Free DevTools"
name: repquota
path: /freedevtools/tldr/linux/repquota
canonical: "https://hexmos.com/freedevtools/tldr/linux/repquota/"
description: "Display Linux filesystem quotas instantly with Repquota. Analyze disk usage, manage user limits, and optimize storage allocation on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- linux disk quota
- filesystem usage report
- quota management linux
- user quota analysis
- group quota analysis
- repquota command linux
- linux storage limits
- disk usage report
- quota reporting tool
- linux quota summary
features:
- Report on all filesystem quotas
- Display quota usage for users
- Display quota usage for groups
- Show quotas in a human-readable format
- Report on quotas even when not actively used
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# repquota

> Display a summary of existing file quotas for a filesystem.
> More information: <https://manned.org/repquota>.

- Report stats for all quotas in use:

`sudo repquota {{[-a|--all]}}`

- Report quota stats for all users, even those who aren't using any of their quota:

`sudo repquota {{[-v|--verbose]}} {{filesystem}}`

- Report on quotas for users only:

`repquota {{[-u|--user]}} {{filesystem}}`

- Report on quotas for groups only:

`sudo repquota {{[-g|--group]}} {{filesystem}}`

- Report on used quota and limits in a human-readable format:

`sudo repquota {{[-s|--human-readable]}} {{filesystem}}`

- Report on all quotas for users and groups in a human-readable format:

`sudo repquota {{[-augs|--all --user --group --human-readable]}}`
