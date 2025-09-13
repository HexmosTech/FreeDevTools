---
title: "QEMU x86_64 Emulator - Run Virtual Machines | Free DevTools"
name: qemu-system-x86_64
path: /freedevtools/tldr/qemu/qemu-system-x86_64
canonical: "https://hexmos.com/freedevtools/tldr/qemu/qemu-system-x86_64/"
description: "Run virtual machines with QEMU x86_64 emulator. Emulate x86_64 architecture, boot from images, and test operating systems. Free online tool, no registration required."
category: common
keywords:
- qemu x86_64 emulation
- x86_64 virtual machine
- qemu system emulator
- linux virtual machine
- qemu image boot
- operating system testing
- bootable usb test
- headless qemu
- qemu command line
- virtual device emulation
features:
- Boot virtual machines from disk images
- Emulate x86_64 architecture on different platforms
- Boot from live ISO images for OS testing
- Emulate physical devices like USB drives
- Run QEMU instances in non-graphical mode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qemu-system-x86_64

> Emulate the `x86_64` architecture.
> More information: <https://www.qemu.org/docs/master/system/target-i386.html>.

- Boot from an image emulating the `x86_64` architecture:

`qemu-system-x86_64 -hda {{image_name.img}} -m {{4096}}`

- Boot a QEMU instance from a live ISO image:

`qemu-system-x86_64 -hda {{image_name.img}} -cdrom {{os_image.iso}} -boot d -m {{4096}}`

- Boot from a physical device (e.g. from USB to test a bootable medium):

`qemu-system-x86_64 -hda {{/dev/storage_device}} -m {{4096}}`

- Do not launch a VNC server:

`qemu-system-x86_64 -hda {{image_name.img}} -m {{4096}} -nographic`

- Exit non-graphical QEMU:

`<Ctrl a><x>`

- List the supported machine types:

`qemu-system-x86_64 {{[-M|-machine]}} help`
