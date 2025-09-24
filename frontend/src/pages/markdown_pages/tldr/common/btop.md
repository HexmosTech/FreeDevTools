---
title: "Monitor Resources with Btop - System Monitoring | Online Free DevTools by Hexmos"
name: btop
path: /freedevtools/tldr/common/btop
canonical: "https://hexmos.com/freedevtools/tldr/common/btop/"
description: "Monitor system resources instantly with Btop. Track CPU, memory, disk, and network usage using a command-line interface. Free online tool, no registration required."
category: common
keywords:
- system resource monitor
- command line resource monitor
- linux system monitor
- process monitoring tool
- cpu usage monitor
- memory usage monitor
- disk i/o monitor
- network traffic monitor
- terminal resource monitor
- btop linux
features:
- Display CPU, memory, disk, and network information
- Monitor processes and their resource usage
- Start with a specified settings preset
- Run in TTY mode with limited color support
- Customize update rate for real-time monitoring
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# btop

> A resource monitor that shows information about the CPU, memory, disks, network and processes.
> A C++ version of `bpytop`.
> More information: <https://github.com/aristocratos/btop>.

- Start `btop`:

`btop`

- Start `btop` with the specified settings preset:

`btop {{[-p|--preset]}} {{0..9}}`

- Start `btop` in TTY mode using 16 colors and TTY-friendly graph symbols:

`btop {{[-t|--tty]}}`

- Start `btop` in 256-color mode instead of 24-bit color mode:

`btop {{[-l|--low-color]}}`

- Set the update rate to 500 milliseconds:

`btop {{[-u|--update]}} 500`

- Exit `btop`:

`<q>`

- Display help:

`btop {{[-h|--help]}}`
