---
title: "Mountpoint Checker - Validate Filesystem Mounts | Online Free DevTools by Hexmos"
name: mountpoint
path: /freedevtools/tldr/linux/mountpoint
canonical: "https://hexmos.com/freedevtools/tldr/linux/mountpoint/"
description: "Validate filesystem mounts with Mountpoint Checker.  Quickly verify mount points and identify filesystem details. Free online tool, no registration required."
category: linux
keywords:
  - mountpoint checker
  - filesystem mountpoint validation
  - linux mountpoint check
  - unix mountpoint verification
  - directory mountpoint check
  - check filesystem mount
  - mountpoint command linux
  - verify mountpoint
  - detect mountpoint
  - filesystem details
features:
  - Checks if a directory is a filesystem mountpoint.
  - Verifies mount points silently without output.
  - Displays major/minor numbers of a mountpoint's filesystem.
  - Provides quick and accurate mount point validation.
  - Supports various operating systems with a single command.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mountpoint

> Test if a directory is a filesystem mountpoint.
> More information: <https://manned.org/mountpoint>.

- Check if a directory is a mountpoint:

`mountpoint {{path/to/directory}}`

- Check if a directory is a mountpoint without showing any output:

`mountpoint {{[-q|--quiet]}} {{path/to/directory}}`

- Show major/minor numbers of a mountpoint's filesystem:

`mountpoint {{[-d|--fs-devno]}} {{path/to/directory}}`
