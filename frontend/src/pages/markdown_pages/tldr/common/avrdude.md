---
title: "AVRdude Programmer - Program Atmel AVR Microcontrollers | Online Free DevTools by Hexmos"
name: avrdude
path: /freedevtools/tldr/common/avrdude
canonical: "https://hexmos.com/freedevtools/tldr/common/avrdude/"
description: "Program Atmel AVR microcontrollers with AVRdude, a powerful command-line tool for flashing and reading memory. Free online tool, no registration required."
category: common
keywords:
- AVRdude programmer
- AVR microcontroller programming
- Atmel AVR flashing
- AVR chip programming
- avrdude command line
- AVR memory read
- Embedded programming tool
- Microcontroller firmware update
- avrdude linux
- avrdude windows
features:
- Program AVR microcontrollers through command line
- Read flash memory from AVR devices
- Write firmware to AVR microcontrollers
- List available AVR devices
- List supported AVR programmers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# avrdude

> Driver program for Atmel AVR microcontrollers programming.
> More information: <https://www.nongnu.org/avrdude/user-manual/avrdude_3.html#Option-Descriptions>.

- [r]ead the flash ROM of a AVR microcontroller with a specific [p]art ID:

`avrdude -p {{part_no}} -c {{programmer_id}} -U flash:r:{{file.hex}}:i`

- [w]rite to the flash ROM AVR microcontroller:

`avrdude -p {{part_no}} -c {{programmer}} -U flash:w:{{file.hex}}`

- List available AVR devices:

`avrdude -p \?`

- List available AVR programmers:

`avrdude -c \?`
