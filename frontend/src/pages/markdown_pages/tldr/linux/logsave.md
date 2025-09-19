---
title: "Logsave - Save Command Output to Log File | Online Free DevTools by Hexmos"
name: logsave
path: /freedevtools/tldr/linux/logsave
canonical: "https://hexmos.com/freedevtools/tldr/linux/logsave/"
description: "Save command output effortlessly with Logsave. Capture and manage command-line data efficiently. Free online tool, no registration required."
category: linux
keywords:
  - command output capture
  - log file management
  - command logging
  - shell script logging
  - terminal output saving
  - linux command logging
  - bash script logging
  - logsave command example
  - log data persistence
  - command line history
features:
  - Save command output to a specified log file.
  - Append command output to an existing log file.
  - Accept input from stdin for logging.
  - Display verbose output during the logging process.
  - Easily manage and archive command execution data.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# logsave

> Save the output of a command in a logfile.
> More information: <https://manned.org/logsave>.

- Execute command with specified argument(s) and save its output to log file:

`logsave {{path/to/logfile}} {{command}}`

- Take input from `stdin` and save it in a log file:

`logsave {{logfile}} -`

- Append the output to a log file, instead of replacing its current contents:

`logsave -a {{logfile}} {{command}}`

- Show verbose output:

`logsave -v {{logfile}} {{command}}`
