---
title: "Analyze Web Logs - GoAccess Analyzer | Online Free DevTools by Hexmos"
name: goaccess
path: "/freedevtools/tldr/linux/goaccess/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/goaccess/"
description: "Analyze web logs with GoAccess. Gain real-time insights and generate comprehensive reports from web server log files. Free online tool, no registration required."
category: linux
keywords:
  - web log analyzer
  - web log analysis
  - real-time web logs
  - access log analysis
  - apache log analyzer
  - nginx log analyzer
  - iis log analyzer
  - command line log analysis
  - log file analysis
  - server log monitoring
features:
  - Analyze web logs in real-time
  - Generate interactive HTML reports from log data
  - Support custom log formats
  - Analyze logs from standard input
  - Filter and process specific log data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# goaccess

> An open source real-time web log analyzer.
> More information: <https://goaccess.io>.

- Analyze one or more log files in interactive mode:

`goaccess {{path/to/logfile1 path/to/file2 ...}}`

- Use a specific log-format (or pre-defined formats like "combined"):

`goaccess {{path/to/logfile}} --log-format={{format}}`

- Analyze a log from `stdin`:

`tail {{[-f|--follow]}} {{path/to/logfile}} | goaccess -`

- Analyze a log and write it to an HTML file in real-time:

`goaccess {{path/to/logfile}} {{[-o|--output]}} {{path/to/file.html}} --real-time-html`
