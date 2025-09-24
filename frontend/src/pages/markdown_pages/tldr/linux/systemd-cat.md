---
title: "Systemd-cat - Capture System Output | Online Free DevTools by Hexmos"
name: systemd-cat
path: /freedevtools/tldr/linux/systemd-cat
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-cat/"
description: "Capture system output with systemd-cat to the systemd journal. Log program output and pipeline streams efficiently for centralized logging. Free online tool, no registration required."
category: linux
keywords:
- systemd journal log
- systemd cat output
- linux system logging
- command output to journal
- pipeline output to journal
- systemd-cat linux
- systemd logging
- systemd-cat command
- centralized logging linux
- application output logging
features:
- Capture stdout and stderr of commands
- Integrate pipeline output into systemd journal
- Assign custom identifiers to logged messages
- Specify default priority levels for messages
- Differentiate priority between stdout and stderr
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-cat

> Connect a pipeline or program's output streams with the systemd journal.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-cat.html>.

- Write the output of the specified command to the journal (both output streams are captured):

`systemd-cat {{command}}`

- Write the output of a pipeline to the journal (`stderr` stays connected to the terminal):

`{{command}} | systemd-cat`

- Use the specified identifier (default: `cat` when reading from a pipeline, executable name otherwise):

`{{command}} | systemd-cat {{[-t|--identifier]}} {{id}}`

- Use the specified default priority level for all logged messages:

`systemd-cat {{[-p|--priority]}} {{emerg|alert|crit|err|warning|notice|info|debug}} {{command}}`

- Use the specified default priority level for the logged messages from the command's `stderr`:

`systemd-cat --stderr-priority {{emerg|alert|crit|err|warning|notice|info|debug}} {{command}}`
