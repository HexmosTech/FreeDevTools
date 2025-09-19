---
title: "Quotacheck - Manage Disk Usage with Quota Files | Online Free DevTools by Hexmos"
name: quotacheck
path: /freedevtools/tldr/linux/quotacheck
canonical: "https://hexmos.com/freedevtools/tldr/linux/quotacheck/"
description: "Manage disk usage efficiently with quotacheck.  Scan filesystems, check and repair quota files to control disk space allocation. Free online tool, no registration required."
category: linux
keywords:
  - disk space quota check
  - filesystem quota management
  - linux quotacheck command
  - quota file repair tool
  - unix quota control
  - quotacheck usage examples
  - check disk usage linux
  - manage user quotas
  - manage group quotas
  - quotacheck troubleshooting
features:
  - Scans filesystems for disk usage
  - Creates and checks quota files
  - Repairs damaged quota files
  - Allows checking quotas on specific users and groups
  - Offers verbose and debug modes for detailed analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# quotacheck

> Scan a filesystem for disk usage; create, check and repair quota files.
> It is best to run quota check with quotas turned off to prevent damage or loss to quota files.
> More information: <https://manned.org/quotacheck>.

- Check quotas on all mounted non-NFS filesystems:

`sudo quotacheck --all`

- Force check even if quotas are enabled (this can cause damage or loss to quota files):

`sudo quotacheck --force {{mountpoint}}`

- Check quotas on a given filesystem in debug mode:

`sudo quotacheck --debug {{mountpoint}}`

- Check quotas on a given filesystem, displaying the progress:

`sudo quotacheck --verbose {{mountpoint}}`

- Check user quotas:

`sudo quotacheck --user {{user}} {{mountpoint}}`

- Check group quotas:

`sudo quotacheck --group {{group}} {{mountpoint}}`
