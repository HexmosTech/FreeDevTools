---
title: "Flash Rockchip Devices - Control Boot Firmware | Online Free DevTools by Hexmos"
name: rkdeveloptool
path: "/freedevtools/tldr/common/rkdeveloptool/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rkdeveloptool/"
description: "Flash Rockchip devices with rkdeveloptool. Program bootloaders, update firmware, and manage partitions on Rockchip-based devices. Free online tool, no registration required."
category: common
keywords:
- Rockchip flash tool
- Rockchip firmware update
- Rockchip bootloader
- Rockchip device programming
- Rockchip image writing
- Maskrom tool
- Bootrom tool
- Linux flash tool
- USB flash tool
- Rockchip partition manager
features:
- Flash bootloaders to Rockchip devices
- Update boot firmware via USB
- Write images to GPT partitions
- List connected Rockchip devices
- Reset and reboot Rockchip devices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rkdeveloptool

> Flash, dump, and manage boot firmware for Rockchip-based computer devices.
> You will need to turn on the device into Maskrom/Bootrom mode before connecting it through USB.
> Some subcommands may require to run as root.
> More information: <https://github.com/rockchip-linux/rkdeveloptool>.

- [l]ist all connected Rockchip-based flash [d]evices:

`rkdeveloptool ld`

- Initialize the device by forcing it to [d]ownload and install the [b]ootloader from the specified file:

`rkdeveloptool db {{path/to/bootloader.bin}}`

- [u]pdate the boot[l]oader software with a new one:

`rkdeveloptool ul {{path/to/bootloader.bin}}`

- Write an image to a GPT-formatted flash partition, specifying the initial storage sector (usually `0x0` alias `0`):

`rkdeveloptool wl {{initial_sector}} {{path/to/image.img}}`

- Write to the flash partition by its user-friendly name:

`rkdeveloptool wlx {{partition_name}} {{path/to/image.img}}`

- [r]eset/reboot the [d]evice, exit from the Maskrom/Bootrom mode to boot into the selected flash partition:

`rkdeveloptool rd`
