---
title: "Remove Volume Groups - Control LVM with vgremove | Online Free DevTools by Hexmos"
name: vgremove
path: /freedevtools/tldr/linux/vgremove
canonical: "https://hexmos.com/freedevtools/tldr/linux/vgremove/"
description: "Remove LVM volume groups with vgremove.  Manage and control your logical volumes efficiently. Free online tool, no registration required."
category: linux
keywords:
  - lvm volume group removal
  - vgremove command
  - linux lvm management
  - remove lvm volume
  - delete lvm volume group
  - lvm administration
  - linux system administration
  - vgremove tutorial
  - lvm command line
  - logical volume management
features:
  - Remove individual or multiple volume groups.
  - Force removal of volume groups without confirmation.
  - Set debug level for detailed logging.
  - Utilize custom configuration settings.
  - Provides helpful usage information via the help command.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vgremove

> Remove volume group(s) in LVM.
> More information: <https://manned.org/vgremove>.

- Remove a volume group with confirmation:

`vgremove {{volume_group}}`

- Forcefully remove a volume group without confirmation:

`vgremove {{[-f|--force]}} {{volume_group}}`

- Set the debug level for detailed logging to level 2, (repeat `--debug` up to 6 times to increase the level):

`vgremove {{[-d|--debug]}} {{[-d|--debug]}} {{volume_group}}`

- Use a specific config setting to override defaults:

`vgremove --config '{{global/locking_type=1}}' {{volume_group}}`

- Display help text for usage information:

`vgremove {{[-h|--help]}}`
