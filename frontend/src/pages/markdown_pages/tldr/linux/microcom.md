---
title: "Control Serial Ports - Microcom Terminal | Online Free DevTools by Hexmos"
name: microcom
path: "/freedevtools/tldr/linux/microcom"
canonical: "https://hexmos.com/freedevtools/tldr/linux/microcom/"
description: "Control serial ports with Microcom. Connect to serial, CAN, and telnet devices from the command line. Free online tool, no registration required."
category: linux
keywords:
  - serial communication
  - serial terminal
  - serial console
  - telnet client
  - CAN connection
  - command line terminal
  - device communication
  - port monitoring
  - serial debugging
  - remote access
features:
  - Open serial ports with custom baud rates
  - Establish telnet connections to remote hosts
  - Access remote devices from the console
  - Monitor serial communication data streams
  - Connect to devices via serial, CAN, or telnet
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# microcom

> A minimalistic terminal program, used to access remote devices via a serial, CAN or telnet connection from the console.
> More information: <https://manned.org/microcom>.

- Open a serial port using the specified baud rate:

`microcom {{[-p|--port]}} {{/dev/ttyXYZ}} {{[-s|--speed]}} {{baud_rate}}`

- Establish a telnet connection to the specified host:

`microcom {{[-t|--telnet]}} {{hostname}}:{{port}}`
