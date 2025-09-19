---
title: "Smartctl - Monitor Disk Health & SMART Data | Online Free DevTools by Hexmos"
name: smartctl
path: /freedevtools/tldr/common/smartctl
canonical: "https://hexmos.com/freedevtools/tldr/common/smartctl/"
description: "Monitor disk health with Smartctl, a command-line tool for checking SMART data and running self-tests. Free online tool, no registration required."
category: common
keywords:
- disk health monitoring
- SMART data analysis
- hard drive diagnostics
- SSD health check
- smartctl command line
- storage device test
- disk failure prediction
- linux disk monitoring
- drive health report
- SMART attribute check
features:
- Display SMART health summary of storage devices
- Initiate short or long self-tests on drives
- Report self-test logs for diagnostic information
- Show current and last self-test statuses
- Output exhaustive SMART data attributes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# smartctl

> Monitor disk health including SMART data.
> More information: <https://manned.org/smartctl>.

- Display SMART health summary:

`sudo smartctl {{[-H|--health]}} {{/dev/sdX}}`

- Display device information:

`sudo smartctl {{[-i|--info]}} {{/dev/sdX}}`

- Start a short/long self-test in the background:

`sudo smartctl {{[-t|--test]}} {{short|long}} {{/dev/sdX}}`

- Display the self-test log:

`sudo smartctl {{[-l|--log]}} selftest`

- Display current/last self-test status and other SMART capabilities:

`sudo smartctl {{[-c|--capabilities]}} {{/dev/sdX}}`

- Display exhaustive SMART data:

`sudo smartctl {{[-a|--all]}} {{/dev/sdX}}`
