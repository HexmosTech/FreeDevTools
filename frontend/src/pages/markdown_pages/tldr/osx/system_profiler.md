---
title: "Generate System Report - system_profiler | Online Free DevTools by Hexmos"
name: system_profiler
path: /freedevtools/tldr/osx/system_profiler
canonical: "https://hexmos.com/freedevtools/tldr/osx/system_profiler/"
description: "Generate detailed system reports with system_profiler. Retrieve hardware and software configurations, serial numbers, and system overviews on macOS. Free online tool, no registration required."
category: osx
keywords:
- macOS system report
- system configuration generator
- hardware information viewer
- software details retriever
- macOS serial number lookup
- system profiler command
- system diagnostics macOS
- SPX report generator
- system information exporter
- macOS hardware overview
features:
- Generate a detailed system profile report in XML format
- Display a concise hardware overview including model and serial number
- Retrieve software data such as system version and kernel version
- Customize report detail level (mini, basic, full)
- Extract the system serial number from hardware information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# system_profiler

> Report system hardware and software configuration.
> More information: <https://keith.github.io/xcode-man-pages/system_profiler.8.html>.

- Display a report with specific details level (mini [no personal information], basic or full):

`system_profiler -detailLevel {{level}}`

- Display a full system profiler report which can be opened by `System Profiler.app`:

`system_profiler -xml > MyReport.spx`

- Display a hardware overview (Model, CPU, Memory, Serial, etc) and software data (System, Kernel, Name, Uptime, etc):

`system_profiler SPHardwareDataType SPSoftwareDataType`

- Print the system serial number:

`system_profiler SPHardwareDataType|grep "Serial Number (system)" | awk '{ print $4 }'`
