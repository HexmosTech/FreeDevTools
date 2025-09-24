---
title: "SFDK Device - Control SailfishOS Devices | Online Free DevTools by Hexmos"
name: sfdk-device
path: /freedevtools/tldr/sfdk/sfdk-device
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-device/"
description: "Control SailfishOS devices with SFDK Device. Execute commands, manage registered devices, and run interactive shells for seamless app development. Free online tool, no registration required."
category: common
keywords:
- sfdk device control
- sailfishos device manager
- sfos device execution
- linux device interaction
- command-line device access
- registered device management
- emulator command execution
- terminal device shell
- sfdk device list
- sailfishos application debugging
features:
- List registered SailfishOS devices
- Execute commands on specified devices
- Run interactive shell on remote device
- Manage SailfishOS device connections
- Interact with SailfishOS emulator
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sfdk device

> Maintains and controls registered devices.
> More information: <https://docs.sailfishos.org/Develop/Apps/Tutorials/Building_packages_-_advanced_techniques/#running-the-sample-application-in-the-emulator>.

- Display the registered devices:

`sfdk device list`

- Execute a command on a device by name or index:

`sfdk device exec {{device-name-or-idx}} {{command}}`

- Run an interactive shell on a device by name or index:

`sfdk device exec {{device-name-or-idx}}`
