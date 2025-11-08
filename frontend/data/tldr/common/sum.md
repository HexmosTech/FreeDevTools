---
title: "Compute Checksums - Calculate File Checksums | Online Free DevTools by Hexmos"
name: sum
path: "/freedevtools/tldr/common/sum/"
canonical: "https://hexmos.com/freedevtools/tldr/common/sum/"
description: "Compute checksums with Sum command. Calculate file integrity, verify data transfer, and detect file corruption on Linux and MacOS. Free online tool, no registration required."
category: common
keywords:
- file checksum calculator
- data integrity check
- sum command linux
- sum command macos
- checksum verification tool
- bsd checksum algorithm
- system v checksum algorithm
- file hash generator
- disk block counter
- data corruption detection
features:
- Calculate BSD-style checksums
- Compute System V-style checksums
- Count the number of blocks in a file
- Verify file integrity after transfer
- Detect data corruption using checksums
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sum

> Compute checksums and the number of blocks for a file.
> A predecessor to the more modern `cksum`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/sum-invocation.html>.

- Compute a checksum with BSD-compatible algorithm and 1024-byte blocks:

`sum {{path/to/file}}`

- Compute a checksum with System V-compatible algorithm and 512-byte blocks:

`sum {{[-s|--sysv]}} {{path/to/file}}`
