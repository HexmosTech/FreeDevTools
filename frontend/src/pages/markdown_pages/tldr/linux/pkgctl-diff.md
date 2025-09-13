---
title: "Compare Package Files - pkgctl diff | Free DevTools"
name: pkgctl-diff
path: /freedevtools/tldr/linux/pkgctl-diff
canonical: "https://hexmos.com/freedevtools/tldr/linux/pkgctl-diff/"
description: "Compare package files efficiently with pkgctl diff.  Utilize different comparison modes for thorough analysis. Free online tool, no registration required."
category: linux
keywords:
  - package file comparison
  - pkgctl diff command
  - linux package comparison
  - package content diff
  - tar file comparison
  - buildinfo comparison
  - pkginfo comparison
  - diffoscope comparison
  - system package analysis
  - software package management
features:
  - Compare package files using different modes (tar, diffoscope, .PKGINFO, .BUILDINFO)
  - Supports both file paths and package names as input.
  - Provides detailed differences between package files.
  - Offers flexibility with multiple comparison algorithms.
  - Streamlines the process of identifying package discrepancies.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pkgctl diff

> Compare package files using different modes.
> See also: `pkgctl`.
> More information: <https://manned.org/pkgctl-diff>.

- Compare package files in tar content list different mode (default):

`pkgctl diff {{[-l|--list]}} {{path/to/file|pkgname}}`

- Compare package files in diffoscope different mode:

`pkgctl diff {{[-d|--diffoscope]}} {{path/to/file|pkgname}}`

- Compare package files in `.PKGINFO` different mode:

`pkgctl diff {{[-p|--pkginfo]}} {{path/to/file|pkgname}}`

- Compare package files in `.BUILDINFO` different mode:

`pkgctl diff {{[-b|--buildinfo]}} {{path/to/file|pkgname}}`
