---
title: "Picocom - Control Serial Ports | Online Free DevTools by Hexmos"
name: picocom
path: /freedevtools/tldr/common/picocom
canonical: "https://hexmos.com/freedevtools/tldr/common/picocom/"
description: "Control serial ports with Picocom. Connect to devices, configure baud rates, and map special characters for efficient serial communication. Free online tool, no registration required."
category: common
keywords:
- serial console
- serial communication
- device communication
- picocom terminal
- tty device
- baud rate configuration
- linux serial
- embedded device control
- serial port monitoring
- serial data transfer
features:
- Connect to serial ports using specified device paths
- Configure custom baud rates for serial communication
- Map special characters like LF to CRLF for accurate data transfer
- Control serial port communication from the command line
- Display helpful information and usage instructions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# picocom

> Minimal program to emulate serial consoles.
> More information: <https://manned.org/picocom>.

- Connect to a serial console with the default baud rate of 9600:

`sudo picocom {{/dev/ttyXYZ}}`

- Connect to a serial console with a specified baud rate:

`sudo picocom {{/dev/ttyXYZ}} {{[-b|--baud]}} {{baud_rate}}`

- Map special characters (e.g. `LF` to `CRLF`):

`sudo picocom {{/dev/ttyXYZ}} --imap {{lfcrlf}}`

- Exit picocom:

`<Ctrl a><Ctrl x>`

- Display help:

`picocom {{[-h|--help]}}`
