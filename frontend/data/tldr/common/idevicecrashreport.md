---
title: "Generate iOS Crash Reports - idevicecrashreport | Online Free DevTools by Hexmos"
name: idevicecrashreport
path: "/freedevtools/tldr/common/idevicecrashreport/"
canonical: "https://hexmos.com/freedevtools/tldr/common/idevicecrashreport/"
description: "Generate iOS crash reports with idevicecrashreport. Retrieve and extract crash logs from connected iOS devices. Free online tool, no registration required."
category: common
keywords:
- iOS crash reports
- iPhone crash logs
- idevice crash reports
- iOS debugging
- Mobile crash analysis
- iOS device logs
- Crash report extraction
- iOS diagnostic reports
- idevice diagnostics
- Mobile crash troubleshooting
features:
- Retrieve crash reports from connected iOS devices
- Extract crash reports into separate .crash files
- Save crash reports to a specified directory
- Retain crash reports on the device after retrieval
- Debug iOS applications using crash reports
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# idevicecrashreport

> Retrieve crash reports from an iOS device.
> More information: <https://manned.org/idevicecrashreport>.

- Retrieve crash reports and move them to a specified directory:

`idevicecrashreport {{path/to/directory}}`

- Retrieve crash reports without removing them from the device:

`idevicecrashreport --keep {{path/to/directory}}`

- Extract crash reports into separate `.crash` files:

`idevicecrashreport --extract {{path/to/directory}}`
