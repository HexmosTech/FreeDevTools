---
title: "Manage Ubuntu Pro Services - Secure and Optimize | Online Free DevTools by Hexmos"
name: pro
path: /freedevtools/tldr/linux/pro
canonical: "https://hexmos.com/freedevtools/tldr/linux/pro/"
description: "Manage Ubuntu Pro services effectively. Enhance system security and optimize performance with Ubuntu Pro command-line tools. Free online tool, no registration required."
category: linux
keywords:
  - Ubuntu Pro management
  - Linux security update
  - Pro attach command
  - Pro status check
  - Pro fix vulnerability
  - Pro security status
  - Unsupported package list
  - Third-party package management
  - Ubuntu Pro command line
  - CVE vulnerability scanner
features:
  - Connect systems to Ubuntu Pro support contracts
  - Display Ubuntu Pro service status
  - Check and fix system vulnerabilities
  - Display the number of unsupported packages
  - List unavailable and third-party packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pro

> Manage Ubuntu Pro services.
> More information: <https://manned.org/ubuntu-advantage.1>.

- Connect your system to the Ubuntu Pro support contract:

`sudo pro attach`

- Display the status of Ubuntu Pro services:

`pro status`

- Check if the system is affected by a specific vulnerability (and apply a fix if possible):

`pro fix {{CVE-number}}`

- Display the number of unsupported packages:

`pro security-status`

- List packages that are no longer available for download:

`pro security-status --unavailable`

- List third-party packages:

`pro security-status --thirdparty`
