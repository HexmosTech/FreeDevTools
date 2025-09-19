---
title: "Validate Disk Capacity - f3read Command | Online Free DevTools by Hexmos"
name: f3read
path: /freedevtools/tldr/common/f3read
canonical: "https://hexmos.com/freedevtools/tldr/common/f3read/"
description: "Validate disk capacity with f3read to verify storage integrity. Detect fake drives and prevent data loss on Linux and macOS. Free online tool, no registration required."
category: common
keywords:
- disk capacity validation
- fake drive detection
- h2w file integrity
- storage capacity verification
- linux disk testing
- macos disk testing
- f3read linux
- f3read macos
- drive space analysis
- data integrity check
features:
- Verify disk capacity using .h2w files
- Detect fake drives by writing and reading data
- Identify discrepancies between reported and actual storage
- Support multiple platforms including Linux and macOS
- Provide clear output on storage integrity
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# f3read

> Validate .h2w files to test the real capacity of the drive.
> See also: `f3write`, `f3probe`, `f3fix`.
> More information: <https://oss.digirati.com.br/f3/>.

- Validate a device by checking the files in a given directory:

`f3read {{path/to/mount_point}}`
