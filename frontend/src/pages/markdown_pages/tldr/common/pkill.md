---
title: "PKill - Control Processes by Name | Online Free DevTools by Hexmos"
name: pkill
path: /freedevtools/tldr/common/pkill
canonical: "https://hexmos.com/freedevtools/tldr/common/pkill/"
description: "Control processes by name with PKill. Quickly terminate or signal processes using their name or command line. Free online tool, no registration required."
category: common
keywords:
- process killer
- kill process by name
- terminate process
- signal process
- linux pkill
- macos pkill
- command line process control
- process management
- kill command
- process signal
features:
- Kill processes by name
- Terminate processes matching a full command
- Forcefully kill processes
- Send specific signals to processes
- Kill a specific instance of a process
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkill

> Signal process by name.
> Mostly used for stopping processes.
> More information: <https://www.manned.org/pkill>.

- Kill all processes which match:

`pkill "{{process_name}}"`

- Kill all processes which match their full command instead of just the process name:

`pkill {{[-f|--full]}} "{{command_name}}"`

- Force kill matching processes (can't be blocked):

`pkill -9 "{{process_name}}"`

- Send SIGUSR1 signal to processes which match:

`pkill -USR1 "{{process_name}}"`

- Kill the main `firefox` process to close the browser:

`pkill {{[-o|--oldest]}} "{{firefox}}"`
