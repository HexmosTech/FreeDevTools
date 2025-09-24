---
title: "Find Bad Blocks - Scan Disks for Errors | Online Free DevTools by Hexmos"
name: badblocks
path: /freedevtools/tldr/common/badblocks
canonical: "https://hexmos.com/freedevtools/tldr/common/badblocks/"
description: "Find disk errors with badblocks. Scan storage devices for bad blocks using read-only, read-write, or destructive write tests. Free online tool, no registration required."
category: common
keywords:
- disk bad block scanner
- storage device error check
- hard drive diagnostics
- ssd bad sector detection
- linux disk check
- command line disk scanner
- badblocks command
- disk error verification
- file system corruption check
- data recovery diagnostics
features:
- Scan disks for bad blocks using non-destructive read-only tests
- Perform read-write tests to identify unreliable blocks
- Execute destructive write tests to identify and mark bad blocks
- Output found bad blocks to a file for later use
- Customize block size and count for optimized scanning
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# badblocks

> Search a device for bad blocks.
> Some usages of badblocks can cause destructive actions, such as erasing all data on a disk, including the partition table.
> More information: <https://manned.org/badblocks>.

- Search a disk for bad blocks by using a non-destructive read-only test:

`sudo badblocks {{/dev/sdX}}`

- Search an unmounted disk for bad blocks with a [n]on-destructive read-write test:

`sudo badblocks -n {{/dev/sdX}}`

- Search an unmounted disk for bad blocks with a destructive [w]rite test:

`sudo badblocks -w {{/dev/sdX}}`

- Use the destructive [w]rite test and [s]how [v]erbose progress:

`sudo badblocks -svw {{/dev/sdX}}`

- In destructive mode, [o]utput found blocks to a file:

`sudo badblocks -o {{path/to/file}} -w {{/dev/sdX}}`

- Use the destructive mode with improved speed using 4K [b]lock size and 64K block [c]ount:

`sudo badblocks -w -b {{4096}} -c {{65536}} {{/dev/sdX}}`
