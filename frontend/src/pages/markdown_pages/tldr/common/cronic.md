---
title: "Control Cron Jobs - Prevent Email Overload | Online Free DevTools by Hexmos"
name: cronic
path: /freedevtools/tldr/common/cronic
canonical: "https://hexmos.com/freedevtools/tldr/common/cronic/"
description: "Control cron jobs and prevent excessive email alerts with Cronic. Manage cron output intelligently and suppress irrelevant notifications. Free online tool, no registration required."
category: common
keywords:
- cron job manager
- bash script email suppression
- linux cron wrapper
- cronic email filter
- cron notification control
- scheduled task email management
- command line cron tool
- linux shell scripting
- cron job error handling
- automate email alerts
features:
- Suppress email output from successful cron jobs
- Send email only when a cron job fails
- Wrap any command for cron job execution
- Report errors in a concise email format
- Integrate seamlessly with existing cron setups
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cronic

> Bash script for wrapping cron jobs to prevent excess email sending.
> More information: <https://manned.org/cronic>.

- Call a command and display its output if it returns a non-zero exit code:

`cronic {{command}}`
