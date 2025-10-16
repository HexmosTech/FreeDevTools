---
title: "GRUB File Check - Validate Bootable Image Type | Online Free DevTools by Hexmos"
name: grub-file
path: "/freedevtools/tldr/linux/grub-file/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/grub-file/"
description: "Validate bootable image types with GRUB file, a Linux command to verify image architectures like EFI and XNU. Free online tool, no registration required."
category: linux
keywords:
- Bootable image validator
- Grub file check
- Linux image verification
- EFI image identifier
- XNU image validator
- ARM kernel checker
- i386 EFI validator
- x86_64 EFI validator
- grub-file linux command
- Kernel image identifier
features:
- Identify ARM EFI images
- Verify i386 EFI images
- Validate x86_64 EFI images
- Check for ARM Linux kernels
- Determine x86_64 XNU image types
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# grub-file

> Check if a file is of a bootable image type.
> More information: <https://manned.org/grub-file>.

- Check if a file is an ARM EFI image:

`grub-file --is-arm-efi {{path/to/file}}`

- Check if a file is an i386 EFI image:

`grub-file --is-i386-efi {{path/to/file}}`

- Check if a file is an x86_64 EFI image:

`grub-file --is-x86_64-efi {{path/to/file}}`

- Check if a file is an ARM image (Linux kernel):

`grub-file --is-arm-linux {{path/to/file}}`

- Check if a file is an x86 image (Linux kernel):

`grub-file --is-x86-linux {{path/to/file}}`

- Check if a file is an x86_64 XNU image (macOS kernel):

`grub-file --is-x86_64-xnu {{path/to/file}}`
