---
title: "Image Flasher - Flash Disk Images with Caligula | Online Free DevTools by Hexmos"
name: caligula
path: /freedevtools/tldr/linux/caligula
canonical: "https://hexmos.com/freedevtools/tldr/linux/caligula/"
description: "Flash disk images quickly with Caligula, a user-friendly TUI disk imager. Burn ISOs and manage hashes effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - disk image flasher
  - iso burner
  - tui disk imaging
  - command line disk imaging
  - disk imaging linux
  - disk imaging tool
  - iso to usb
  - flash iso to drive
  - caligula disk imager
  - disk cloning tool
features:
  - Burn ISO images to drives
  - Flash disk images via command line
  - Verify image hashes interactively
  - Bypass hash verification with a specific hash
  - Provide a text-based user interface for ease of use
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# caligula

> A user-friendly, lightweight TUI for disk imaging.
> More information: <https://github.com/ifd3f/caligula>.

- Flash an ISO to a drive:

`caligula burn {{path/to/image.iso}}`

- Flash an ISO to a drive without entering the hash interactively:

`caligula burn {{path/to/image.iso}} {{[-s|--hash]}} {{hash}}`
