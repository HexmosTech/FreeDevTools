---
title: "Process ID Finder - Identify Processes | Free DevTools"
name: pidof
path: /freedevtools/tldr/unknown/pidof
canonical: "https://hexmos.com/freedevtools/tldr/unknown/pidof/"
description: "Identify processes with Process ID Finder. Quickly locate process IDs by name and manage running applications. Free online tool, no registration required."
category: unknown
keywords:
- process id finder
- pidof command
- linux process id
- macos process id
- get process id
- find process by name
- process management
- command line process
- shell script process id
- kill process command
features:
- List process IDs by name
- Find a single process ID
- Include scripts in process ID search
- Kill processes by name
- Manage running applications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pidof

> Get the ID of a process using its name.
> More information: <https://manned.org/pidof>.

- List all process IDs with given name:

`pidof {{bash}}`

- List a single process ID with given name:

`pidof -s {{bash}}`

- List process IDs including scripts with given name:

`pidof -x {{script.py}}`

- Kill all processes with given name:

`kill $(pidof {{name}})`
