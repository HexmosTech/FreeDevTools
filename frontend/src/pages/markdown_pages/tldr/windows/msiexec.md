---
title: "MSIexec - Install Windows Packages | Online Free DevTools by Hexmos"
name: msiexec
path: /freedevtools/tldr/windows/msiexec
canonical: "https://hexmos.com/freedevtools/tldr/windows/msiexec/"
description: "Install Windows packages with MSIexec. Deploy, update, and uninstall applications seamlessly using MSI and MSP files. Free online tool, no registration required."
category: windows
keywords:
- windows package installer
- msi installer windows
- msp installer windows
- windows application deployment
- windows software update
- command line msi install
- command line msp install
- windows install silent
- msiexec command line
- windows installer tool
features:
- Install Windows applications from MSI packages.
- Update Windows applications using MSP patch files.
- Uninstall Windows programs using MSI or MSP files.
- Deploy software from local paths or websites.
- Perform silent installations via command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# msiexec

> Install, update, repair, or uninstall Windows programs using MSI and MSP package files.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/msiexec>.

- Install a program from its MSI package:

`msiexec /package {{path\to\file.msi}}`

- Install a MSI package from a website:

`msiexec /package {{https://example.com/installer.msi}}`

- Install a MSP patch file:

`msiexec /update {{path\to\file.msp}}`

- Uninstall a program or patch using their respective MSI or MSP file:

`msiexec /uninstall {{path\to\file}}`
