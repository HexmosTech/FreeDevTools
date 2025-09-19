---
title: "Taskkill - Terminate Processes by ID or Name | Online Free DevTools by Hexmos"
name: taskkill
path: /freedevtools/tldr/windows/taskkill
canonical: "https://hexmos.com/freedevtools/tldr/windows/taskkill/"
description: "Terminate processes easily with Taskkill. Forcefully end unresponsive applications and manage processes by name or ID on Windows. Free online tool, no registration required."
category: windows
keywords:
- windows taskkill
- taskkill command
- process termination windows
- terminate process by id
- terminate process by name
- force kill process
- windows command line process management
- end task command
- windows kill process command
- remote process termination
features:
- Terminate processes by their Process ID (PID)
- Terminate processes by their image name
- Forcefully terminate processes
- Terminate a process and its child processes recursively
- Terminate processes on remote machines
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# taskkill

> Terminate a process by its process ID or name.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/taskkill>.

- Terminate a process by its ID:

`taskkill /pid {{process_id}}`

- Terminate a process by its name:

`taskkill /im {{process_name}}`

- Forcefully terminate a specified process:

`taskkill /pid {{process_id}} /f`

- Terminate a process and its child processes:

`taskkill /im {{process_name}} /t`

- Terminate a process on a remote machine:

`taskkill /pid {{process_id}} /s {{remote_name}}`

- Display information about the usage of the command:

`taskkill /?`
