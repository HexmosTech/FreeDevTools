---
title: "Systemd-run - Execute Transient Units | Online Free DevTools by Hexmos"
name: systemd-run
path: "/freedevtools/tldr/linux/systemd-run/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-run/"
description: "Execute transient systemd units with Systemd-run. Create and manage temporary services, timers, and scopes on Linux systems. Free online tool, no registration required."
category: linux
keywords:
  - systemd-run execute transient units
  - systemd create transient service
  - systemd timer creation
  - systemd scope unit management
  - linux systemd service
  - linux transient service
  - systemd-run command examples
  - systemd transient scope
  - systemd unit configuration
  - systemd service execution
features:
  - Run commands as transient systemd services
  - Schedule commands using systemd timers
  - Create temporary scope units for processes
  - Set environment variables for transient units
  - Execute commands interactively via PTY
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-run

> Run programs in transient scope units, service units, or path-, socket-, or timer-triggered service units.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-run.html>.

- Start a transient service:

`sudo systemd-run {{command}} {{argument1 argument2 ...}}`

- Start a transient service under the service manager of the current user (no privileges):

`systemd-run --user {{command}} {{argument1 argument2 ...}}`

- Start a transient service with a custom unit name and description:

`sudo systemd-run {{[-u|--unit]}} {{name}} --description {{string}} {{command}} {{argument1 argument2 ...}}`

- Start a transient service that does not get cleaned up after it terminates with a custom environment variable:

`sudo systemd-run {{[-r|--remain-after-exit]}} --set-env={{name}}={{value}} {{command}} {{argument1 argument2 ...}}`

- Start a transient timer that periodically runs its transient service (see `man systemd.time` for calendar event format):

`sudo systemd-run --on-calendar={{calendar_event}} {{command}} {{argument1 argument2 ...}}`

- Share the terminal with the program (allowing interactive input/output) and make sure the execution details remain after the program exits:

`systemd-run {{[-r|--remain-after-exit]}} --pty {{command}}`

- Set properties (e.g. CPUQuota, MemoryMax) of the process and wait until it exits:

`systemd-run {{[-p|--property]}} MemoryMax={{memory_in_bytes}} {{[-p|--property]}} CPUQuota={{percentage_of_CPU_time}}% --wait {{command}}`

- Use the program in a shell pipeline:

`{{command1}} | systemd-run {{[-P|--pipe]}} {{command2}} | {{command3}}`
