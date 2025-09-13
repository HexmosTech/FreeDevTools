---
title: "LUKS Formatter - Format Disk Partitions with cryptsetup | Free DevTools"
name: cryptsetup-luksformat
path: /freedevtools/tldr/linux/cryptsetup-luksformat
canonical: "https://hexmos.com/freedevtools/tldr/linux/cryptsetup-luksformat/"
description: "Format disk partitions securely with cryptsetup LUKS Formatter.  Encrypt your data using passphrase or keyfile. Free online tool, no registration required."
category: linux
keywords:
  - luks format encryption
  - cryptsetup luksformat command
  - linux disk encryption
  - partition formatting linux
  - luks passphrase encryption
  - keyfile disk encryption
  - cryptsetup linux command
  - secure disk formatting
  - command line encryption
  - luks volume creation
features:
  - Initialize LUKS encrypted partitions.
  - Encrypt partitions with a passphrase.
  - Encrypt partitions with a keyfile.
  - Assign a label to the encrypted volume.
  - Overwrite existing data on the target partition securely.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cryptsetup luksFormat

> Initialize a LUKS partition and the initial key slot (0) with a passphrase or keyfile.
> Note: This operation overwrites all data on the partition.
> More information: <https://manned.org/cryptsetup-luksFormat>.

- Initialize a LUKS volume with a passphrase:

`cryptsetup luksFormat {{/dev/sdXY}}`

- Initialize a LUKS volume with a keyfile:

`cryptsetup luksFormat {{/dev/sdXY}} {{path/to/keyfile}}`

- Initialize a LUKS volume with a passphrase and set its label:

`cryptsetup luksFormat --label {{label}} {{/dev/sdXY}}`
