---
title: dumpsys
name: dumpsys
path: /freedevtools/tldr/android/dumpsys
canonical: "https://hexmos.com/freedevtools/tldr/android/dumpsys/"
description: Get information about Android system services.
category: android
keywords:
- android system diagnostics
- android service information
- debugging android applications
- android system service analysis
- android performance monitoring
- analyzing android system behavior
- inspecting android system internals
- gathering android system data
- troubleshooting android issues
- examining android service states
features:
- diagnose android system services
- list available android services
- filter diagnostic output by service
- specify timeout for diagnostic output
- exclude services from diagnostic output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dumpsys

> Get information about Android system services.
> This command can only be used through `adb shell`.
> More information: <https://developer.android.com/tools/dumpsys>.

- Get diagnostic output for all system services:

`dumpsys`

- Get diagnostic output for a specific system service:

`dumpsys {{service}}`

- List all services `dumpsys` can give information about:

`dumpsys -l`

- List service-specific arguments for a service:

`dumpsys {{service}} -h`

- Exclude a specific service from the diagnostic output:

`dumpsys --skip {{service}}`

- Specify a [t]imeout period in seconds (defaults to 10s):

`dumpsys -t {{8}}`
