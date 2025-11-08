---
title: "Control Displays - ddcutil DDC/CI Command | Online Free DevTools by Hexmos"
name: ddcutil
path: "/freedevtools/tldr/linux/ddcutil/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ddcutil/"
description: "Control display settings with ddcutil, a DDC/CI command-line tool.  Adjust brightness, contrast, and more. Free online tool, no registration required."
category: linux
keywords:
  - ddcutil display control
  - ddcci command line
  - monitor settings command
  - linux display settings
  - display brightness control
  - contrast adjustment command
  - screen settings ddc
  - i2c display control
  - monitor configuration tool
  - ddcutil vcp commands
features:
  - Adjust display brightness using DDC/CI.
  - Modify display contrast via command line.
  - Read current display settings.
  - Detect connected displays compatible with ddcutil.
  - Control multiple displays individually.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ddcutil

> Control the settings of connected displays via DDC/CI.
> This command requires the kernel module `i2c-dev` to be loaded.
> See also: `modprobe`.
> More information: <https://www.ddcutil.com>.

- List all compatible displays:

`ddcutil detect`

- Change the brightness (option 0x10) of display 1 to 50%:

`ddcutil {{[-d|--display]}} {{1}} setvcp {{10}} {{50}}`

- Increase the contrast (option 0x12) of display 1 by 5%:

`ddcutil {{[-d|--display]}} {{1}} setvcp {{12}} {{+}} {{5}}`

- Read the settings of display 1:

`ddcutil {{[-d|--display]}} {{1}} getvcp {{ALL}}`
