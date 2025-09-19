---
title: "Setserial - Control Serial Ports | Online Free DevTools by Hexmos"
name: setserial
path: /freedevtools/tldr/linux/setserial
canonical: "https://hexmos.com/freedevtools/tldr/linux/setserial/"
description: "Control serial ports with Setserial. Configure serial devices and retrieve detailed port information. Free online tool, no registration required."
category: linux
keywords:
- linux serial port configuration
- serial port control linux
- linux tty configuration
- setserial device management
- serial communication settings linux
- modify serial port parameters
- linux serial terminal setup
- tty device information
- serial port diagnostics linux
- linux serial port troubleshooting
features:
- Display detailed serial port information
- Modify serial port configuration parameters
- Configure specific serial device settings
- Retrieve configuration summaries for serial devices
- Diagnose serial port communication issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# setserial

> Read and modify serial port information.
> More information: <https://manned.org/setserial>.

- Print all information about a specific serial device:

`setserial -a {{/dev/cuaN}}`

- Print the configuration summary of a specific serial device (useful for printing during bootup process):

`setserial -b {{device}}`

- Set a specific configuration parameter to a device:

`sudo setserial {{device}} {{parameter}}`

- Print the configuration of a list of devices:

`setserial -g {{device1 device2 ...}}`
