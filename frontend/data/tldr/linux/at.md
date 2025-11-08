---
title: "Schedule Commands - Execute at Specific Times | Online Free DevTools by Hexmos"
name: at
path: "/freedevtools/tldr/linux/at/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/at/"
description: "Schedule command execution with the 'at' command.  Easily run commands at a later time and receive results via email. Free online tool, no registration required."
category: linux
keywords:
  - linux command scheduling
  - unix command scheduling
  - schedule commands linux
  - delayed command execution
  - at command tutorial
  - batch job scheduling
  - linux at command examples
  - systemd atd service
  - automated command execution
  - time-based task scheduling
features:
  - Execute commands at a specified time or date.
  - Receive email notification of command completion.
  - Schedule commands interactively using a simple interface.
  - Run commands from a file for complex scripts.
  - Manage and view scheduled jobs using various command options.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# at

> Execute commands once at a later time.
> Results will be sent to the users mail.
> More information: <https://manned.org/at>.

- Start the `atd` daemon:

`systemctl start atd`

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
