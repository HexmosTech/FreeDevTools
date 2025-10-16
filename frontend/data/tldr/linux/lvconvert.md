---
title: "Convert Logical Volumes - Manage LVM Storage | Online Free DevTools by Hexmos"
name: lvconvert
path: "/freedevtools/tldr/linux/lvconvert/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvconvert/"
description: "Manage LVM storage with lvconvert. Convert logical volume types, repair RAID arrays and merge snapshots. Free online tool, no registration required."
category: linux
keywords:
  - LVM volume convert
  - logical volume manager
  - linux lvconvert command
  - raid volume repair
  - lvm snapshot merge
  - thin provisioning lvm
  - lvm storage management
  - volume group control
  - convert raid1 volume
  - linux block device
features:
  - Convert logical volumes to RAID
  - Merge LVM snapshots
  - Repair degraded RAID arrays
  - Convert to thin-provisioned volumes
  - Modify logical volume types
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lvconvert

> Convert or modify the type, redundancy, or state of logical volumes.
> More information: <https://manned.org/lvconvert>.

- Convert a linear logical volume to RAID1 (add one mirror: two copies total):

`lvconvert --type raid1 {{[-m|--mirrors]}} 1 {{/dev/vg_name/lv_name}}`

- Remove mirroring and convert back to a linear logical volume:

`lvconvert {{[-m|--mirrors]}} 0 {{/dev/vg_name/lv_name}}`

- Merge a snapshot back into its origin logical volume (applies on next activation):

`lvconvert --merge {{/dev/vg_name/snapshot_lv}}`

- Repair a degraded RAID logical volume:

`lvconvert --repair {{/dev/vg_name/lv_name}}`

- Convert an existing logical volume into a thin pool with a separate metadata LV:

`lvconvert --type thin-pool --poolmetadata {{/dev/vg_name/pool_metadata_lv}} {{/dev/vg_name/pool_lv}}`
