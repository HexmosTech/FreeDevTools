---
title: "Dotnet Tool - Manage .NET Tools | Free DevTools"
name: dotnet-tool
path: /freedevtools/tldr/common/dotnet-tool
canonical: "https://hexmos.com/freedevtools/tldr/common/dotnet-tool/"
description: "Manage .NET tools quickly with Dotnet Tool. Install, update, and search .NET tools in NuGet using command line. Free online tool, no registration required."
category: common
keywords:
- dotnet tool manager
- dotnet global tools
- nuget package manager
- dotnet cli tools
- dotnet tool installer
- dotnet tool updater
- dotnet tool uninstaller
- dotnet tool lister
- dotnet tool search
- dotnet tool manifest
features:
- Install .NET global and local tools
- Restore tools from local tool manifest
- Update installed .NET tools
- Uninstall .NET tools
- Search for .NET tools in NuGet
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dotnet tool

> Manage .NET tools and search published tools in NuGet.
> More information: <https://learn.microsoft.com/dotnet/core/tools/global-tools>.

- Install a global tool (don't use `--global` for local tools):

`dotnet tool install {{[-g|--global]}} {{dotnetsay}}`

- Install tools defined in the local tool manifest:

`dotnet tool restore`

- Update a specific global tool (don't use `--global` for local tools):

`dotnet tool update {{[-g|--global]}} {{tool_name}}`

- Uninstall a global tool (don't use `--global` for local tools):

`dotnet tool uninstall {{[-g|--global]}} {{tool_name}}`

- List installed global tools (don't use `--global` for local tools):

`dotnet tool list {{[-g|--global]}}`

- Search tools in NuGet:

`dotnet tool search {{search_term}}`

- Display help:

`dotnet tool {{[-h|--help]}}`
