---
title: "hwclock - Control System Time | Online Free DevTools by Hexmos"
name: hwclock
path: /freedevtools/tldr/linux/hwclock
canonical: "https://hexmos.com/freedevtools/tldr/linux/hwclock/"
description: "Manage system time with hwclock, a command-line tool for precise time synchronization.  Read and set hardware and software clocks easily. Free online tool, no registration required."
category: linux
keywords:
  - hardware clock linux
  - system time command
  - hwclock command line
  - linux time synchronization
  - set hardware clock
  - read hardware clock
  - synchronize system time
  - hwclock tutorial
  - manage system clock
  - time setting utility
features:
  - Display the current hardware clock time.
  - Set the hardware clock using the system time.
  - Set the system time using the hardware clock.
  - Useful for system setup and time synchronization.
  - Command-line interface for easy access.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hwclock

> Read or change the hardware clock. Usually requires root.
> More information: <https://manned.org/hwclock>.

- Display the current time as reported by the hardware clock:

`hwclock`

- Write the current software clock time to the hardware clock (sometimes used during system setup):

`hwclock {{[-w|--systohc]}}`

- Write the current hardware clock time to the software clock:

`hwclock {{[-s|--hctosys]}}`
