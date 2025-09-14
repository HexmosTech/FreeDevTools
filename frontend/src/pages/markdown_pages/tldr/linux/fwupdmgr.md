---
title: "Firmware Update Manager - Manage Firmware Updates | Free DevTools"
name: fwupdmgr
path: /freedevtools/tldr/linux/fwupdmgr
canonical: "https://hexmos.com/freedevtools/tldr/linux/fwupdmgr/"
description: "Manage firmware updates efficiently with fwupdmgr. Update UEFI, download firmware metadata, and install updates via command line. Free online tool, no registration required."
category: linux
keywords:
  - firmware update manager
  - firmware update tool
  - linux firmware update
  - fwupd manager
  - system firmware update
  - UEFI firmware update
  - device firmware update
  - fwupdmgr command
  - firmware management tool
  - command-line firmware update
features:
  - Download and install firmware updates
  - Manage UEFI firmware updates
  - View available firmware updates
  - Display all detected devices
  - Show firmware update history
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fwupdmgr

> Update device firmware, including UEFI, using `fwupd`.
> See also: `fwupdtool`.
> More information: <https://github.com/fwupd/fwupd/blob/main/src/fwupdmgr.md>.

- Display all devices detected by `fwupd`:

`fwupdmgr get-devices`

- Download the latest firmware metadata from LVFS:

`fwupdmgr refresh`

- List the updates available for devices on your system:

`fwupdmgr get-updates`

- Install firmware updates:

`fwupdmgr update`

- Remount `/boot` with more privileges if update complains about a read-only filesystem:

`sudo mount {{[-o|--options]}} uid=1000,gid=1000,umask=0022 {{/dev/sdX}} /boot`

- Show firmware update history:

`fwupdmgr get-history`
