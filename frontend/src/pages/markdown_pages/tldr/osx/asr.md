---
title: "Restore Disk Image - Copy Volume on OSX | Online Free DevTools by Hexmos"
name: asr
path: /freedevtools/tldr/osx/asr
canonical: "https://hexmos.com/freedevtools/tldr/osx/asr/"
description: "Restore disk images with ASR on macOS. Copy volumes, erase disks, and clone partitions quickly using command-line. Free online tool, no registration required."
category: osx
keywords:
- disk image restore
- volume copy macos
- asr disk utility
- dmg restore osx
- macos volume cloning
- disk partition restore
- apple software restore
- osx disk imaging
- command line volume tools
- disk cloning software
features:
- Restore a disk image to a specified target volume
- Erase the target volume before restoring the image
- Skip verification of the restored volume for faster processing
- Clone volumes directly without an intermediate image file
- Copy file systems to new or existing volumes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# asr

> Restore (copy) a disk image onto a volume.
> The command name stands for Apple Software Restore.
> More information: <https://keith.github.io/xcode-man-pages/asr.8.html>.

- Restore a disk image to a target volume:

`sudo asr restore --source {{image_file.dmg}} --target {{path/to/volume_file}}`

- Erase the target volume before restoring:

`sudo asr restore --source {{image_file.dmg}} --target {{path/to/volume_file}} --erase`

- Skip verification after restoring:

`sudo asr restore --source {{image_file.dmg}} --target {{path/to/volume_file}} --noverify`

- Clone volumes without using an intermediate disk image:

`sudo asr restore --source {{path/to/volume_file}} --target {{path/to/volume_file}}`
