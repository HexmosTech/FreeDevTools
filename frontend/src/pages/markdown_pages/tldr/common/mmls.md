---
title: "Display Partition Layout - Mmls Tool | Free DevTools"
name: mmls
path: /freedevtools/tldr/common/mmls
canonical: "https://hexmos.com/freedevtools/tldr/common/mmls/"
description: "Display partition layout information with Mmls. Analyze disk images and volume systems, identify partition types, and recover data. Free online tool, no registration required."
category: common
keywords:
- disk image analyzer
- partition table viewer
- volume system analysis
- data recovery tool
- forensic analysis tool
- linux disk utility
- macos disk utility
- command line partition tool
- ewf image analysis
- nested partition analysis
features:
- Display partition tables from disk images
- Show partition sizes in a separate column
- Analyze split EWF images
- Display nested partition tables
- Identify different partition table types
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
