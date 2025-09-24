---
title: "mpremote - Control MicroPython Devices | Online Free DevTools by Hexmos"
name: mpremote
path: /freedevtools/tldr/common/mpremote
canonical: "https://hexmos.com/freedevtools/tldr/common/mpremote/"
description: "Control MicroPython devices remotely with mpremote. Manage connected devices, run scripts, and install packages easily. Free online tool, no registration required."
category: common
keywords:
- MicroPython device control
- mpremote REPL session
- MicroPython script execution
- mpremote file mounting
- MicroPython mip package install
- MicroPython remote control
- serial port communication
- device firmware management
- MicroPython development workflow
- MicroPython command line tool
features:
- Connect to MicroPython devices remotely
- Run scripts on MicroPython devices
- Mount local directories to devices
- Install mip packages on devices
- Open an interactive REPL session
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mpremote

> Remotely control MicroPython devices.
> More information: <https://docs.micropython.org/en/latest/reference/mpremote.html>.

- List all connected MicroPython devices:

`mpremote connect list`

- Open an interactive REPL session with a connected device:

`mpremote connect {{device}}`

- Run a local script on a connected device:

`mpremote run {{path/to/script.py}}`

- Mount a local directory to the device:

`mpremote mount {{path/to/directory}}`

- Install a mip package on the device:

`mpremote mip install {{package}}`
