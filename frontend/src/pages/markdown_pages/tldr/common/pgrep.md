---
title: "Pgrep - Find Processes by Name | Online Free DevTools by Hexmos"
name: pgrep
path: /freedevtools/tldr/common/pgrep
canonical: "https://hexmos.com/freedevtools/tldr/common/pgrep/"
description: "Find processes by name with Pgrep. Quickly locate and signal running programs using command line. Free online tool, no registration required."
category: common
keywords:
- process finder
- signal processes
- command line process management
- linux process search
- macos process search
- pgrep command
- process id lookup
- find processes by user
- match process by command string
- signal running processes
features:
- Find processes by name or command string
- Search for processes including command-line options
- Locate processes run by a specific user
- Return process IDs (PIDs) of matching processes
- Signal processes based on found matches
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pgrep

> Find or signal processes by name.
> More information: <https://www.manned.org/pgrep>.

- Return PIDs of any running processes with a matching command string:

`pgrep {{process_name}}`

- Search for processes including their command-line options:

`pgrep {{[-f|--full]}} "{{process_name}} {{parameter}}"`

- Search for processes run by a specific user:

`pgrep {{[-u|--euid]}} root {{process_name}}`
