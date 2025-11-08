---
title: "Bcachefs Device - Manage Storage Devices | Online Free DevTools by Hexmos"
name: bcachefs-device
path: "/freedevtools/tldr/linux/bcachefs-device/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/bcachefs-device/"
description: "Manage storage devices with Bcachefs Device, allowing you to add, evacuate, and remove devices from your bcachefs filesystem. Free online tool, no registration required."
category: linux
keywords:
- bcachefs device manager
- linux storage management
- bcachefs disk utility
- bcachefs device add
- bcachefs device evacuate
- bcachefs device remove
- filesystem device control
- bcachefs raid configuration
- linux bcachefs tools
- block device management
features:
- Add new devices to a bcachefs filesystem
- Migrate data off a bcachefs device
- Remove devices permanently from a bcachefs filesystem
- Format devices for use in a bcachefs filesystem
- Evacuate device data before removal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bcachefs device

> Manage devices within a running `bcachefs` filesystem.
> More information: <https://bcachefs-docs.readthedocs.io/en/latest/mgmt-devicemanagement.html>.

- Format and add a new device to an existing filesystem.:

`sudo bcachefs device add --label {{group}}.{{name}} {{path/to/mountpoint}} {{path/to/device}}`

- Migrate data off a device to prepare for removal:

`bcachefs device evacuate {{path/to/device}}`

- Permanently remove a device from a filesystem:

`bcachefs device remove {{path/to/device}}`
