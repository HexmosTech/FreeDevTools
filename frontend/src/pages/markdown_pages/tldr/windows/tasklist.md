---
title: "Process List - Display Processes with Tasklist | Online Free DevTools by Hexmos"
name: tasklist
path: /freedevtools/tldr/windows/tasklist
canonical: "https://hexmos.com/freedevtools/tldr/windows/tasklist/"
description: "Display processes with Tasklist. Monitor running applications and services on Windows. Free online tool, no registration required."
category: windows
keywords:
- process list command
- tasklist windows
- windows process manager
- command line task manager
- running processes windows
- windows service list
- process monitoring command
- tasklist remote
- tasklist command parameters
- windows task management
features:
- Display a list of currently running processes
- Filter processes by module or executable name
- View processes on remote machines
- Show services associated with each process
- Output process information in different formats (table, list, CSV)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tasklist

> Display a list of currently running processes on a local or remote machine.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/tasklist>.

- Display currently running processes:

`tasklist`

- Display running processes in a specified output format:

`tasklist /fo {{table|list|csv}}`

- Display running processes using the specified `.exe` or `.dll` file name:

`tasklist /m {{module_pattern}}`

- Display processes running on a remote machine:

`tasklist /s {{remote_name}} /u {{username}} /p {{password}}`

- Display services using each process:

`tasklist /svc`
