---
title: "ABRT-CLI - Report Linux Crashes | Online Free DevTools by Hexmos"
name: abrt-cli
path: /freedevtools/tldr/linux/abrt-cli
canonical: "https://hexmos.com/freedevtools/tldr/linux/abrt-cli/"
description: "Report Linux crashes effortlessly with ABRT-CLI. Analyze crash reports and submit them to bug trackers. Free online tool, no registration required."
category: linux
keywords:
- linux crash reporting
- abrt crash analysis
- bugzilla report linux
- fedora crash reporter
- linux error detection
- command line crash report
- application crash log
- abrt-cli command
- debug report generation
- linux automatic bug reporting
features:
- List detected application problems
- Show detailed information on specific problems
- Remove unwanted crash reports
- Report problems to configured bug trackers
- Monitor log files and trigger actions on errors
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# abrt-cli

> Automatic Bug Reporting Tool for Fedora-based systems.
> Used to detect, analyze, and report application crashes.
> More information: <https://abrt.readthedocs.io/en/latest/usage.html>.

- List detected problems:

`abrt-cli list`

- Show details of a specific problem:

`abrt-cli info {{problem_id}}`

- Remove a crash report:

`abrt-cli remove {{problem_id}}`

- Report a problem to the configured bug tracker (e.g. Bugzilla):

`abrt-cli report {{problem_id}}`

- Monitor a log file and trigger a program when a match is found:

`abrt-watch-log -F {{error_string}} {{/var/log/myapp.log}} {{notify-send "Crash detected"}}`

- Generate a report for debugging manually:

`abrt-cli report {{[-a|--analyze]}} {{problem_id}}`
