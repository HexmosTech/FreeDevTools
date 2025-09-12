---
title: "Logwatch - Summarize Logs | Free DevTools"
name: logwatch
path: /freedevtools/tldr/unknown/logwatch
canonical: "https://hexmos.com/freedevtools/tldr/unknown/logwatch/"
description: "Summarize logs efficiently with Logwatch. Analyze system logs and generate concise reports for security auditing and troubleshooting. Free online tool, no registration required."
category: unknown
keywords:
- log analysis report
- system log summary
- server log monitoring
- logwatch linux
- security log analysis
- audit log report
- apache log analysis
- ssh log monitoring
- pam log analysis
- system log report
features:
- Summarize logs from various services
- Generate reports for specific date ranges
- Filter reports based on selected services
- Analyze logs at different levels of detail
- Identify security-related events in system logs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# logwatch

> Summarizes many different logs for common services (e.g. apache, pam_unix, sshd, etc.) in a single report.
> More information: <https://manned.org/logwatch>.

- Analyze logs for a range of dates at a certain level of detail:

`logwatch --range {{yesterday|today|all|help}} --detail {{low|medium|others}}'`

- Restrict report to only include information for a selected service:

`logwatch --range {{all}} --service {{apache|pam_unix|...}}`
