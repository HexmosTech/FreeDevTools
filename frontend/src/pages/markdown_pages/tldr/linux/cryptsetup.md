---
title: "Cryptsetup - Manage Encrypted Volumes | Online Free DevTools by Hexmos"
name: cryptsetup
path: /freedevtools/tldr/linux/cryptsetup
canonical: "https://hexmos.com/freedevtools/tldr/linux/cryptsetup/"
description: "Manage encrypted volumes with Cryptsetup, a powerful command-line tool for Linux.  Format, open, and manage LUKS encrypted partitions easily. Free online tool, no registration required."
category: linux
keywords:
  - luks encryption linux
  - cryptsetup command linux
  - dm-crypt management
  - linux disk encryption
  - luksFormat command
  - luksChangeKey command
  - cryptsetup open command
  - cryptsetup close command
  - cryptsetup status command
  - linux volume encryption
features:
  - Format LUKS encrypted volumes.
  - Open and close LUKS encrypted volumes.
  - Manage LUKS encrypted volume keys.
  - Display status information of mappings.
  - Change LUKS volume passphrases.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cryptsetup

> Manage plain `dm-crypt` and LUKS (Linux Unified Key Setup) encrypted volumes.
> Some subcommands such as `luksFormat` have their own usage documentation.
> More information: <https://manned.org/cryptsetup>.

- Initialize a LUKS volume with a passphrase (overwrites all data on the partition):

`cryptsetup luksFormat {{/dev/sdXY}}`

- Open a LUKS volume and create a decrypted mapping at `/dev/mapper/mapping_name`:

`cryptsetup open {{/dev/sdXY}} {{mapping_name}}`

- Display information about a mapping:

`cryptsetup status {{mapping_name}}`

- Remove an existing mapping:

`cryptsetup close {{mapping_name}}`

- Change a LUKS volume's passphrase:

`cryptsetup luksChangeKey {{/dev/sdXY}}`
