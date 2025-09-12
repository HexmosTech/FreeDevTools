---
title: "Partition Disk - Format Volumes with Diskutil on OSX | Free DevTools"
name: diskutil-partitiondisk
path: /freedevtools/tldr/osx/diskutil-partitiondisk
canonical: "https://hexmos.com/freedevtools/tldr/osx/diskutil-partitiondisk/"
description: "Format disk volumes easily with Diskutil PartitionDisk on OSX. Manage partitions using APM, MBR, or GPT schemes. Free online tool, no registration required."
category: osx
keywords:
- disk partition formatter
- diskutil volume manager
- osx disk partitioning
- macos disk format tool
- gpt partition manager
- mbr partition utility
- apm disk formatter
- command line disk partition
- diskutil partition disk command
- mac disk utility
features:
- Reformat volumes using APM, MBR, or GPT partitioning schemes.
- Create single partitions with specified filesystems and names.
- Define custom partition sizes.
- Create multiple partitions with different file systems and sizes.
- List all supported filesystems for partitioning.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# diskutil partitionDisk

> Utility to manage partitions inside disks and volumes.
> Part of `diskutil`.
> APM is only supported for macOS, MBR is optimized for DOS, while GPT is compatible for most modern systems.
> More information: <https://keith.github.io/xcode-man-pages/diskutil.8.html>.

- Reformat a volume using APM/MBR/GPT partitioning scheme, leaving no partitions inside (this will erase all data on the volume):

`diskutil partitionDisk {{/dev/disk_device}} 0 {{APM|MBR|GPT}}`

- Reformat a volume, then create a single partition using a specific filesystem filling up all free space:

`diskutil partitionDisk {{/dev/disk_device}} 1 {{APM|MBR|GPT}} {{partition_filesystem}} {{partition_name}}`

- Reformat a volume, then create a single partition using a specific filesystem under specific size (e.g. `16G` for 16GB or `50%` to fill half of total volume size):

`diskutil partitionDisk {{/dev/disk_device}} 1 {{APM|MBR|GPT}} {{partition_filesystem}} {{partition_name}} {{partition_size}}`

- Reformat a volume, then create multiple partitions:

`diskutil partitionDisk {{/dev/disk_device}} {{number_of_partitions}} {{APM|MBR|GPT}} {{partition_filesystem1}} {{partition_name1}} {{partition_size1}} {{partition_filesystem2}} {{partition_name2}} {{partition_size2}} ...`

- List all supported file systems for partitioning:

`diskutil listFilesystems`
