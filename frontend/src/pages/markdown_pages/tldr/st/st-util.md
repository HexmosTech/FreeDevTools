---
title: "STM32 Debug - Control ARM Cortex Microcontrollers | Free DevTools"
name: st-util
path: /freedevtools/tldr/st/st-util
canonical: "https://hexmos.com/freedevtools/tldr/st/st-util/"
description: "Debug STM32 microcontrollers with st-util. Connect to, write firmware, and control your ARM Cortex-M devices using GDB. Free online tool, no registration required."
category: common
keywords:
- stm32 debug
- gdb server
- arm cortex m debug
- stlink utility
- microcontroller programming
- firmware flashing
- st-util linux
- st-util gdb
- embedded system debug
- cortex-m debugger
features:
- Run GDB server to debug STM32 microcontrollers.
- Connect to an STM32 device using GDB.
- Flash firmware to an STM32 microcontroller.
- Specify a custom port for the GDB server.
- Control ARM Cortex-M devices using GDB.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# st-util

> Run GDB (GNU Debugger) server to interact with STM32 ARM Cortex microcontoller.
> More information: <https://github.com/texane/stlink>.

- Run GDB server on port 4500:

`st-util {{[-p|--listen_port]}} {{4500}}`

- Connect to GDB server within `gdb`:

`target extended-remote {{localhost}}:{{4500}}`

- Write firmware to device:

`load {{firmware.elf}}`
