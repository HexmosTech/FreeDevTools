---
title: "Remove AppxPackage - Uninstall Windows Apps | Online Free DevTools by Hexmos"
name: remove-appxpackage
path: /freedevtools/tldr/windows/remove-appxpackage
canonical: "https://hexmos.com/freedevtools/tldr/windows/remove-appxpackage/"
description: "Uninstall Windows Apps with Remove-AppxPackage.  Quickly remove app packages from user accounts. Free online tool, no registration required."
category: windows
keywords:
- appxpackage remover
- windows app uninstaller
- powershell appxpackage
- remove windows app
- uninstall appx package
- windows app removal
- appx removal powershell
- remove appx package windows
- powershell remove app
- windows appx management
features:
- Remove AppxPackage for specified user
- Remove AppxPackage for all users
- Preserve application data during removal
- Uninstall app packages using PowerShell
- Remove app packages with specific package name
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Remove-AppxPackage

> A PowerShell utility to remove an app package from user accounts.
> More information: <https://learn.microsoft.com/powershell/module/appx/Remove-AppxPackage>.

- Remove an app package:

`Remove-AppxPackage {{package}}`

- Remove an app package for a specific user:

`Remove-AppxPackage {{package}} -User {{username}}`

- Remove an app package for all users:

`Remove-AppxPackage {{package}} -AllUsers`

- Remove an app package but preserve it's app data:

`Remove-AppxPackage {{package}} -PreserveApplicationData`
