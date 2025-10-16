---
title: "Control Killall - Terminate Processes | Online Free DevTools by Hexmos"
name: killall
path: "/freedevtools/tldr/common/killall/"
canonical: "https://hexmos.com/freedevtools/tldr/common/killall/"
description: "Control processes with Killall. Send signals to terminate processes by name on Linux and macOS. Free online tool, no registration required."
category: common
keywords:
- killall command
- terminate process linux
- kill process macos
- signal process termination
- linux killall utility
- macos killall utility
- process management linux
- process management macos
- command line process termination
- send signal to process
features:
- Terminate processes by name
- Send specific signals to processes
- Interactively confirm process termination
- List available signal names
- Forcefully terminate processes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# killall

> Send kill signal to all instances of a process by name (must be exact name).
> All signals except SIGKILL and SIGSTOP can be intercepted by the process, allowing a clean exit.
> More information: <https://manned.org/killall>.

- Terminate a process using the default SIGTERM (terminate) signal:

`killall {{process_name}}`

- List available signal names (to be used without the 'SIG' prefix):

`killall {{[-l|--list]}}`

- Interactively ask for confirmation before termination:

`killall {{[-i|--interactive]}} {{process_name}}`

- Terminate a process using the SIGINT (interrupt) signal, which is the same signal sent by pressing `<Ctrl c>`:

`killall -INT {{process_name}}`

- Force kill a process:

`killall -KILL {{process_name}}`
