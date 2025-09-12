---
title: "Install Module - Manage PowerShell Modules | Free DevTools"
name: install-module
path: /freedevtools/tldr/windows/install-module
canonical: "https://hexmos.com/freedevtools/tldr/windows/install-module/"
description: "Install PowerShell modules easily with Install-Module. Manage versions, repositories, and scopes. Simplify module management with this free online tool, no registration required."
category: windows
keywords:
- powershell module installation
- powershell get install module
- powershell module management
- windows powershell module install
- powershell module repository
- powershell module versioning
- install psmodule windows
- powershell gallery module
- psmodule install scope
- powershell dry run install module
features:
- Install PowerShell modules from various repositories
- Specify minimum and maximum module versions
- Install modules for all or current user scope
- Perform dry runs to preview module installations
- Install specific module versions for compatibility
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Install-Module

> Install PowerShell modules from PowerShell Gallery, NuGet, and other repositories.
> More information: <https://learn.microsoft.com/powershell/module/powershellget/install-module>.

- Install a module, or update it to the latest available version:

`Install-Module {{module}}`

- Install a module with a specific version:

`Install-Module {{module}} -RequiredVersion {{version}}`

- Install a module no earlier than a specific version:

`Install-Module {{module}} -MinimumVersion {{version}}`

- Specify a range of supported versions (inclusive) of the required module:

`Install-Module {{module}} -MinimumVersion {{minimum_version}} -MaximumVersion {{maximum_version}}`

- Install module from a specific repository:

`Install-Module {{module}} -Repository {{repository}}`

- Install module from specific repositories:

`Install-Module {{module}} -Repository {{repository1 , repository2 , ...}}`

- Install the module for all/current user:

`Install-Module {{module}} -Scope {{AllUsers|CurrentUser}}`

- Perform a dry run to determine which modules will be installed, upgraded, or removed through `Install-Module`:

`Install-Module {{module}} -WhatIf`
