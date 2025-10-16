---
title: "F3Write - Fill Drive with Test Files | Online Free DevTools by Hexmos"
name: f3write
path: "/freedevtools/tldr/common/f3write/"
canonical: "https://hexmos.com/freedevtools/tldr/common/f3write/"
description: "Fill drives with test files using F3Write. Test drive capacity and performance with this simple command-line tool. Free online tool, no registration required."
category: common
keywords:
- drive capacity test
- storage verification tool
- file integrity check
- disk performance test
- h2w file creation
- f3write linux
- f3write macos
- f3write command
- fake flash detection
- drive speed test
features:
- Write test files to a specified directory.
- Fill a drive to its maximum capacity.
- Limit write speed to a defined rate.
- Verify storage drive capacity.
- Detect fake flash drives.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# f3write

> Fill a drive out with .h2w files to test its real capacity.
> See also: `f3read`, `f3probe`, `f3fix`.
> More information: <https://oss.digirati.com.br/f3/>.

- Write test files to a given directory, filling the drive:

`f3write {{path/to/mount_point}}`

- Limit the write speed:

`f3write --max-write-rate={{kb_per_second}} {{path/to/mount_point}}`
