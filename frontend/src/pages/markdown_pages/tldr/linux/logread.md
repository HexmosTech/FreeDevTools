---
title: "Logread - Read System Logs | Online Free DevTools by Hexmos"
name: logread
path: /freedevtools/tldr/linux/logread
canonical: "https://hexmos.com/freedevtools/tldr/linux/logread/"
description: "Read system logs easily with Logread. Analyze and filter system messages for troubleshooting and monitoring. Free online tool, no registration required."
category: linux
keywords:
  - system log reader
  - log message filter
  - openwrt logread
  - linux log analyzer
  - log monitoring tool
  - command line logger
  - network log viewer
  - debug log extractor
  - logread command
  - system event viewer
features:
  - Print the complete system log
  - Filter log messages by keyword or regex
  - Display log messages in real-time
  - Limit the number of log messages displayed
  - Show command usage help
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# logread

> Read the `logd` ring buffer log.
> More information: <https://openwrt.org/docs/guide-user/base-system/log.essentials>.

- Print the log:

`logread`

- Print `n` messages:

`logread -l {{n}}`

- Filter messages by (Keyword/`regex`):

`logread -e {{pattern}}`

- Print log messages as they happen:

`logread -f`

- Display help:

`logread -h`
