---
title: "Add AppxPackage - Install Windows Apps | Free DevTools"
name: add-appxpackage
path: /freedevtools/tldr/windows/add-appxpackage
canonical: "https://hexmos.com/freedevtools/tldr/windows/add-appxpackage/"
description: "Install AppxPackage apps with this PowerShell command. Deploy Windows apps and manage dependencies easily with Add-AppxPackage. Free online tool, no registration required."
category: windows
keywords:
- appx package installation
- msix package deployment
- windows app installer
- powershell add appxpackage
- app deployment windows
- appx dependency management
- unsigned appx install
- windows app deployment
- msix installer windows
- appx install powershell
features:
- Install AppxPackage and MSIX packages
- Manage app dependencies during installation
- Install apps using AppInstaller files
- Add unsigned packages with bypass
- Deploy Windows apps via PowerShell
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Add-AppxPackage

> A PowerShell utility to add a signed app package (`.appx`, `.msix`, `.appxbundle` and `.msixbundle`) to a user account.
> More information: <https://learn.microsoft.com/powershell/module/appx/Add-AppxPackage>.

- Add an app package:

`Add-AppxPackage -Path {{path\to\package.msix}}`

- Add an app package with dependencies:

`Add-AppxPackage -Path {{path\to\package.msix}} -DependencyPath {{path\to\dependencies.msix}}`

- Install an app using the app installer file:

`Add-AppxPackage -AppInstallerFile {{path\to\app.appinstaller}}`

- Add an unsigned package:

`Add-AppxPackage -Path {{path\to\package.msix}} -DependencyPath {{path\to\dependencies.msix}} -AllowUnsigned`
