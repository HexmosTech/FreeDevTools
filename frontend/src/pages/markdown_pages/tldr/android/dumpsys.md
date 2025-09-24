---
title: "Dumpsys - Analyze Android Services | Online Free DevTools by Hexmos"
name: dumpsys
path: /freedevtools/tldr/android/dumpsys
canonical: "https://hexmos.com/freedevtools/tldr/android/dumpsys/"
description: "Analyze Android system services instantly with Dumpsys. Inspect service states, diagnose issues, and gather diagnostic data. Free online tool, no registration required."
category: android
keywords:
  - android dumpsys analysis
  - adb dumpsys command
  - android system service data
  - android debugging tool
  - android performance analysis
  - dumpsys system information
  - android service state inspection
  - dumpsys diagnostics adb shell
  - android system behavior
  - analyze android system services
features:
  - diagnose android system service issues
  - list all available android system services
  - filter diagnostic output by service name
  - exclude specific services from diagnostic output
  - specify a timeout for diagnostic output gathering
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
