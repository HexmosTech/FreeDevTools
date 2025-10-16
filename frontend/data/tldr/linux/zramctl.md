---
title: "zramctl - Control zRAM Devices | Online Free DevTools by Hexmos"
name: zramctl
path: "/freedevtools/tldr/linux/zramctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/zramctl/"
description: "Control and manage zRAM devices with zramctl.  Initialize, configure, and monitor zRAM devices for improved system performance. Free online tool, no registration required."
category: linux
keywords:
  - zram device control
  - zram device management
  - linux zram setup
  - zram configuration commands
  - initialize zram devices
  - zram size configuration
  - zram compression algorithm
  - monitor zram usage
  - zramctl commands linux
  - manage zram partitions
features:
  - Initialize zRAM devices with specified size and compression algorithm.
  - Manage and control the number of active zRAM devices.
  - Monitor the status and usage of currently initialized zRAM devices.
  - Configure compression algorithms for optimal performance.
  - Format zRAM devices using mkfs or mkswap.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zramctl

> Setup and control zram devices.
> Use `mkfs` or `mkswap` to format zram devices to partitions.
> More information: <https://manned.org/zramctl>.

- Check if zram is enabled:

`lsmod | grep {{[-i|--ignore-case]}} zram`

- Enable zram with a dynamic number of devices (use `zramctl` to configure devices further):

`sudo modprobe zram`

- Enable zram with exactly 2 devices:

`sudo modprobe zram num_devices={{2}}`

- Find and initialize the next free zram device to a 2 GB virtual drive using LZ4 compression:

`sudo zramctl {{[-f|--find]}} {{[-s|--size]}} {{2GB}} {{[-a|--algorithm]}} {{lz4}}`

- List currently initialized devices:

`sudo zramctl`
