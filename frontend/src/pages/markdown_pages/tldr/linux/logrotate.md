---
title: "Rotate Logs - Control System Logs with Logrotate | Free DevTools"
name: logrotate
path: /freedevtools/tldr/linux/logrotate
canonical: "https://hexmos.com/freedevtools/tldr/linux/logrotate/"
description: "Control system logs easily with Logrotate. Rotate, compress, and mail logs based on your configuration. Free online tool, no registration required."
category: linux
keywords:
- log rotation
- linux logrotate
- system logs
- log management
- log compression
- log archiving
- logrotate configuration
- linux logs
- log analyzer
- logrotate command
features:
- Manually trigger log rotation with custom configuration files
- Use a specific command to mail log rotation reports
- Run logrotate without using a state file
- Skip state file checks for quicker execution
- Log verbose output for detailed troubleshooting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# logrotate

> Rotates, compresses, and mails system logs.
> More information: <https://manned.org/logrotate>.

- Trigger a run manually:

`logrotate {{path/to/logrotate.conf}} --force`

- Run using a specific command to mail reports:

`logrotate {{path/to/logrotate.conf}} --mail {{/usr/bin/mail_command}}`

- Run without using a state (lock) file:

`logrotate {{path/to/logrotate.conf}} --state /dev/null`

- Run and skip the state (lock) file check:

`logrotate {{path/to/logrotate.conf}} --skip-state-lock`

- Tell `logrotate` to log verbose output into the log file:

`logrotate {{path/to/logrotate.conf}} --log {{path/to/log_file}}`
