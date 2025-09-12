---
title: "Mount Filesystem - Access Filesystems | Free DevTools"
name: mount
path: /freedevtools/tldr/linux/mount
canonical: "https://hexmos.com/freedevtools/tldr/linux/mount/"
description: "Access filesystems instantly with the mount command. Manage devices, directories, and permissions with ease. Free online tool, no registration required."
category: linux
keywords:
  - filesystem mount command
  - mount linux
  - mount device
  - mount directory
  - mount options
  - filesystem access
  - file system mounting
  - bind mount
  - mount permissions
  - fstab mount
features:
  - Mount devices to directories.
  - Create mount points automatically.
  - Specify user and group access permissions.
  - Mount various filesystem types (e.g., ISO9660).
  - Manage mounts via `/etc/fstab`.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mount

> Get access to an entire filesystem in one directory.
> More information: <https://manned.org/mount.8>.

- Show all mounted filesystems:

`mount`

- Mount a device to a directory:

`mount {{path/to/device_file}} {{path/to/target_directory}}`

- Create a specific directory if it does not exist and mount a device to it:

`mount {{[-m|--mkdir]}} {{path/to/device_file}} {{path/to/target_directory}}`

- Mount a device to a directory for a specific user:

`mount {{[-o|--options]}} uid={{user_id}},gid={{group_id}} {{path/to/device_file}} {{path/to/target_directory}}`

- Mount a CD-ROM device (with the filetype ISO9660) to `/cdrom` (readonly):

`mount {{[-t|--types]}} {{iso9660}} {{[-o|--options]}} ro {{/dev/cdrom}} {{/cdrom}}`

- Mount all the filesystems defined in `/etc/fstab`:

`mount {{[-a|--all]}}`

- Mount a specific filesystem described in `/etc/fstab` (e.g. `/dev/sda1 /my_drive ext2 defaults 0 2`):

`mount {{/my_drive}}`

- Mount a directory to another directory:

`mount {{[-B|--bind]}} {{path/to/old_dir}} {{path/to/new_dir}}`
