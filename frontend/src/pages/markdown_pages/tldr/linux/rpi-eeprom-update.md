---
title: "Update Raspberry Pi EEPROM - Manage Firmware | Online Free DevTools by Hexmos"
name: rpi-eeprom-update
path: /freedevtools/tldr/linux/rpi-eeprom-update
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpi-eeprom-update/"
description: "Manage Raspberry Pi EEPROM firmware updates with rpi-eeprom-update.  View EEPROM information, update firmware, cancel updates, and troubleshoot issues. Free online tool, no registration required."
category: linux
keywords:
  - raspberry pi eeprom update
  - rpi eeprom information
  - linux eeprom management
  - firmware update command
  - eeprom configuration tool
  - raspberry pi firmware
  - rpi-eeprom-update command
  - linux system management
  - eeprom update utility
  - raspberry pi command line
features:
  - View current Raspberry Pi EEPROM information.
  - Update the Raspberry Pi EEPROM firmware.
  - Cancel a pending EEPROM update.
  - Display detailed help information for command usage.
  - Manage and troubleshoot Raspberry Pi EEPROM issues.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rpi-eeprom-update

> Update EEPROM and view other EEPROM information.
> More information: <https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#rpi-eeprom-update>.

- Print information about the current raspberry pi EEPROM installed:

`sudo rpi-eeprom-update`

- Update a raspberry pi EEPROM:

`sudo rpi-eeprom-update -a`

- Cancel the pending update:

`sudo rpi-eeprom-update -r`

- Display help:

`rpi-eeprom-update -h`
