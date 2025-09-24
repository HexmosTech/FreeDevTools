---
title: "Stratis Manager - Manage Linux Storage Pools | Online Free DevTools by Hexmos"
name: stratis
path: /freedevtools/tldr/linux/stratis
canonical: "https://hexmos.com/freedevtools/tldr/linux/stratis/"
description: "Manage Linux storage with Stratis Manager. Create pools, volumes, and filesystems effortlessly using command line. Free online tool, no registration required."
category: linux
keywords:
- stratis linux manager
- linux stratis storage
- stratis pool management
- stratis volume control
- linux xfs filesystem
- stratis command line
- stratis storage pool
- stratis filesystem manager
- linux stratis command
- stratis storage administration
features:
- Create and manage Stratis storage pools
- Create and manage Stratis filesystems (volumes)
- Extend existing Stratis pools with new devices
- Mount Stratis volumes manually or automatically at boot
- Delete Stratis volumes when no longer needed
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# stratis

> Manage local storage pools and volumes using the Stratis storage manager.
> Stratis volumes use the XFS filesystem and require the `stratisd` service.
> More information: <https://stratis-storage.github.io>.

- Start the Stratis service (must be active before managing pools or volumes):

`sudo systemctl start stratisd`

- Create a storage pool from one or more devices:

`sudo stratis pool create {{pool_name}} {{/dev/sdX}} {{/dev/sdY}}`

- Create a filesystem (volume) in a pool:

`sudo stratis filesystem create {{pool_name}} {{volume_name}}`

- List all Stratis filesystems:

`sudo stratis filesystem list`

- Format and mount a Stratis volume manually:

`sudo mkfs.xfs /dev/stratis/{{pool_name}}/{{volume_name}} && sudo mount /dev/stratis/{{pool_name}}/{{volume_name}} {{/mnt/target}}`

- Add a volume to `/etc/fstab` for mounting at boot:

`echo /dev/stratis/{{pool_name}}/{{volume_name}} {{/mnt/target}} xfs defaults,x-systemd.requires=stratisd.service 0 0 | sudo tee {{[-a|--append]}} /etc/fstab`

- Extend an existing pool by adding a new device:

`sudo stratis pool add-data {{pool_name}} {{/dev/sdZ}}`

- Delete a volume:

`sudo stratis filesystem destroy {{pool_name}} {{volume_name}}`
