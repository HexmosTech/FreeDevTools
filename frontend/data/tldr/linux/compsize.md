---
title: "Calculate Compression Ratio - compsize Command | Online Free DevTools by Hexmos"
name: compsize
path: "/freedevtools/tldr/linux/compsize/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/compsize/"
description: "Calculate compression ratios with the compsize command.  Analyze file and directory compression on btrfs filesystems. Free online tool, no registration required."
category: linux
keywords:
  - btrfs compression ratio
  - btrfs file compression
  - linux compression analysis
  - compsize command linux
  - filesystem compression check
  - btrfs disk space analysis
  - file size analysis linux
  - command-line compression tool
  - btrfs defragmentation
  - check btrfs compression
features:
  - Calculates compression ratios for files and directories.
  - Works on btrfs filesystems.
  - Provides both human-readable and raw byte counts.
  - Option to avoid traversing filesystem boundaries.
  - Offers command-line interface for easy integration.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# compsize

> Calculate the compression ratio of a set of files on a btrfs filesystem.
> See also: `btrfs filesystem` for recompressing a file by defragmenting it.
> More information: <https://manned.org/compsize>.

- Calculate the current compression ratio for a file or directory:

`sudo compsize {{path/to/file_or_directory}}`

- Don't traverse filesystem boundaries:

`sudo compsize {{[-x|--one-file-system]}} {{path/to/file_or_directory}}`

- Show raw byte counts instead of human-readable sizes:

`sudo compsize {{[-b|--bytes]}} {{path/to/file_or_directory}}`
