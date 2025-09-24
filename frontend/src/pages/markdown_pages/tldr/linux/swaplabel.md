---
title: "Swaplabel - Manage Swap Partitions | Online Free DevTools by Hexmos"
name: swaplabel
path: /freedevtools/tldr/linux/swaplabel
canonical: "https://hexmos.com/freedevtools/tldr/linux/swaplabel/"
description: "Manage swap partition labels and UUIDs with swaplabel.  View, set, and change swap area identifiers easily. Free online tool, no registration required."
category: linux
keywords:
  - swap partition management
  - swap label command
  - linux swaplabel
  - swap UUID management
  - change swap label
  - view swap label
  - set swap UUID
  - swap partition identifier
  - linux system administration
  - command-line swap tools
features:
  - Display current swap label and UUID.
  - Set a new label for a swap area.
  - Set a new UUID for a swap area.
  - Works with both files and partitions.
  - Uses the standard uuidgen utility for UUID generation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# swaplabel

> Print or change the label or UUID of a swap area.
> Note: `path/to/file` can either point to a regular file or a swap partition.
> More information: <https://manned.org/swaplabel>.

- Display the current label and UUID of a swap area:

`swaplabel {{path/to/file}}`

- Set the label of a swap area:

`swaplabel {{[-L|--label]}} {{new_label}} {{path/to/file}}`

- Set the UUID of a swap area (you can generate a UUID using `uuidgen`):

`swaplabel {{[-U|--uuid]}} {{new_uuid}} {{path/to/file}}`
