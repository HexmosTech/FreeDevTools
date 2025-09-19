---
title: "Execute Netpbm Command - Process Images | Online Free DevTools by Hexmos"
name: pamexec
path: /freedevtools/tldr/common/pamexec
canonical: "https://hexmos.com/freedevtools/tldr/common/pamexec/"
description: "Process images with Netpbm Command, executing shell commands on each image in a Netpbm file. Use for image manipulation and batch processing. Free online tool, no registration required."
category: common
keywords:
- Netpbm image processing
- PAM image execution
- Image command execution
- Netpbm batch processing
- Linux image manipulation
- Unix image processing
- Shell command for images
- PAM file command
- Image processing script
- Command line image tool
features:
- Execute shell commands on multiple images
- Process Netpbm image files
- Batch image processing
- Stop processing on command failure
- Apply commands to each image individually
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pamexec

> Execute a shell command on each image in a Netpbm file.
> See also: `pamfile`, `pampick`, `pamsplit`.
> More information: <https://netpbm.sourceforge.net/doc/pamexec.html>.

- Execute a shell command on each image in a Netpbm file:

`pamexec {{command}} {{path/to/image.pam}}`

- Stop processing if a command terminates with a nonzero exit status:

`pamexec {{command}} {{path/to/image.pam}} {{[-c|-check]}}`
