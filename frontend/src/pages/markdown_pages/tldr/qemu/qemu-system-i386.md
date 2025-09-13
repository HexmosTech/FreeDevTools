---
title: "Emulate i386 - Run Virtual Machines | Free DevTools"
name: qemu-system-i386
path: /freedevtools/tldr/qemu/qemu-system-i386
canonical: "https://hexmos.com/freedevtools/tldr/qemu/qemu-system-i386/"
description: "Emulate i386 architecture with QEMU system emulator. Run virtual machines, boot from ISO images, and test bootable media efficiently. Free online tool, no registration required."
category: common
keywords:
- i386 emulator
- QEMU i386
- virtual machine i386
- i386 virtualization
- system emulator
- i386 boot
- linux i386 emulation
- iso boot i386
- qemu command
- physical device boot
features:
- Boot virtual machines from disk images
- Run QEMU instances from live ISO images
- Boot from physical devices like USB drives
- Launch QEMU without a VNC server
- List supported machine types for emulation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qemu-system-i386

> Emulate the `i386` architecture.
> More information: <https://www.qemu.org/docs/master/system/target-i386.html>.

- Boot from an image emulating the `i386` architecture:

`qemu-system-i386 -hda {{image_name.img}} -m {{4096}}`

- Boot a QEMU instance from a live ISO image:

`qemu-system-i386 -hda {{image_name.img}} -cdrom {{os_image.iso}} -boot d -m {{4096}}`

- Boot from a physical device (e.g. from USB to test a bootable medium):

`qemu-system-i386 -hda {{/dev/storage_device}} -m {{4096}}`

- Do not launch a VNC server:

`qemu-system-i386 -hda {{image_name.img}} -m {{4096}} -nographic`

- Exit non-graphical QEMU:

`<Ctrl a><x>`

- List the supported machine types:

`qemu-system-i386 {{[-M|-machine]}} help`
