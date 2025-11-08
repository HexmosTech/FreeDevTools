---
title: "Control PlatformIO Devices - Monitor and Manage | Online Free DevTools by Hexmos"
name: pio-device
path: "/freedevtools/tldr/pio/pio-device/"
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-device/"
description: "Control PlatformIO devices with ease using this tool. Manage ports, monitor serial communication and debug embedded systems. Free online tool, no registration required."
category: common
keywords:
- PlatformIO device manager
- serial port monitoring
- embedded system debugging
- pio device serial communication
- PlatformIO device list
- interactive device monitor
- USB device management
- ttyUSB serial ports
- PlatformIO serial monitor
- device communication tool
features:
- List available serial ports and logical devices.
- Start an interactive device monitor for serial communication.
- Specify the port to monitor for specific devices.
- Set custom baud rates for serial communication.
- Configure end-of-line characters for device monitoring.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pio device

> Manage and monitor PlatformIO devices.
> More information: <https://docs.platformio.org/en/latest/core/userguide/device/>.

- List all available serial ports:

`pio device list`

- List all available logical devices:

`pio device list --logical`

- Start an interactive device monitor:

`pio device monitor`

- Start an interactive device monitor and listen to a specific port:

`pio device monitor {{[-p|--port]}} {{/dev/ttyUSBX}}`

- Start an interactive device monitor and set a specific baud rate (defaults to 9600):

`pio device monitor {{[-b|--baud]}} {{57600}}`

- Start an interactive device monitor and set a specific EOL character (defaults to `CRLF`):

`pio device monitor --eol {{CRLF|CR|LF}}`

- Go to the menu of the interactive device monitor:

`<Ctrl t>`
