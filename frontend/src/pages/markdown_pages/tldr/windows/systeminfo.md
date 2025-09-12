---
title: "Systeminfo - Display System Information | Free DevTools"
name: systeminfo
path: /freedevtools/tldr/windows/systeminfo
canonical: "https://hexmos.com/freedevtools/tldr/windows/systeminfo/"
description: "Display system information easily with Systeminfo. Analyze Windows configuration and troubleshoot issues. Get detailed OS insights with this free online tool, no registration required."
category: windows
keywords:
- systeminfo windows
- windows system information
- operating system configuration
- system analysis windows
- windows command line tools
- remote system information
- computer configuration details
- server configuration data
- windows server information
- hardware information windows
features:
- Display detailed operating system configuration
- Analyze local and remote system information
- Output system data in multiple formats (table, list, csv)
- Retrieve computer hardware specifications
- Provide insights for troubleshooting system issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systeminfo

> Display operating system configuration for a local or remote machine.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/systeminfo>.

- Display system configuration for the local machine:

`systeminfo`

- Display system configuration in a specified output format:

`systeminfo /fo {{table|list|csv}}`

- Display system configuration for a remote machine:

`systeminfo /s {{remote_name}} /u {{username}} /p {{password}}`

- Display help:

`systeminfo /?`
