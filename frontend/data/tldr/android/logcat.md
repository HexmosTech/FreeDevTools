---
title: "Android Logcat - Monitor System Logs | Online Free DevTools by Hexmos"
name: logcat
path: "/freedevtools/tldr/android/logcat/"
canonical: "https://hexmos.com/freedevtools/tldr/android/logcat/"
description: "Monitor Android system logs with Logcat. Analyze application errors and system events in real-time for faster debugging. Free online tool, no registration required."
category: android
keywords:
  - android system logs
  - android debugging tool
  - android error analysis
  - adb logcat debugging
  - android system events monitoring
  - android runtime behavior analysis
  - android log message filtering
  - android log analysis toolkit
  - android stack trace examination
  - android issue troubleshooting
features:
  - display system logs in real-time
  - write log output to a file
  - filter logs using regular expressions
  - display logs for a specific process ID
  - display logs for a specific package
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
