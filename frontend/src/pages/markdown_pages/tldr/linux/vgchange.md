---
title: "VGChange - Control LVM Volume Groups | Free DevTools"
name: vgchange
path: /freedevtools/tldr/linux/vgchange
canonical: "https://hexmos.com/freedevtools/tldr/linux/vgchange/"
description: "Control Linux LVM volume groups with VGChange. Activate/deactivate logical volumes and manage disk space allocation efficiently. Free online tool, no registration required."
category: linux
keywords:
- linux vgchange
- lvm volume group manager
- logical volume activation
- disk space management linux
- volume group control linux
- lvm command line tool
- vgchange activate volume
- vgchange deactivate volume
- linux storage management
- lvm administration
features:
- Activate or deactivate logical volumes within a volume group.
- Change the activation status of LVM volumes.
- Manage volume group attributes using the command line.
- Control the availability of logical volumes for access.
- Enable or disable access to data stored on logical volumes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vgchange

> Change the attributes of a Logical Volume Manager (LVM) volume group.
> See also: `lvm`.
> More information: <https://manned.org/vgchange>.

- Change the activation status of logical volumes in all volume groups:

`sudo vgchange {{[-a|--activate]}} {{y|n}}`

- Change the activation status of logical volumes in the specified volume group (determine with `vgscan`):

`sudo vgchange {{[-a|--activate]}} {{y|n}} {{volume_group}}`
