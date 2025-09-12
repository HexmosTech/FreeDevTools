---
title: "CDRDAO - Create CD Images - Free DevTools"
name: cdrdao
path: /freedevtools/tldr/linux/cdrdao
canonical: "https://hexmos.com/freedevtools/tldr/linux/cdrdao/"
description: "Create CD images with CDRDAO, a powerful command-line tool for reading and writing CDs.  Manage disc data efficiently and accurately. Free online tool, no registration required."
category: linux
keywords:
  - cd image creation
  - cd writing command
  - linux cd manipulation
  - cdrdao command line
  - disc-at-once writing
  - cd reading utility
  - command line cd tool
  - cd mastering software
  - raw cd image handling
  - iso image creation from cd
features:
  - Read CD data and create raw image files.
  - Write raw CD images to a disc in disc-at-once mode.
  - Supports various CD formats and options.
  - Offers precise control over the CD writing process.
  - Facilitates creation of bootable CDs from image files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cdrdao

> Read and write CDs in disc-at-once mode.
> More information: <https://manned.org/cdrdao>.

- Read a CD and write its contents to a file:

`cdrdao read-cd --device {{/dev/cdrom}} --read-raw {{image.toc}}`
