---
title: "Android Logcat - Monitor System Logs | Free DevTools"
name: logcat
path: /freedevtools/tldr/android/logcat
canonical: "https://hexmos.com/freedevtools/tldr/android/logcat/"
description: "Monitor system logs with Android Logcat. Analyze application errors and system events in real-time. Free online tool, no registration required."
category: android
keywords:
  - android system logs
  - android debugging tool
  - android error analysis
  - adb logcat
  - android system events
  - android runtime behavior
  - android log message filtering
  - android log analysis
  - android stack trace examination
  - android issue troubleshooting
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
