---
title: "Create Device Files - Control Devices with mknod | Online Free DevTools by Hexmos"
name: mknod
path: "/freedevtools/tldr/linux/mknod"
canonical: "https://hexmos.com/freedevtools/tldr/linux/mknod/"
description: "Create device files with mknod. Easily manage device nodes, create block and character devices. Free online tool, no registration required."
category: linux
keywords:
- device file creation
- linux device management
- mknod command
- block device creation
- character device creation
- fifo device creation
- linux device node
- gnu coreutils mknod
- linux command line tools
- device special files
features:
- Create block device files
- Create character device files
- Create FIFO (named pipe) devices
- Set SELinux security context on device files
- Manage device nodes using the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mknod

> Create block or character device special files.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/mknod-invocation.html>.

- Create a block device:

`sudo mknod {{path/to/device_file}} b {{major_device_number}} {{minor_device_number}}`

- Create a character device:

`sudo mknod {{path/to/device_file}} c {{major_device_number}} {{minor_device_number}}`

- Create a FIFO (queue) device:

`sudo mknod {{path/to/device_file}} p`

- Create a device file with default SELinux security context:

`sudo mknod {{[-Z |--context=]}}{{path/to/device_file}} {{type}} {{major_device_number}} {{minor_device_number}}`
