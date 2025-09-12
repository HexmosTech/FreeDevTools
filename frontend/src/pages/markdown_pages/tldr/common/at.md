---
title: "Schedule Commands - Execute Tasks with At | Free DevTools"
name: at
path: /freedevtools/tldr/common/at
canonical: "https://hexmos.com/freedevtools/tldr/common/at/"
description: "Schedule commands with At. Execute tasks and automate processes on Unix-like systems. Free online tool, no registration required, for simple time-based automation."
category: common
keywords:
- schedule commands
- at command linux
- at command unix
- delayed command execution
- time based automation
- linux at scheduler
- cron alternative
- batch job scheduler
- command line scheduler
- at job management
features:
- Schedule commands for execution at a later time.
- Execute commands from a file at a specified time.
- List and view queued jobs.
- Specify time in various formats (absolute or relative).
- Send command output to user's mail.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# at

> Execute commands once at a later time.
> Results will be sent to the users mail.
> More information: <https://manned.org/at>.

- Create commands interactively and execute them in 5 minutes (press `<Ctrl d>` when done):

`at now + 5 minutes`

- Create commands interactively and execute them at a specific time:

`at {{hh:mm}}`

- Execute a command from `stdin` at 10:00 AM today:

`echo "{{command}}" | at 1000`

- Execute commands from a given file next Tuesday:

`at -f {{path/to/file}} 9:30 PM Tue`

- List all queued jobs for the current user (same as `atq`):

`at -l`

- View a specied job:

`at -c {{job_number}}`
