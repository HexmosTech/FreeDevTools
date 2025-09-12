---
title: "vcgencmd - Monitor Raspberry Pi System | Free DevTools"
name: vcgencmd
path: /freedevtools/tldr/linux/vcgencmd
canonical: "https://hexmos.com/freedevtools/tldr/linux/vcgencmd/"
description: "Monitor Raspberry Pi system information with vcgencmd.  Retrieve CPU temperature, voltage, and throttling status easily. Free online tool, no registration required."
category: linux
keywords:
  - Raspberry Pi system information
  - vcgencmd commands
  - Raspberry Pi temperature monitor
  - Raspberry Pi voltage monitor
  - Raspberry Pi throttling status
  - Linux system monitor
  - vcgencmd tutorial
  - Raspberry Pi performance monitor
  - command line Raspberry Pi
  - Raspberry Pi diagnostics
features:
  - Retrieve current CPU temperature
  - Measure current voltage levels
  - Display system throttling state
  - Access bootloader configuration (Raspberry Pi 4)
  - List all available vcgencmd commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vcgencmd

> Print system information for a Raspberry Pi.
> More information: <https://www.raspberrypi.com/documentation/computers/os.html#vcgencmd>.

- List all available commands:

`vcgencmd commands`

- Print the current CPU temperature:

`vcgencmd measure_temp`

- Print the current voltage:

`vcgencmd measure_volts`

- Print the throttled state of the system as a bit pattern:

`vcgencmd get_throttled`

- Print the bootloader configuration (only available on Raspberry Pi 4 models):

`vcgencmd bootloader_config`

- Display help:

`vcgencmd --help`
