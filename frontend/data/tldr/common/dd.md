---
title: "Convert and Copy Files with dd | Online Free DevTools by Hexmos"
name: dd
path: "/freedevtools/tldr/common/dd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dd/"
description: "Convert and copy files with the powerful dd command.  Clone disks, create bootable USB drives, and generate random data. Free online tool, no registration required."
category: common
keywords:
  - file conversion dd
  - data copying dd
  - disk cloning dd
  - image creation dd
  - usb drive creation dd
  - random data generation dd
  - linux dd command
  - system backup dd
  - file system manipulation dd
  - low-level disk operations dd
features:
  - Copy and convert files between different formats.
  - Create bootable USB drives from ISO images.
  - Clone hard drives and other block devices.
  - Generate files containing random data.
  - Benchmark disk write performance.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dd

> Convert and copy a file.
> More information: <https://manned.org/dd.1p>.

- Make a bootable USB drive from an isohybrid file (such as `archlinux-xxx.iso`) and show the progress:

`dd if={{path/to/file.iso}} of={{/dev/usb_drive}} status=progress`

- Clone a drive to another drive with 4 MiB block size and flush writes before the command terminates:

`dd bs=4194304 conv=fsync if={{/dev/source_drive}} of={{/dev/dest_drive}}`

- Generate a file with a specific number of random bytes by using kernel random driver:

`dd bs={{100}} count={{1}} if=/dev/urandom of={{path/to/random_file}}`

- Benchmark the sequential write performance of a disk:

`dd bs={{1024}} count={{1000000}} if=/dev/zero of={{path/to/file_1GB}}`

- Create a system backup, save it into an IMG file (can be restored later by swapping `if` and `of`), and show the progress:

`dd if={{/dev/drive_device}} of={{path/to/file.img}} status=progress`
