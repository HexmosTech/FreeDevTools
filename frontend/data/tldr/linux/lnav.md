---
title: "lnav - Analyze Log Files | Online Free DevTools by Hexmos"
name: lnav
path: "/freedevtools/tldr/linux/lnav/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lnav/"
description: "Analyze log files with lnav, an advanced log viewer for Linux. Quickly troubleshoot issues and identify patterns in your logs. Free online tool, no registration required."
category: linux
keywords:
- linux log analysis
- log file viewer
- lnav log analyzer
- syslog analysis linux
- debug log parser
- linux system logs
- command line log tool
- log monitoring linux
- log file management
- advanced log viewer
features:
- Analyze multiple log files simultaneously
- Correlate events across different log files
- Validate log formats and report errors
- View logs from remote hosts via SSH
- Filter and search logs using regular expressions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lnav

> Advanced log file viewer to analyze logs with little to no setup.
> More information: <https://docs.lnav.org/en/latest/cli.html>.

- View logs of a program, specifying log files, directories or URLs:

`lnav {{path/to/log_or_directory|url}}`

- View logs of a specific remote host (SSH passwordless login required):

`lnav {{ssh}} {{user}}@{{host1.example.com}}:{{/var/log/syslog.log}}`

- Validate the format of log files against the configuration and report any errors:

`lnav -C {{path/to/log_directory}}`
