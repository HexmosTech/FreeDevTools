---
title: "Kill Process - Terminate Processes with Signals | Online Free DevTools by Hexmos"
name: kill
path: "/freedevtools/tldr/common/kill/"
canonical: "https://hexmos.com/freedevtools/tldr/common/kill/"
description: "Terminate processes with Kill Command. Send signals to manage and stop processes on Linux, macOS, and Unix systems. Free online tool, no registration required."
category: common
keywords:
- process termination signal
- kill process command
- linux process management
- macOS process control
- unix kill signal
- SIGTERM signal process
- SIGHUP process reload
- SIGKILL force kill
- process ID signal
- group ID process signal
features:
- Terminate processes using specified signal IDs
- List available signals for process control
- Send termination signals to a program
- Pause a program with the STOP signal
- Send signals to processes with given group ID
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kill

> Sends a signal to a process, usually related to stopping the process.
> All signals except for SIGKILL and SIGSTOP can be intercepted by the process to perform a clean exit.
> More information: <https://manned.org/kill.1posix>.

- Terminate a program using the default SIGTERM (terminate) signal:

`kill {{process_id}}`

- List available signal names (to be used without the `SIG` prefix):

`kill -l`

- Terminate a program using the SIGHUP (hang up) signal. Many daemons will reload instead of terminating:

`kill -{{1|HUP}} {{process_id}}`

- Terminate a program using the SIGINT (interrupt) signal. This is typically initiated by the user pressing `<Ctrl c>`:

`kill -{{2|INT}} {{process_id}}`

- Signal the operating system to immediately terminate a program (which gets no chance to capture the signal):

`kill -{{9|KILL}} {{process_id}}`

- Signal the operating system to pause a program until a SIGCONT ("continue") signal is received:

`kill -{{17|STOP}} {{process_id}}`

- Send a `SIGUSR1` signal to all processes with the given GID (group id):

`kill -{{SIGUSR1}} -{{group_id}}`
