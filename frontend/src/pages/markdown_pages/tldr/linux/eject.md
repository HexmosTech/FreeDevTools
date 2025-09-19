---
title: "Eject Command - Control Device Ejection | Online Free DevTools by Hexmos"
name: eject
path: /freedevtools/tldr/linux/eject
canonical: "https://hexmos.com/freedevtools/tldr/linux/eject/"
description: "Control device ejection with the eject command.  Manage CDs, floppy disks, and more. Free online tool, no registration required."
category: linux
keywords:
  - eject command
  - device ejection
  - cdrom eject
  - floppy eject
  - tape eject
  - usb eject
  - linux eject
  - command line eject
  - terminal eject
  - system eject
features:
  - Eject CDs, floppy disks, tape drives, and USB sticks.
  - Specify target device (/dev/cdrom, /mnt/floppy, etc.).
  - Toggle tray open/close state.
  - Support for manual eject override.
  - Eject specific device types (CD-ROM, floppy, tape).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eject

> Eject CDs, floppy disks, tape drives, and USB sticks.
> More information: <https://manned.org/eject>.

- Display the default device:

`eject {{[-d|--default]}}`

- Eject the default device:

`eject`

- Eject a specific device (the default order is cd-rom, scsi, floppy and tape):

`eject {{/dev/cdrom}}`

- Toggle whether a device's tray is open or closed:

`eject {{[-T|--traytoggle]}} {{/dev/cdrom}}`

- Eject a cd drive:

`eject {{[-r|--cdrom]}} {{/dev/cdrom}}`

- Eject a floppy drive:

`eject {{[-f|--floppy]}} {{/mnt/floppy}}`

- Eject a tape drive:

`eject {{[-q|--tape]}} {{/mnt/tape}}`

- Set whether the physical eject button is [i]gnored (`on` prevents ejecting):

`eject {{[-i|--manualeject]}} {{on|off}}`
