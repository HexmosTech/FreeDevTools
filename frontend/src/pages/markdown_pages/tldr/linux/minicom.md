---
title: "Control Serial Port - minicom Communication | Online Free DevTools by Hexmos"
name: minicom
path: /freedevtools/tldr/linux/minicom
canonical: "https://hexmos.com/freedevtools/tldr/linux/minicom/"
description: "Control serial port communication with minicom. Configure baud rates, capture output, and interact with serial devices. Free online tool, no registration required."
category: linux
keywords:
  - serial port communication
  - minicom serial terminal
  - tty serial interface
  - baud rate configuration
  - serial data capture
  - command-line serial tool
  - linux serial communication
  - serial device interaction
  - terminal emulation
  - serial debugging
features:
  - Open and configure serial ports with custom baud rates
  - Capture serial port output to a specified file
  - Enter interactive configuration menu before communication
  - Communicate with various serial devices via the command line
  - Exit minicom using a keyboard shortcut
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# minicom

> Communicate with the serial interface of a device.
> More information: <https://manned.org/minicom>.

- Open a given serial port:

`sudo minicom {{[-D|--device]}} {{/dev/ttyXYZ}}`

- Open a given serial port with a given baud rate:

`sudo minicom {{[-D|--device]}} {{/dev/ttyXYZ}} {{[-b|--baudrate]}} {{115200}}`

- Enter the configuration menu before communicating with a given serial port:

`sudo minicom {{[-D|--device]}} {{/dev/ttyXYZ}} {{[-s|--setup]}}`

- Capture the output of a serial port to a file:

`sudo minicom {{[-D|--device]}} {{/dev/ttyXYZ}} {{[-C|--capturefile]}} {{path/to/file}}`

- Exit minicom:

`<Ctrl a><x><Enter>`

- Display help:

`minicom {{[-h|--help]}}`
