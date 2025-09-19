---
title: "Wait Process - Control Process Execution | Online Free DevTools by Hexmos"
name: wait-process
path: /freedevtools/tldr/windows/wait-process
canonical: "https://hexmos.com/freedevtools/tldr/windows/wait-process/"
description: "Control process execution with Wait-Process. Monitor and wait for process completion in PowerShell. Free online tool, no registration required."
category: windows
keywords:
- process wait windows
- powershell process control
- windows process monitor
- wait process powershell command
- process completion powershell
- windows wait process timeout
- powershell process id
- process name wait windows
- stop process powershell
- powershell background process
features:
- Wait for processes by ID
- Wait for processes by name
- Set a timeout duration for waiting
- Force termination after timeout
- Monitor process completion status
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Wait-Process

> Waits for the processes to be stopped before accepting more input.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/wait-process>.

- Stop a process and wait:

`Stop-Process -Id {{process_id}}; Wait-Process -Id {{process_id}}`

- Wait for processes for a specified time:

`Wait-Process -Name {{process_name}} -Timeout {{30}}`
