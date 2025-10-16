---
title: "Log Messages - Control System Log with Logger | Online Free DevTools by Hexmos"
name: logger
path: "/freedevtools/tldr/linux/logger/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/logger/"
description: "Control system logs with Logger. Add messages to syslog, filter by priority, and send to remote servers. Free online tool, no registration required."
category: linux
keywords:
  - System Log Message
  - Syslog Message Control
  - Logger Command Linux
  - Syslog Tag Management
  - Remote Syslog Server
  - Command Line Logging
  - Syslog Priority Filter
  - Linux Logger Utility
  - macOS Logger Command
  - Systemd Journal Logger
features:
  - Log messages to syslog from command line
  - Take input from stdin and log to syslog
  - Send log output to a remote syslog server
  - Use a specific tag for logged lines
  - Filter log messages by priority level
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# logger

> Add messages to the system log.
> More information: <https://manned.org/logger>.

- Log a message to syslog:

`logger {{message}}`

- Take input from `stdin` and log to syslog:

`echo {{log_entry}} | logger`

- Send the output to a remote syslog server running at a given port. Default port is 514:

`echo {{log_entry}} | logger {{[-n|--server]}} {{hostname}} {{[-P|--port]}} {{port}}`

- Use a specific tag for every line logged. Default is the name of logged in user:

`echo {{log_entry}} | logger {{[-t|--tag]}} {{tag}}`

- Log messages with a given priority. Default is `user.notice`. See `man logger` for all priority options:

`echo {{log_entry}} | logger {{[-p|--priority]}} {{user.warning}}`
