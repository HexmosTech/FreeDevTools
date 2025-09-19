---
title: "Convert Files - Convert and Copy with dd | Online Free DevTools by Hexmos"
name: dd
path: /freedevtools/tldr/linux/dd
canonical: "https://hexmos.com/freedevtools/tldr/linux/dd/"
description: "Convert files with dd. Copy data, clone drives, and generate random files. A powerful command line file converter. Free online tool, no registration required."
category: linux
keywords:
  - file conversion
  - data copying
  - disk cloning
  - image creation
  - drive backup
  - random data generation
  - command line tool
  - linux dd
  - macos dd
  - data recovery
features:
  - Clone entire disks or partitions
  - Generate files filled with random data
  - Convert data between different formats
  - Create bootable USB drives from ISO images
  - Benchmark disk write performance
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dd

> Convert and copy a file.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/dd-invocation.html>.

- Make a bootable USB drive from an isohybrid file (such as `archlinux-xxx.iso`) and show the progress:

`dd if={{path/to/file.iso}} of={{/dev/usb_drive}} status=progress`

- Clone a drive to another drive with 4 MiB block size and flush writes before the command terminates:

`dd bs=4M conv=fsync if={{/dev/source_drive}} of={{/dev/dest_drive}}`

- Generate a file with a specific number of random bytes by using kernel random driver:

`dd bs={{100}} count={{1}} if=/dev/urandom of={{path/to/random_file}}`

- Benchmark the write performance of a disk:

`dd bs={{1M}} count={{1024}} if=/dev/zero of={{path/to/file_1GB}}`

- Create a system backup, save it into an IMG file (can be restored later by swapping `if` and `of`), and show the progress:

`dd if={{/dev/drive_device}} of={{path/to/file.img}} status=progress`

- Check the progress of an ongoing `dd` operation (run this command from another shell):

`kill -USR1 $(pgrep {{[-x|--exact]}} dd)`
