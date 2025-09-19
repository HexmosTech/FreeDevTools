---
title: "Allocate Disk Space - Control Files with fallocate | Online Free DevTools by Hexmos"
name: fallocate
path: /freedevtools/tldr/linux/fallocate
canonical: "https://hexmos.com/freedevtools/tldr/linux/fallocate/"
description: "Control disk space allocation with fallocate. Reserve and deallocate file space quickly and easily using the command line. Free online tool, no registration required."
category: linux
keywords:
- linux fallocate
- allocate disk space
- reserve file space
- deallocate file space
- fallocate command
- file system utility
- disk space management
- linux file management
- fallocate examples
- linux command line tool
features:
- Reserve disk space for files
- Deallocate disk space from files
- Shrink already allocated files
- Specify an offset for space allocation
- Allocate space without zeroing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fallocate

> Reserve or deallocate disk space to files.
> The utility allocates space without zeroing.
> More information: <https://manned.org/fallocate>.

- Reserve a file taking up 700 MiB of disk space:

`fallocate {{[-l|--length]}} {{700M}} {{path/to/file}}`

- Shrink an already allocated file by 200 MiB:

`fallocate {{[-c|--collapse-range]}} {{[-l|--length]}} {{200M}} {{path/to/file}}`

- Shrink 20 MB of space after 100 MiB in a file:

`fallocate {{[-c|--collapse-range]}} {{[-o|--offset]}} {{100M}} {{[-l|--length]}} {{20M}} {{path/to/file}}`
