---
title: "Systool - View System Devices | Online Free DevTools by Hexmos"
name: systool
path: "/freedevtools/tldr/linux/systool/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/systool/"
description: "View system device information with Systool.  Inspect device attributes by bus and class, including drivers. Free online tool, no registration required."
category: linux
keywords:
  - system device viewer
  - linux system information
  - bus device attributes
  - class device attributes
  - device driver information
  - sysfs command
  - systool linux
  - system information command
  - linux device inspection
  - pci device viewer
features:
  - Lists all attributes of devices on a specified bus.
  - Lists all attributes of devices within a specified class.
  - Displays only device drivers for a given bus.
  - Provides detailed information about system devices.
  - Uses the sysfs interface to access device information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systool

> View system device information by bus, and classes.
> This command is part of the `sysfs` package.
> More information: <https://manned.org/systool>.

- List all attributes of devices of a bus (eg. `pci`, `usb`). View all buses using `ls /sys/bus`:

`systool -b {{bus}} -v`

- List all attributes of a class of devices (eg. `drm`, `block`). View all classes using `ls /sys/class`:

`systool -c {{class}} -v`

- Show only device drivers of a bus (eg. `pci`, `usb`):

`systool -b {{bus}} -D`
