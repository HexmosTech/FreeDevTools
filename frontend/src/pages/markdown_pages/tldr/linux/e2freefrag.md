---
title: "Check Filesystem Fragmentation - e2freefrag | Free DevTools"
name: e2freefrag
path: /freedevtools/tldr/unknown/e2freefrag
canonical: "https://hexmos.com/freedevtools/tldr/unknown/e2freefrag/"
description: "Check filesystem fragmentation with e2freefrag command. Analyze disk space and optimize filesystem performance. Free online tool, no registration required."
category: unknown
keywords:
- filesystem fragmentation check
- ext2 fragmentation analysis
- ext3 fragmentation analysis
- ext4 fragmentation analysis
- disk space analysis linux
- linux filesystem check
- command line fragmentation tool
- contiguous free space check
- filesystem performance optimization
- e2freefrag command linux
features:
- Analyze free space fragmentation on ext2/3/4 filesystems.
- Determine contiguous and aligned free space blocks.
- Specify chunk size for detailed fragmentation analysis.
- Identify fragmented free space areas.
- Provide insights for filesystem optimization.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# e2freefrag

> Print the free space fragmentation information for ext2/ext3/ext4 filesystems.
> More information: <https://manned.org/e2freefrag>.

- Check how many free blocks are present as contiguous and aligned free space:

`e2freefrag {{/dev/sdXN}}`

- Specify [c]hunk size in kilobytes to print how many free chunks are available:

`e2freefrag -c {{chunk_size_in_kb}} {{/dev/sdXN}}`
