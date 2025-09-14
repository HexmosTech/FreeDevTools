---
title: "Deduplicate Files - Find and Remove Duplicates with duperemove | Free DevTools"
name: duperemove
path: /freedevtools/tldr/linux/duperemove
canonical: "https://hexmos.com/freedevtools/tldr/linux/duperemove/"
description: "Deduplicate files with duperemove, a powerful Linux tool for finding and removing duplicate file extents. Optimize storage space effortlessly. Free online tool, no registration required."
category: linux
keywords:
- linux duplicate file removal
- filesystem deduplication linux
- extent deduplication linux
- duperemove file scanner
- btrfs deduplication
- xfs deduplication
- storage optimization linux
- linux disk space saver
- duplicate extent finder
- linux file integrity check
features:
- Finds duplicate file extents on Linux filesystems
- Schedules duplicate extents for deduplication on Btrfs and XFS
- Uses hash files for efficient duplicate detection and reduced memory usage
- Limits I/O and CPU threads for optimized performance
- Identifies and removes redundant data to reclaim disk space
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# duperemove

> Finds duplicate filesystem extents and optionally schedule them for deduplication.
> An extent is small part of a file inside the filesystem.
> On some filesystems one extent can be referenced multiple times, when parts of the content of the files are identical.
> More information: <https://markfasheh.github.io/duperemove/>.

- Search for duplicate extents in a directory and show them:

`duperemove -r {{path/to/directory}}`

- Deduplicate duplicate extents on a Btrfs or XFS (experimental) filesystem:

`duperemove -r -d {{path/to/directory}}`

- Use a hash file to store extent hashes (less memory usage and can be reused on subsequent runs):

`duperemove -r -d --hashfile={{path/to/hashfile}} {{path/to/directory}}`

- Limit I/O threads (for hashing and dedupe stage) and CPU threads (for duplicate extent finding stage):

`duperemove -r -d --hashfile={{path/to/hashfile}} --io-threads={{n}} --cpu-threads={{n}} {{path/to/directory}}`
