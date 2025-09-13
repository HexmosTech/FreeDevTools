---
title: "Delay Execution - Control Delay with usleep | Free DevTools"
name: usleep
path: /freedevtools/tldr/common/usleep
canonical: "https://hexmos.com/freedevtools/tldr/common/usleep/"
description: "Control delay execution with usleep. Microsecond time delay tool for scripts and commands, offering precision timing control. Free online tool, no registration required."
category: common
keywords:
- microsecond delay
- usleep command
- shell script delay
- linux sleep
- posix delay
- time delay control
- precise timing
- execution delay
- command line delay
- script execution control
features:
- Delay execution of shell scripts in microseconds.
- Pause execution of commands with specified timing.
- Control timing for shell scripts.
- Achieve fine-grained control over program execution.
- Integrate with other commands for delayed execution.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# usleep

> Delay execution for a specific interval in microseconds.
> Largely deprecated in favor of `nanosleep`.
> See also: `sleep`, `nanosleep`.
> More information: <https://manned.org/usleep.1>.

- Delay in microseconds:

`usleep {{microseconds}}`

- Execute a specific command after a 500,000 microseconds delay:

`usleep 500000 && {{command}}`
