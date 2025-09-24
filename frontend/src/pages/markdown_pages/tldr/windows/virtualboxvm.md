---
title: "VirtualBoxVM - Control Virtual Machines | Online Free DevTools by Hexmos"
name: virtualboxvm
path: /freedevtools/tldr/windows/virtualboxvm
canonical: "https://hexmos.com/freedevtools/tldr/windows/virtualboxvm/"
description: "Control VirtualBox virtual machines with VirtualBoxVM. Start, pause, and debug VMs, and mount ISO images using the command line. Free online tool, no registration required."
category: windows
keywords:
- virtual machine manager
- vm control windows
- virtualbox command line
- windows virtualboxvm
- vm debugging tools
- virtual machine launcher
- iso mounter virtualbox
- virtualbox automation script
- vm pause command
- virtualbox fullscreen mode
features:
- Start virtual machines by name or UUID
- Mount DVD image files to virtual machines
- Start virtual machines in fullscreen mode
- Display command-line debug information
- Start virtual machines in a paused state
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virtualboxvm

> Manage VirtualBox virtual machines.
> More information: <https://www.virtualbox.org>.

- Start a virtual machine:

`virtualboxvm --startvm {{name|uuid}}`

- Start a virtual machine in fullscreen mode:

`virtualboxvm --startvm {{name|uuid}} --fullscreen`

- Mount the specified DVD image file:

`virtualboxvm --startvm {{name|uuid}} --dvd {{path\to\image_file}}`

- Display a command-line window with debug information:

`virtualboxvm --startvm {{name|uuid}} --debug-command-line`

- Start a virtual machine in a paused state:

`virtualboxvm --startvm {{name|uuid}} --start-paused`
