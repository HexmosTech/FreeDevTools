---
title: "Picotool - Manage Raspberry Pi Pico Boards | Online Free DevTools by Hexmos"
name: picotool
path: /freedevtools/tldr/common/picotool
canonical: "https://hexmos.com/freedevtools/tldr/common/picotool/"
description: "Manage Raspberry Pi Pico boards with Picotool. Load binaries, convert ELF files to UF2, and reboot devices effortlessly. Free online tool, no registration required."
category: common
keywords:
- Raspberry Pi Pico manager
- Pico firmware loader
- UF2 file converter
- Pico reboot command
- Embedded device programmer
- Pico information tool
- ARM microcontroller utility
- Binary to UF2 conversion
- Raspberry Pi programming
- Pico command line interface
features:
- Display information about connected Raspberry Pi Pico boards.
- Load binary files onto Raspberry Pi Pico devices.
- Convert ELF and BIN files to UF2 format for Pico loading.
- Reboot connected Raspberry Pi Pico boards.
- List available registers on the Raspberry Pi Pico.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# picotool

> Manage Raspberry Pi Pico boards.
> More information: <https://github.com/raspberrypi/picotool>.

- Display information about the currently loaded program on a Pico:

`picotool info`

- Load a binary onto a Pico:

`picotool load {{path/to/binary}}`

- Convert an ELF or BIN file to UF2:

`picotool uf2 convert {{path/to/elf_or_bin}} {{path/to/output}}`

- Reboot a Pico:

`picotool reboot`

- List all known registers:

`picotool otp list`

- Display version:

`picotool version`

- Display help:

`picotool help`
