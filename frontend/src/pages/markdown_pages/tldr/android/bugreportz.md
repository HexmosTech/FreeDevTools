---
title: bugreportz
name: bugreportz
path: /freedevtools/tldr/android/bugreportz
canonical: "https://hexmos.com/freedevtools/tldr/android/bugreportz/"
description: Generate a zipped Android bug report.
category: android
keywords:
- android debugging and diagnostics
- system log data collection
- device problem reporting
- zipped bug report generation
- detailed system state capture
- android application analysis
- mobile device issue identification
- compressed debugging information
- accessing system internals via adb
- identifying and resolving android errors
features:
- generate complete zipped bug reports
- show progress of bug report generation
- write bug report content to stdout
- display help information
- display the bugreportz version
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
