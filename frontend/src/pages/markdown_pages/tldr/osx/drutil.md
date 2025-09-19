---
title: "Drutil - Interact with DVD Burners | Online Free DevTools by Hexmos"
name: drutil
path: /freedevtools/tldr/osx/drutil
canonical: "https://hexmos.com/freedevtools/tldr/osx/drutil/"
description: "Interact with DVD burners using Drutil. Eject disks, burn ISO images, and control optical drives directly from the command line. Free online tool, no registration required."
category: osx
keywords:
- dvd burner interaction
- optical drive control
- iso9660 burner tool
- drutil command line
- osx disk eject
- macos dvd utility
- dvd burning software
- disk image creation
- optical media management
- command line burner
features:
- Eject disks from optical drives
- Burn directories to ISO9660 images
- Control DVD burner functionality
- Automate disk burning processes
- Interact with optical media via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# drutil

> Interact with DVD burners.
> More information: <https://keith.github.io/xcode-man-pages/drutil.1.html>.

- Eject a disk from the drive:

`drutil eject`

- Burn a directory as an ISO9660 filesystem onto a DVD. Don't verify and eject when complete:

`drutil burn -noverify -eject -iso9660`
