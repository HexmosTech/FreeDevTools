---
title: "Flash Memory Probe - Detect Counterfeit Flash | Online Free DevTools by Hexmos"
name: f3probe
path: "/freedevtools/tldr/common/f3probe/"
canonical: "https://hexmos.com/freedevtools/tldr/common/f3probe/"
description: "Detect counterfeit flash memory with F3probe. Probe block devices to identify fake capacity and data loss risks. Free online tool, no registration required."
category: common
keywords:
- flash memory probe
- fake flash detection
- block device tester
- counterfeit drive check
- linux storage testing
- microsd card verification
- usb drive analyzer
- flash capacity tester
- data integrity check
- f3probe command
features:
- Detect counterfeit flash memory capacity
- Analyze block devices for data integrity
- Identify fake storage devices
- Test read and write speeds
- Verify claimed drive capacity
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# f3probe

> Probe a block device (e.g. a flash drive or a microSD card) for counterfeit flash memory.
> See also: `f3read`, `f3write`, `f3fix`.
> More information: <https://github.com/AltraMayor/f3>.

- Probe a block device:

`sudo f3probe {{path/to/block_device}}`

- Use the minimum about of RAM possible:

`sudo f3probe --min-memory {{path/to/block_device}}`

- Time disk operations:

`sudo f3probe --time-ops {{path/to/block_device}}`
