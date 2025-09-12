---
title: "Android Service Manager - Control Services with CMD | Free DevTools"
name: cmd
path: /freedevtools/tldr/android/cmd
canonical: "https://hexmos.com/freedevtools/tldr/android/cmd/"
description: "Control Android system services easily with CMD service manager. List services, invoke methods, and debug system processes. Free online tool, no registration required."
category: android
keywords:
  - android service manager
  - android system service control
  - adb service management
  - inter process communication android
  - android service invocation
  - cmd service interaction
  - android process management
  - android service debugging
  - remote service method calls
  - android system utility
features:
  - list running android services
  - invoke specific android services
  - pass arguments to android services
  - remotely call service methods
  - interact with system services via command line
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
