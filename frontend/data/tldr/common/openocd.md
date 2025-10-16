---
title: "OpenOCD Debug - Program Embedded Systems | Online Free DevTools by Hexmos"
name: openocd
path: "/freedevtools/tldr/common/openocd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/openocd/"
description: "Debug embedded systems with OpenOCD. Program microcontrollers, flash memory, and control JTAG interfaces via command line. Free online tool, no registration required."
category: common
keywords:
- embedded system debugging
- microcontroller programming
- JTAG interface control
- OpenOCD configuration file
- ARM core debugging
- Flash memory programming
- GDB debugging OpenOCD
- OpenOCD command execution
- embedded system development
- open source debugging tool
features:
- Debug embedded systems using JTAG
- Program flash memory on microcontrollers
- Control JTAG interface communication
- Execute commands on OpenOCD server startup
- Attach GDB for source-level debugging
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openocd

> Debug and program embedded systems with OpenOCD.
> More information: <https://manned.org/openocd>.

- Attach OpenOCD session to a board with a configuration file:

`openocd {{[-f|--file]}} {{config_file.cfg}}`

- Attach OpenOCD session to a board with multiple configuration files:

`openocd {{[-f|--file]}} {{config_file1.cfg}} {{[-f|--file]}} {{config_file2.cfg}}`

- Attach OpenOCD session to a board with configuration files and a list of commands to be executed on server startup:

`openocd {{[-f|--file]}} {{config_file.cfg}} {{[-c|--command]}} "{{command}}"`

- Use configuration files in the specified path:

`openocd {{[-s|--search]}} {{path/to/search}} {{[-f|--file]}} {{config_file.cfg}}`

- After OpenOCD startup, connect GDB to OpenOCD default port 3333:

`target extended-remote localhost`

- List site-wide script library:

`ls /usr/local/share/openocd/scripts`
