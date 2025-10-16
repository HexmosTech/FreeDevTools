---
title: "Journalctl - Query Systemd Logs | Online Free DevTools by Hexmos"
name: journalctl
path: "/freedevtools/tldr/linux/journalctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/journalctl/"
description: "Query and manage systemd journal logs with journalctl. Filter, view, and delete logs efficiently. Free online tool, no registration required."
category: linux
keywords:
  - systemd log query
  - linux log management
  - journalctl commands
  - systemd journal filter
  - log analysis linux
  - systemd log viewer
  - linux system logs
  - journalctl troubleshooting
  - systemd log cleanup
  - linux journalctl tutorial
features:
  - Filter logs by priority level, unit, PID, or time range.
  - View specific log entries from this boot, or since a specific time.
  - Delete old logs to free up disk space.
  - Follow new log messages in real-time.
  - Analyze logs from specific systemd units or processes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# journalctl

> Query the systemd journal.
> More information: <https://manned.org/journalctl>.

- Show all messages with priority level 3 (errors) from this boot:

`journalctl {{[-b|--boot]}} {{[-p|--priority]}} 3`

- Delete journal logs which are older than 2 days:

`journalctl --vacuum-time 2d`

- Show only the last `n` lines and follow new messages (like `tail -f` for traditional syslog):

`journalctl {{[-n|--lines]}} {{n}} {{[-f|--follow]}}`

- Show all messages by a specific unit:

`journalctl {{[-u|--unit]}} {{unit}}`

- Show logs for a given unit since the last time it started:

`journalctl _SYSTEMD_INVOCATION_ID=$(systemctl show --value --property=InvocationID {{unit}})`

- Filter messages within a time range (either timestamp or placeholders like "yesterday"):

`journalctl {{[-S|--since]}} {{now|today|yesterday|tomorrow}} {{[-U|--until]}} "{{YYYY-MM-DD HH:MM:SS}}"`

- Show all messages by a specific process:

`journalctl _PID={{pid}}`

- Show all messages by a specific executable:

`journalctl {{path/to/executable}}`
