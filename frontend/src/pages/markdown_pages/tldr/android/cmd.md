---
title: cmd
name: cmd
path: /freedevtools/tldr/android/cmd
canonical: "https://hexmos.com/freedevtools/tldr/android/cmd/"
description: Android service manager for interacting with system services.
category: android
keywords:
- android service management
- inter-process communication
- system service interaction
- android debugging tool
- service manager control
- android system utility
- accessing android services
- command line service interface
- managing android processes
- troubleshooting android services
features:
- list running android services
- call specific android services
- pass arguments to android services
- interact with system services
- remotely invoke service methods
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cmd

> Android service manager.
> More information: <https://cs.android.com/android/platform/superproject/+/main:frameworks/native/cmds/cmd/>.

- [l]ist all running services:

`cmd -l`

- Call a specific service:

`cmd {{service}}`

- Call a service with specific arguments:

`cmd {{service}} {{argument1 argument2 ...}}`
