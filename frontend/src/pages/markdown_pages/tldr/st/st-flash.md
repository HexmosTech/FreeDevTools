---
title: "Flash STM32 - Program Microcontrollers | Online Free DevTools by Hexmos"
name: st-flash
path: /freedevtools/tldr/st/st-flash
canonical: "https://hexmos.com/freedevtools/tldr/st/st-flash/"
description: "Flash STM32 microcontrollers with st-flash. Program firmware, erase memory, and read/write data to STM32 devices easily. Free online tool, no registration required."
category: common
keywords:
- STM32 Flasher
- ARM Cortex Programmer
- Microcontroller Flashing
- Embedded Firmware Upload
- STM32 Binary Writer
- ST-Link Utility
- STM32 Debugging Tool
- Firmware Programming Tool
- Embedded Systems Development
- ARM Cortex M Series
features:
- Flash binary files to STM32 microcontrollers
- Read memory from STM32 devices
- Write firmware to specific memory addresses
- Erase firmware from STM32 memory
- Program ARM Cortex microcontrollers via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# st-flash

> Flash binary files to STM32 ARM Cortex microcontrollers.
> More information: <https://manned.org/st-flash>.

- Read 4096 bytes from the device starting from 0x8000000:

`st-flash read {{firmware}}.bin {{0x8000000}} {{4096}}`

- Write firmware to device starting from 0x8000000:

`st-flash write {{firmware}}.bin {{0x8000000}}`

- Erase firmware from device:

`st-flash erase`
