---
title: "Generate fstab - Create Linux fstab Entries | Online Free DevTools by Hexmos"
name: genfstab
path: /freedevtools/tldr/linux/genfstab
canonical: "https://hexmos.com/freedevtools/tldr/linux/genfstab/"
description: "Generate fstab entries with genfstab.  Easily create and manage Linux filesystem entries using UUIDs or labels. Free online tool, no registration required."
category: linux
keywords:
  - fstab generator
  - linux fstab
  - fstab uuid
  - fstab label
  - generate fstab entry
  - linux filesystem
  - mount point generator
  - fstab management
  - linux partition
  - system configuration
features:
  - Generates `/etc/fstab` entries using UUIDs.
  - Generates `/etc/fstab` entries using volume labels.
  - Supports specifying identifiers (LABEL, UUID, PARTLABEL, PARTUUID).
  - Appends entries to `/etc/fstab` for automatic mounting.
  - Creates fstab-compatible output for various mount points.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# genfstab

> Generate output suitable for addition to the `/etc/fstab` file.
> More information: <https://manned.org/genfstab>.

- Generate the `/etc/fstab` file using volume UUIDs during an Arch Linux installation (requires root permissions):

`genfstab -U {{/mnt}} >> {{/mnt/etc/fstab}}`

- Display fstab-compatible output based on volume labels:

`genfstab -L {{path/to/mount_point}}`

- Display fstab-compatible output based on volume UUIDs:

`genfstab -U {{path/to/mount_point}}`

- Display fstab-compatible output based on the specified identifier:

`genfstab -t {{LABEL|UUID|PARTLABEL|PARTUUID}}`

- Append a volume into the `/etc/fstab` file to mount it automatically:

`genfstab -U {{path/to/mount_point}} | sudo tee -a /etc/fstab`
