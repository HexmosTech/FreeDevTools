---
title: "Trace Exec Calls - Control Process Execution | Free DevTools"
name: extrace
path: /freedevtools/tldr/linux/extrace
canonical: "https://hexmos.com/freedevtools/tldr/linux/extrace/"
description: "Control process execution with extrace, a powerful command-line tool for tracing exec() calls.  Monitor system activity and debug applications easily. Free online tool, no registration required."
category: linux
keywords:
  - process tracing command
  - linux process monitoring
  - system call tracing
  - exec trace command
  - command-line process monitor
  - trace execution linux
  - debug process execution
  - program execution tracer
  - system activity monitoring
  - command execution analysis
features:
  - Trace all program executions on the system.
  - Trace descendants of a specific command.
  - Display the working directory of each process.
  - Resolve the full path of each executable.
  - Show the user running each process.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# extrace

> Trace exec() calls.
> More information: <https://github.com/chneukirchen/extrace>.

- Trace all program executions occurring on the system:

`sudo extrace`

- Run a command and only trace descendants of this command:

`sudo extrace {{command}}`

- Print the current working [d]irectory of each process:

`sudo extrace -d`

- Resolve the full path of each executable:

`sudo extrace -l`

- Display the [u]ser running each process:

`sudo extrace -u`
