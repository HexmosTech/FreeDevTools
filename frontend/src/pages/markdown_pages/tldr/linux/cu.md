---
title: "Control Serial Ports with cu - Terminal Access & File Transfer | Online Free DevTools by Hexmos"
name: cu
path: /freedevtools/tldr/linux/cu
canonical: "https://hexmos.com/freedevtools/tldr/linux/cu/"
description: "Control serial port access and perform file transfers with the cu command.  This powerful Linux utility provides terminal access and data exchange capabilities. Free online tool, no registration required."
category: linux
keywords:
  - serial port control linux
  - cu command linux
  - terminal access linux
  - file transfer linux
  - serial communication linux
  - cu command terminal
  - linux serial port
  - dial-in terminal linux
  - linux cu tutorial
  - baud rate configuration linux
features:
  - Open and control serial ports with various baud rates.
  - Establish dial-in/serial terminal connections to remote systems.
  - Perform file transfers between systems via serial connection.
  - Configure parity settings for serial communication (even, odd, none).
  - Control hardware and software flow control options.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cu

> Call Up another system and act as a dial-in/serial terminal or perform file transfers with no error checking.
> More information: <https://manned.org/cu>.

- Open a given serial port:

`sudo cu {{[-l|--line]}} {{/dev/ttyXYZ}}`

- Open a given serial port with a given baud rate:

`sudo cu {{[-l|--line]}} {{/dev/ttyXYZ}} {{[-s|--speed]}} {{115200}}`

- Open a given serial port with a given baud rate and echo characters locally (half-duplex mode):

`sudo cu {{[-l|--line]}} {{/dev/ttyXYZ}} {{[-s|--speed]}} {{115200}} {{[-h|--halfduplex]}}`

- Open a given serial port with a given baud rate, parity, and no hardware or software flow control:

`sudo cu {{[-l|--line]}} {{/dev/ttyXYZ}} {{[-s|--speed]}} {{115200}} --parity={{even|odd|none}} {{[-f|--nortscts]}} --nostop`

- Exit the `cu` session when in connection:

`<Enter><~><.>`

- Display help:

`cu --help`
