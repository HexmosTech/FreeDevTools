---
title: "ST-Link Info - Control STM32 Devices | Online Free DevTools by Hexmos"
name: st-info
path: "/freedevtools/tldr/st/st-info/"
canonical: "https://hexmos.com/freedevtools/tldr/st/st-info/"
description: "Control STM32 devices with ST-Link Info, providing detailed device diagnostics and program memory analysis. Free online tool, no registration required for MCU information."
category: common
keywords:
- STM32 device information
- ST-Link programmer control
- Flash memory analysis
- SRAM memory analysis
- Embedded system debugging
- Microcontroller diagnostics
- STM32 info command-line
- st-link utility linux
- st-link utility macos
- st-link utility windows
features:
- Display available flash memory on STM32 devices
- Show available SRAM memory on STM32 devices
- Probe and display summarized device information
- Provide diagnostics for connected ST-Link programmers
- Offer detailed MCU memory analysis
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# st-info

> Get information about connected STLink and STM32 devices.
> More information: <https://github.com/texane/stlink>.

- Display amount of program memory available:

`st-info --flash`

- Display amount of SRAM memory available:

`st-info --sram`

- Display summarized information of the device:

`st-info --probe`
