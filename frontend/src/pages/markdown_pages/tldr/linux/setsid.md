---
title: "setsid Command - Control Process Sessions | Online Free DevTools by Hexmos"
name: setsid
path: /freedevtools/tldr/linux/setsid
canonical: "https://hexmos.com/freedevtools/tldr/linux/setsid/"
description: "Control process sessions with the setsid command.  Run programs in new sessions, manage process groups, and control terminal behavior. Free online tool, no registration required."
category: linux
keywords:
  - setsid command
  - process session management
  - linux setsid
  - unix setsid
  - create process session
  - manage process groups
  - setsid terminal control
  - background process linux
  - detach process from terminal
  - setsid command examples
features:
  - Runs programs in a new session independent of the controlling terminal.
  - Discards output and error streams from the child process.
  - Creates a new process group.
  - Allows waiting for the child process to exit and return its exit code.
  - Optionally sets the controlling terminal for the new session.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# setsid

> Run a program in a new session if the calling process is not a process group leader.
> The created session is by default not controlled by the current terminal.
> More information: <https://manned.org/setsid>.

- Run a program in a new session:

`setsid {{program}}`

- Run a program in a new session discarding the resulting output and error:

`setsid {{program}} > /dev/null 2>&1`

- Run a program creating a new process:

`setsid {{[-f|--fork]}} {{program}}`

- Return the exit code of a program as the exit code of setsid when the program exits:

`setsid {{[-w|--wait]}} {{program}}`

- Run a program in a new session setting the current terminal as the controlling terminal:

`setsid {{[-c|--ctty]}} {{program}}`
