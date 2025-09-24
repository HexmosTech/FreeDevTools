---
title: "Describe PAM Files - Analyze Netpbm Images | Online Free DevTools by Hexmos"
name: pamfile
path: /freedevtools/tldr/common/pamfile
canonical: "https://hexmos.com/freedevtools/tldr/common/pamfile/"
description: "Analyze Netpbm files with pamfile. Identify PAM and PNM image properties and formats. Free online tool, no registration required."
category: common
keywords:
- pam file description
- netpbm file analysis
- pnm image metadata
- image format identifier
- pam file analyzer
- pnm file inspector
- linux image tools
- image properties viewer
- netpbm image tool
- pam metadata extractor
features:
- Describe Netpbm image files
- Analyze image formats in PAM/PNM files
- Extract metadata from image files
- Count images within multiple files
- Output machine-readable image information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamfile

> Describe Netpbm (PAM or PNM) files.
> More information: <https://netpbm.sourceforge.net/doc/pamfile.html>.

- Describe the specified Netpbm files:

`pamfile {{path/to/file1 path/to/file2 ...}}`

- Describe every image in each input file (as opposed to only the first image in each file) in a machine-readable format:

`pamfile {{[-a|-allimages]}} -machine {{path/to/file}}`

- Display a count on how many images the input files contain:

`pamfile {{[-cou|-count]}} {{path/to/file}}`
