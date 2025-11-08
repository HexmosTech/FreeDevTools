---
title: "Generate Android Bug Reports - Diagnose System Issues | Online Free DevTools by Hexmos"
name: bugreportz
path: "/freedevtools/tldr/android/bugreportz/"
canonical: "https://hexmos.com/freedevtools/tldr/android/bugreportz/"
description: "Generate zipped Android bug reports with bugreportz. Collect system logs, identify device problems, and resolve Android errors. Free online tool, no registration required."
category: android
keywords:
  - zipped android bug reports
  - android debugging and diagnostics
  - adb shell bug reporting
  - system log data collection
  - device problem reporting
  - zipped bug report generation
  - detailed system state capture
  - android application analysis
  - mobile device issue identification
  - compressed debugging information
features:
  - generate complete zipped bug reports for Android
  - show progress of bug report generation via adb
  - write bug report content to stdout using adb
  - display help information for bugreportz command
  - display the bugreportz version information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bugreportz

> Generate a zipped Android bug report.
> This command can only be used through `adb shell`.
> More information: <https://cs.android.com/android/platform/superproject/+/main:frameworks/native/cmds/bugreportz>.

- Generate a complete zipped bug report of an Android device:

`bugreportz`

- Show the progress of a running `bugreportz` operation:

`bugreportz -p`

- Write the content of an Android bug report to `stdout`:

`bugreportz -s`

- Display help:

`bugreportz -h`

- Display version:

`bugreportz -v`
