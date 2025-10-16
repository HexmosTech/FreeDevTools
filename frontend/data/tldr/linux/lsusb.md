---
title: "List USB Devices - Display USB Info | Online Free DevTools by Hexmos"
name: lsusb
path: "/freedevtools/tldr/linux/lsusb/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lsusb/"
description: "List USB devices with lsusb. Discover connected USB devices and their details using this command line tool. Free online tool, no registration required."
category: linux
keywords:
- usb device list
- usb device information
- linux usb devices
- lsusb command
- usb bus
- usb vendor id
- usb product id
- lsusb linux
- usb device tree
- usb verbose
features:
- List all connected USB devices
- Display USB device hierarchy as a tree
- Show verbose information about USB devices
- Filter devices by vendor and product ID
- Display detailed information for a specific device
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lsusb

> Display information about USB buses and devices connected to them.
> More information: <https://manned.org/lsusb>.

- List all the USB devices available:

`lsusb`

- List the USB hierarchy as a tree:

`lsusb {{[-t|--tree]}}`

- List verbose information about USB devices:

`lsusb {{[-v|--verbose]}}`

- List detailed information about a USB device:

`lsusb {{[-v|--verbose]}} -s {{bus}}:{{device number}}`

- List devices with a specified vendor and product ID only:

`lsusb -d {{vendor}}:{{product}}`
