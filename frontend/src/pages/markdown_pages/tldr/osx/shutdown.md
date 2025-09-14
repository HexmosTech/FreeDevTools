---
title: "Shutdown - Control System Shutdown & Reboot | Free DevTools"
name: shutdown
path: /freedevtools/tldr/osx/shutdown
canonical: "https://hexmos.com/freedevtools/tldr/osx/shutdown/"
description: "Control system shutdown and reboot with Shutdown command on macOS. Schedule shutdowns, power off, or reboot your system effortlessly. Free online tool, no registration required."
category: osx
keywords:
- macOS shutdown command
- OS X reboot command
- schedule shutdown mac
- power off mac terminal
- macOS terminal commands
- system halt command
- osx shutdown timer
- shutdown command examples
- macOS shutdown options
- command line reboot
features:
- Schedule system shutdown or reboot
- Power off the system immediately
- Reboot the system instantly
- Set a timer for shutdown or reboot
- Control system state via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# shutdown

> Shutdown and reboot the system.
> More information: <https://keith.github.io/xcode-man-pages/shutdown.8.html>.

- Power off (halt) immediately:

`shutdown -h now`

- Sleep immediately:

`shutdown -s now`

- Reboot immediately:

`shutdown -r now`

- Reboot in 5 minutes:

`shutdown -r "+{{5}}"`

- Power off (halt) at 1:00 pm (Uses 24h clock):

`shutdown -h {{1300}}`

- Reboot on May 10th 2042 at 11:30 am (Input format: YYMMDDHHMM):

`shutdown -r {{4205101130}}`
