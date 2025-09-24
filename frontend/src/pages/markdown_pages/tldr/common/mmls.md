---
title: "Display Partition Layout with Mmls - Command Reference | Online Free DevTools by Hexmos"
name: mmls
path: /freedevtools/tldr/common/mmls
canonical: "https://hexmos.com/freedevtools/tldr/common/mmls/"
description: "Analyze partition layouts with the mmls command.  View partition tables, sizes, and types from disk images and volume systems. Free online tool, no registration required."
category: common
keywords:
  - disk image partition analysis
  - partition table viewer command
  - volume system partition analysis
  - forensic disk image analysis
  - command line partition table viewer
  - linux mmls command
  - macos mmls command
  - ewf image partition analysis
  - nested partition table analysis
  - mmls command reference
features:
  - Display partition tables from disk images and volumes.
  - Show partition sizes and offsets in a detailed view.
  - Analyze split EWF (Expert Witness Format) disk images.
  - Display nested partition tables within partitions.
  - Identify various partition table types (e.g., GPT, MBR).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mmls

> Display the partition layout of a volume system.
> More information: <https://wiki.sleuthkit.org/index.php?title=Mmls>.

- Display the partition table stored in an image file:

`mmls {{path/to/image_file}}`

- Display the partition table with an additional column for the partition size:

`mmls -B -i {{path/to/image_file}}`

- Display the partition table in a split EWF image:

`mmls -i ewf {{image.e01}} {{image.e02}}`

- Display nested partition tables:

`mmls -t {{nested_table_type}} -o {{offset}} {{path/to/image_file}}`
