---
title: "Lvresize - Resize Logical Volumes | Online Free DevTools by Hexmos"
name: lvresize
path: "/freedevtools/tldr/linux/lvresize/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvresize/"
description: "Resize logical volumes with Lvresize, manage storage space and extend filesystem capacity on Linux. Free online tool, no registration required."
category: linux
keywords:
- logical volume resize
- lvm resize linux
- linux lvresize command
- logical volume manager
- lvm extend filesystem
- lvm reduce size
- lvresize command examples
- linux storage management
- physical volume space
- volume group resize
features:
- Dynamically change logical volume size
- Extend filesystem capacity on-the-fly
- Reduce logical volume size safely
- Utilize free physical volume space
- Resize without service interruption
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lvresize

> Change the size of a logical volume.
> See also: `lvm`.
> More information: <https://manned.org/lvresize>.

- Change the size of a logical volume to 120 GB:

`lvresize {{[-L|--size]}} 120G {{volume_group}}/{{logical_volume}}`

- Extend the size of a logical volume as well as the underlying filesystem by 120 GB:

`lvresize {{[-L|--size]}} +120G {{[-r|--resizefs]}} {{volume_group}}/{{logical_volume}}`

- Extend the size of a logical volume to 100% of the free physical volume space:

`lvresize {{[-l|--extents]}} 100%FREE {{volume_group}}/{{logical_volume}}`

- Reduce the size of a logical volume as well as the underlying filesystem by 120 GB:

`lvresize {{[-L|--size]}} -120G {{[-r|--resizefs]}} {{volume_group}}/{{logical_volume}}`
