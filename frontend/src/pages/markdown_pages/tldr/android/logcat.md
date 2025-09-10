---
title: logcat
name: logcat
path: /freedevtools/tldr/android/logcat
canonical: "https://hexmos.com/freedevtools/tldr/android/logcat/"
description: Dump a log of system messages, including stack traces and information messages.
category: android
keywords:
- android system logging
- debugging android applications
- analyzing application errors
- monitoring system events
- inspecting runtime behavior
- filtering log messages
- writing logs to file
- displaying specific process logs
- examining stack traces
- troubleshooting android issues
features:
- display system logs in real-time
- write log output to a file
- filter logs using regular expressions
- display logs for a specific process ID
- display logs for a specific package
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# logcat

> Dump a log of system messages, including stack traces when an error occurred, and information messages logged by applications.
> More information: <https://developer.android.com/tools/logcat>.

- Display system logs:

`logcat`

- Write system logs to a [f]ile:

`logcat -f {{path/to/file}}`

- Display lines that match a `regex`:

`logcat --regex {{regex}}`

- Display logs for a specific PID:

`logcat --pid {{pid}}`

- Display logs for the process of a specific package:

`logcat --pid $(pidof -s {{package}})`
