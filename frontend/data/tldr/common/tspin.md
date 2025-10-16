---
title: "Highlight Log Files - Control Log Output with tspin | Online Free DevTools by Hexmos"
name: tspin
path: "/freedevtools/tldr/common/tspin/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tspin/"
description: "Control log output with tspin, a log file highlighter. Analyze, filter, and debug logs efficiently. Free online tool, no registration required."
category: common
keywords:
- log highlighter
- log file viewer
- less pager
- command line log viewer
- tailspin log
- ansi color log
- linux log viewer
- macos log viewer
- windows log viewer
- real-time log analysis
features:
- Highlight log files for easy analysis
- Filter log output using less-like navigation
- Pipe logs from other commands for real-time monitoring
- Read log files from stdin
- Print highlighted log output to stdout
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tspin

> A log file highlighter based on the `less` pager and basically behaves like any pager.
> More information: <https://github.com/bensadeh/tailspin>.

- Read from file and view in `less`:

`tspin {{path/to/application.log}}`

- Read from another command and print to stdout:

`journalctl {{[-b|--boot]}} {{[-f|--follow]}} | tspin`

- Read from file and print to `stdout`:

`tspin {{path/to/application.log}} {{[-p|--print]}}`

- Read from `stdin` and print to `stdout`:

`echo "2021-01-01 12:00:00 [INFO] This is a log message" | tspin`
