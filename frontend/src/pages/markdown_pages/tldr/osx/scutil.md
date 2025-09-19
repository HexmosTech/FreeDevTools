---
title: "SCUTIL - Control System Configuration | Online Free DevTools by Hexmos"
name: scutil
path: /freedevtools/tldr/osx/scutil
canonical: "https://hexmos.com/freedevtools/tldr/osx/scutil/"
description: "Control system configuration parameters with SCUTIL. Manage network settings, computer names, and hostnames on macOS. Free online tool, no registration required."
category: osx
keywords:
- osx system configuration
- macos network settings
- scutil command line
- computer name management
- hostname configuration
- dns configuration mac
- proxy settings osx
- macos configuration tool
- system settings editor
- network diagnostics mac
features:
- Display DNS configuration settings
- Display proxy configuration details
- Get current computer name
- Set or change computer name
- Get or set hostname for macOS
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scutil

> Manage system configuration parameters.
> Require root privileges when setting configuration.
> More information: <https://keith.github.io/xcode-man-pages/scutil.8.html>.

- Display DNS Configuration:

`scutil --dns`

- Display proxy configuration:

`scutil --proxy`

- Get computer name:

`scutil --get ComputerName`

- Set computer name:

`sudo scutil --set ComputerName {{computer_name}}`

- Get hostname:

`scutil --get HostName`

- Set hostname:

`scutil --set HostName {{hostname}}`
