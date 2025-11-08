---
title: "Flashrom - Manage Flash Memory | Online Free DevTools by Hexmos"
name: flashrom
path: "/freedevtools/tldr/linux/flashrom/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/flashrom/"
description: "Manage flash memory with flashrom. Read, write, verify, and erase flash chips easily using command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - flash memory management
  - flashrom command
  - linux flashrom
  - spi flash programmer
  - microcontroller programming
  - bios flashing
  - firmware flashing
  - eeprom programming
  - flash chip reader
  - read flash memory
features:
  - Read data from flash memory chips.
  - Write data to flash memory chips.
  - Verify data written to flash memory chips.
  - Erase data from flash memory chips.
  - Support various programmers and interfaces.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# flashrom

> Read, write, verify and erase flash chips.
> More information: <https://manned.org/flashrom>.

- Probe the chip, ensuring the wiring is correct:

`flashrom {{[-p|--programmer]}} {{programmer}}`

- Read flash and save it to a file:

`flashrom {{[-p|--programmer]}} {{programmer}} {{[-r|--read]}} {{path/to/file}}`

- Write a file to the flash:

`flashrom {{[-p|--programmer]}} {{programmer}} {{[-w|--write]}} {{path/to/file}}`

- Verify the flash against a file:

`flashrom {{[-p|--programmer]}} {{programmer}} {{[-v|--verify]}} {{path/to/file}}`

- Probe the chip using Raspberry Pi:

`flashrom {{[-p|--programmer]}} {{linux_spi:dev=/dev/spidev0.0}}`
