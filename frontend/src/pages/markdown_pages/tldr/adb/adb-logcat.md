---
title: "ADB Logcat - Display System Logs | Online Free DevTools by Hexmos"
name: adb-logcat
path: /freedevtools/tldr/adb/adb-logcat
canonical: "https://hexmos.com/freedevtools/tldr/adb/adb-logcat/"
description: "Display system logs with ADB Logcat, filter by tag, PID, or priority. Quickly debug Android applications and devices with advanced filtering options. Free online tool, no registration required."
category: common
keywords:
- adb logcat
- android logcat
- system log viewer
- android debug bridge log
- adb logcat filter
- android log filtering
- linux logcat tool
- macos logcat
- logcat regex filter
- adb logcat pid
features:
- Display system logs in real-time
- Filter logs by tag and priority level
- Display logs for specific processes by PID
- Filter logs using regular expressions
- Color-code logs for easy readability
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# adb logcat

> Dump a log of system messages.
> More information: <https://developer.android.com/tools/logcat>.

- Display system logs:

`adb logcat`

- Display lines that match a `reg[e]x`:

`adb logcat -e {{regex}}`

- Display logs for a tag in a specific mode ([V]erbose, [D]ebug, [I]nfo, [W]arning, [E]rror, [F]atal, [S]ilent), filtering other tags:

`adb logcat {{tag}}:{{mode}} *:S`

- Display logs for React Native applications in [V]erbose mode [S]ilencing other tags:

`adb logcat ReactNative:V ReactNativeJS:V *:S`

- Display logs for all tags with priority level [W]arning and higher:

`adb logcat *:W`

- Display logs for a specific PID:

`adb logcat --pid {{pid}}`

- Display logs for the process of a specific package:

`adb logcat --pid $(adb shell pidof -s {{package}})`

- Color the log (usually use with filters):

`adb logcat -v color`
