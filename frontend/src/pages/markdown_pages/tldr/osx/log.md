---
title: "Log - View System Logs on macOS | Free DevTools"
name: log
path: /freedevtools/tldr/osx/log
canonical: "https://hexmos.com/freedevtools/tldr/osx/log/"
description: "View system logs on macOS with Log. Analyze system activity, troubleshoot issues, and monitor processes using command-line. Free online tool, no registration required."
category: osx
keywords:
- macOS system logs
- macOS log viewer
- macOS command line logging
- macOS system troubleshooting
- macOS log analysis
- macOS process monitoring
- Log stream macOS
- Log show macOS
- Log collect macOS
- macOS syslog
features:
- Stream live system logs
- Filter logs by process ID
- Filter logs by process name
- Export logs to a file
- Collect logs for a specific time period
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# log

> View, export, and configure logging systems.
> More information: <https://keith.github.io/xcode-man-pages/log.1.html>.

- Stream live system logs:

`log stream`

- Stream logs sent to `syslog` from the process with a specific PID:

`log stream --process {{process_id}}`

- Show logs sent to syslog from a process with a specific name:

`log show --predicate "process == '{{process_name}}'"`

- Export all logs to disk for the past hour:

`sudo log collect --last {{1h}} --output {{path/to/file.logarchive}}`
