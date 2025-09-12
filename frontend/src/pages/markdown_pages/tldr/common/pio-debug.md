---
title: "PIO Debug - Debug PlatformIO Projects | Free DevTools"
name: pio-debug
path: /freedevtools/tldr/common/pio-debug
canonical: "https://hexmos.com/freedevtools/tldr/common/pio-debug/"
description: "Debug projects with PIO Debug. Analyze code, set breakpoints, and step through execution in PlatformIO IDE. Free online tool, no registration required."
category: common
keywords:
- PlatformIO Debugging
- PIO Debugger
- Embedded System Debug
- PlatformIO Project Debug
- GDB Debug PlatformIO
- PlatformIO Debug Configuration
- Embedded Software Debugging
- Cross-Platform Debugging
- PIO Remote Debugging
- PlatformIO Debug Environment
features:
- Debug PlatformIO projects in the current directory
- Debug a specific PlatformIO project by path
- Debug a specific environment within a PlatformIO project
- Debug using a custom project configuration file
- Utilize GDB debugger with specified options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio debug

> Debug PlatformIO projects.
> More information: <https://docs.platformio.org/en/latest/core/userguide/cmd_debug.html>.

- Debug the PlatformIO project in the current directory:

`pio debug`

- Debug a specific PlatformIO project:

`pio debug {{[-d|--project-dir]}} {{path/to/platformio_project}}`

- Debug a specific environment:

`pio debug {{[-e|--environment]}} {{environment}}`

- Debug a PlatformIO project using a specific configuration file:

`pio debug {{[-c|--project-conf]}} {{path/to/platformio.ini}}`

- Debug a PlatformIO project using the `gdb` debugger:

`pio debug --interface {{gdb}} {{gdb_options}}`
