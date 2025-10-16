---
title: "WMIC - Control Windows Processes | Online Free DevTools by Hexmos"
name: wmic
path: "/freedevtools/tldr/windows/wmic/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/wmic/"
description: "Control Windows processes with WMIC. Retrieve detailed information, manage running applications, and terminate processes. Free online tool, no registration required."
category: windows
keywords:
- Windows Management Instrumentation Command-line
- Windows process control
- Windows process information
- Windows command line interface
- WMIC process management
- WMIC command examples
- Windows server administration
- Windows task manager alternative
- Command-line process management
- System information tool
features:
- Retrieve detailed process information
- List running processes with various details
- Query processes based on specific criteria
- Terminate running processes by ID
- Access system information via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wmic

> Interactive shell for detailed information about running processes.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/wmic>.

- Fundamental grammar:

`wmic {{alias}} {{where_clause}} {{verb_clause}}`

- Show brief details about the currently running processes:

`wmic process list brief`

- Show full details about the currently running processes:

`wmic process list full`

- Access specific fields such as process name, process ID and parent process ID:

`wmic process get {{name,processid,parentprocessid}}`

- Display information about a specific process:

`wmic process where {{name="example.exe"}} list full`

- Display specific fields for a specific process:

`wmic process where processid={{pid}} get {{name,commandline}}`

- Kill a process:

`wmic process {{pid}} delete`
