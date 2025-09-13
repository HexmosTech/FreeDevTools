---
title: "ISO Size Checker - Display ISO File Size | Free DevTools"
name: isosize
path: /freedevtools/tldr/linux/isosize
canonical: "https://hexmos.com/freedevtools/tldr/linux/isosize/"
description: "Check ISO file size quickly with the isosize command. Get detailed information including block count and size. Free online tool, no registration required."
category: linux
keywords:
  - iso file size checker
  - iso size command
  - iso file information
  - linux iso size
  - check iso size linux
  - iso file details
  - command-line iso tool
  - get iso file size
  - isosize command linux
  - terminal iso info
features:
  - Displays the total size of an ISO file.
  - Shows the number of blocks in an ISO file.
  - Outputs the size of each block within an ISO file.
  - Allows calculating the size divided by a custom divisor.
  - Provides detailed information about an ISO image via command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# isosize

> Display the size of an ISO file.
> More information: <https://manned.org/isosize>.

- Display the size of an ISO file:

`isosize {{path/to/file.iso}}`

- Display the block count and block size of an ISO file:

`isosize {{[-x|--sectors]}} {{path/to/file.iso}}`

- Display the size of an ISO file divided by a given number (only usable when --sectors is not given):

`isosize {{[-d|--divisor]}} {{number}} {{path/to/file.iso}}`
