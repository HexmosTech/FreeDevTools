---
title: "RPI Imager - Flash Images to Storage | Online Free DevTools by Hexmos"
name: rpi-imager
path: /freedevtools/tldr/common/rpi-imager
canonical: "https://hexmos.com/freedevtools/tldr/common/rpi-imager/"
description: "Flash OS images with RPI Imager. Quickly write Raspberry Pi images to storage devices with checksum validation options. Free online tool, no registration required."
category: common
keywords:
- Raspberry Pi imager
- OS image flasher
- SD card writer
- Image verification tool
- Raspberry Pi flashing tool
- Linux image writer
- Disk imaging tool
- Storage device flasher
- RPI image burner
- Bootable image creator
features:
- Write images to block devices
- Disable checksum verification during image writing
- Specify expected SHA256 checksum for verification
- Flash Raspberry Pi operating systems
- Write images using command-line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rpi-imager

> Flash images onto storage devices.
> More information: <https://github.com/raspberrypi/rpi-imager>.

- Write a specific image to a specific block device:

`rpi-imager --cli {{path/to/image.zip}} {{/dev/sdX}}`

- Write a specific image to a block device, disabling the checksum verification:

`rpi-imager --cli --disable-verify {{path/to/image.zip}} {{/dev/sdX}}`

- Write a specific image to a block device, which will expect a specific checksum when running the verification:

`rpi-imager --cli --sha256 {{expected_hash}} {{path/to/image.zip}} {{/dev/sdX}}`
