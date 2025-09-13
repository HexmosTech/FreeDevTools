---
title: "Quota - Control Disk Space Usage | Free DevTools"
name: quota
path: /freedevtools/tldr/common/quota
canonical: "https://hexmos.com/freedevtools/tldr/common/quota/"
description: "Control disk space usage with Quota. Manage allocated limits and monitor storage for users and groups across different file systems. Free online tool, no registration required."
category: common
keywords:
- disk quota control
- user disk space management
- group quota monitoring
- linux disk usage limits
- macos quota command
- file system quota check
- disk space allocation
- quota reporting tool
- user storage quota
- disk space limits management
features:
- Display disk space usage for a specific user
- Show disk quotas for groups a user belongs to
- Provide verbose output, including quotas on all file systems
- Offer quiet output, showing only exceeded quotas
- Report disk quotas in human-readable format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# quota

> Display users' disk space usage and allocated limits.
> More information: <https://manned.org/quota>.

- Show disk quotas in human-readable units for the current user:

`quota {{[-s|--human-readable]}}`

- Verbose output (also display quotas on filesystems where no storage is allocated):

`quota {{[-v|--verbose]}}`

- Quiet output (only display quotas on filesystems where usage is over quota):

`quota {{[-q|--quiet]}}`

- Print quotas for the groups of which the current user is a member:

`quota {{[-g|--group]}}`

- Show disk quotas for another user:

`sudo quota {{[-u|--user]}} {{username}}`
