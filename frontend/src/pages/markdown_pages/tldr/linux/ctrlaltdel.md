---
title: "Control CtrlAltDel - Manage System Reboot | Online Free DevTools by Hexmos"
name: ctrlaltdel
path: /freedevtools/tldr/linux/ctrlaltdel
canonical: "https://hexmos.com/freedevtools/tldr/linux/ctrlaltdel/"
description: "Control CtrlAltDel behavior on Linux with this tool. Manage system reboots and signal handling for shutdown processes. Free online tool, no registration required."
category: linux
keywords:
- linux ctrlaltdel
- linux reboot manager
- linux system shutdown
- ctrlaltdel configuration
- ctrlaltdel linux command
- linux system control
- ctrlaltdel signal handling
- systemd ctrlaltdel
- linux process management
- ctrlaltdel reboot control
features:
- Configure immediate system reboot
- Initiate graceful system shutdown
- Send SIGINT to PID1 for soft reboot
- Control Ctrl+Alt+Del key combination
- Manage system reboot behavior
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ctrlaltdel

> Utility to control what happens when CTRL+ALT+DEL is pressed.
> More information: <https://manned.org/ctrlaltdel>.

- Get current setting:

`ctrlaltdel`

- Set CTRL+ALT+DEL to reboot immediately, without any preparation:

`sudo ctrlaltdel hard`

- Set CTRL+ALT+DEL to reboot "normally", giving processes a chance to exit first (send SIGINT to PID1):

`sudo ctrlaltdel soft`
