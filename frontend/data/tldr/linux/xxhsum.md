---
title: "Generate xxHash Checksums - Verify File Integrity | Online Free DevTools by Hexmos"
name: xxhsum
path: "/freedevtools/tldr/linux/xxhsum/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/xxhsum/"
description: "Generate file checksums with xxhsum, a fast non-cryptographic hashing algorithm. Ensure data integrity and detect file corruption quickly. Free online tool, no registration required."
category: linux
keywords:
- xxhash checksum generator
- linux checksum verification
- file integrity checker
- hash value calculation
- non-cryptographic hash
- xxhsum command line
- linux file hashing
- data integrity validation
- xxhash algorithm linux
- fast checksum utility
features:
- Calculate xxHash checksums for files
- Verify file integrity using checksums
- Support multiple xxHash algorithm variants (32, 64, 128 bits)
- Benchmark xxHash performance
- Generate checksums from standard input
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xxhsum

> Print or verify checksums using fast non-cryptographic algorithm xxHash.
> More information: <https://manned.org/xxhsum>.

- Calculate the checksum for a file using a specific algorithm:

`xxhsum -H{{0|32|64|128}} {{path/to/file}}`

- Run benchmark:

`xxhsum -b`
