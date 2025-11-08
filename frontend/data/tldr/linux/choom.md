---
title: "Choom - Control OOM Killer Score | Online Free DevTools by Hexmos"
name: choom
path: "/freedevtools/tldr/linux/choom/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/choom/"
description: "Control process Out-Of-Memory (OOM) killer score with Choom. Adjust and display OOM scores easily on Linux systems. Free online tool, no registration required."
category: linux
keywords:
  - OOM killer control
  - Linux OOM score
  - Adjust OOM score
  - Process memory management
  - OOM killer process
  - Linux memory control
  - Choom memory
  - Linux process management
  - OOM adjust
  - Out-of-memory control
features:
  - Display the current OOM killer score of a specific process
  - Change the adjust OOM killer score of a process
  - Run a command with a specified OOM killer score
  - Adjust the OOM score within the range of -1000 to +1000
  - Target processes by their Process ID (PID)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# choom

> Display and change the adjust out-of-memory killer score.
> More information: <https://manned.org/choom>.

- Display the OOM-killer score of the process with a specific ID:

`choom {{[-p|--pid]}} {{pid}}`

- Change the adjust OOM-killer score of a specific process:

`choom {{[-p|--pid]}} {{pid}} {{[-n|--adjust]}} {{-1000..+1000}}`

- Run a command with a specific adjust OOM-killer score:

`choom {{[-n|--adjust]}} {{-1000..+1000}} {{command}} {{argument1 argument2 ...}}`
