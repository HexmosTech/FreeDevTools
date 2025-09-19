---
title: "Manage System Extensions - Control systemd-sysext | Online Free DevTools by Hexmos"
name: systemd-sysext
path: /freedevtools/tldr/linux/systemd-sysext
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-sysext/"
description: "Control system extension images with systemd-sysext.  List, merge, unmerge, and refresh extensions easily. Free online tool, no registration required."
category: linux
keywords:
  - systemd extension management
  - linux systemd control
  - systemd image manipulation
  - systemd sysext commands
  - linux system extension tools
  - systemd-sysext list command
  - systemd-sysext merge command
  - systemd-sysext unmerge command
  - systemd-sysext refresh command
  - linux system administration
features:
  - List all currently installed system extension images.
  - Merge system extension images into the system directories.
  - Unmerge system extension images from the system.
  - Refresh system extensions by unmerging and remerging.
  - Check the current merge status of system extensions.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-sysext

> Activate or deactivate system extension images.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-sysext.html>.

- List installed extension images:

`systemd-sysext list`

- Merge system extension images into `/usr/` and `/opt/`:

`systemd-sysext merge`

- Check the current merge status:

`systemd-sysext status`

- Unmerge all currently installed system extension images from `/usr/` and `/opt/`:

`systemd-sysext unmerge`

- Refresh system extension images (a combination of `unmerge` and `merge`):

`systemd-sysext refresh`
