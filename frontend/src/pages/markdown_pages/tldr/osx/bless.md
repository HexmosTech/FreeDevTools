---
title: "Bless - Set Startup Disk Options | Online Free DevTools by Hexmos"
name: bless
path: /freedevtools/tldr/osx/bless
canonical: "https://hexmos.com/freedevtools/tldr/osx/bless/"
description: "Set startup disk options with Bless, a powerful macOS command line tool. Easily configure boot volumes and network boot settings. Free online tool, no registration required."
category: osx
keywords:
- macOS boot volume configuration
- Bless command line options
- OSX startup disk selector
- NetBoot server configuration
- Darwin bootloader management
- System startup volume selection
- Apple boot options utility
- Bootable volume settings
- BSDP server setup
- System boot information retrieval
features:
- Set the bootable volume for macOS
- Configure network booting options
- Retrieve boot information as a Property List
- Create BootX and boot.efi files as needed
- Set a volume containing Mac OS 9 and Mac OS X to be the active volume
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bless

> Set volume boot capability and startup disk options.
> More information: <https://keith.github.io/xcode-man-pages/bless.8.html>.

- Bless a volume with only Mac OS X or Darwin, and create the BootX and `boot.efi` files as needed:

`bless --folder {{/Volumes/Mac OS X/System/Library/CoreServices}} --bootinfo --bootefi`

- Set a volume containing either Mac OS 9 and Mac OS X to be the active volume:

`bless --mount {{/Volumes/Mac OS}} --setBoot`

- Set the system to NetBoot and broadcast for an available server:

`bless --netboot --server {{bsdp://255.255.255.255}}`

- Gather information about the currently selected volume (as determined by the firmware), suitable for piping to a program capable of parsing Property Lists:

`bless --info --plist`
