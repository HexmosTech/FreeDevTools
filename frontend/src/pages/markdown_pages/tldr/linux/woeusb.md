---
title: "Format USB - Create Windows Bootable Drive with WoeUSB | Online Free DevTools by Hexmos"
name: woeusb
path: /freedevtools/tldr/linux/woeusb
canonical: "https://hexmos.com/freedevtools/tldr/linux/woeusb/"
description: "Format USB drives to create bootable Windows installation media with WoeUSB. A powerful Linux tool for creating Windows USB drives. Free online tool, no registration required."
category: linux
keywords:
- Windows bootable USB
- Linux Windows installer
- USB format tool
- ISO to USB converter
- Windows installation media
- Bootable drive creator
- WoeUSB Linux
- Windows USB creator
- Linux USB formatting
- Windows ISO burner
features:
- Create bootable Windows USB drives from ISO images
- Format USB drives for Windows installation
- Copy Windows files to USB partitions
- Make existing USB partitions bootable
- Support for various Windows versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# woeusb

> Windows media creation tool.
> More information: <https://github.com/WoeUSB/WoeUSB>.

- Format a USB then create a bootable Windows installation drive:

`woeusb --device {{path/to/windows.iso}} {{/dev/sdX}}`

- Copy Windows files to an existing partition of a USB storage device and make it bootable, without erasing the current data:

`woeusb --partition {{path/to/windows.iso}} {{/dev/sdXN}}`
