---
title: "Add .NET Package - Manage Dependencies | Online Free DevTools by Hexmos"
name: dotnet-add-package
path: /freedevtools/tldr/dotnet/dotnet-add-package
canonical: "https://hexmos.com/freedevtools/tldr/dotnet/dotnet-add-package/"
description: "Add .NET package dependencies easily with dotnet-add-package. Manage NuGet packages, specify versions, and configure sources for efficient .NET development. Free online tool, no registration required."
category: common
keywords:
- .NET package manager
- NuGet package adder
- CSharp dependency installer
- dotnet add package command
- .NET Core package reference
- Visual Studio package tool
- .NET dependency manager
- CLI package installer
- package version specifier
- NuGet source manager
features:
- Add NuGet packages to .NET projects.
- Specify package versions during installation.
- Configure custom NuGet package sources.
- Target specific frameworks for package installation.
- Define a custom directory for restored packages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dotnet add package

> Add or update a .NET package reference in a project file.
> More information: <https://learn.microsoft.com/dotnet/core/tools/dotnet-add-package>.

- Add a package to the project in the current directory:

`dotnet add package {{package}}`

- Add a package to a specific project:

`dotnet add {{path/to/file.csproj}} package {{package}}`

- Add a specific version of a package to the project:

`dotnet add package {{package}} {{[-v|--version]}} {{1.0.0}}`

- Add a package using a specific NuGet source:

`dotnet add package {{package}} {{[-s|--source]}} {{https://api.nuget.org/v3/index.json}}`

- Add a package only when targeting a specific framework:

`dotnet add package {{package}} {{[-f|--framework]}} {{net7.0}}`

- Add and specify the directory where to restore packages (`~/.nuget/packages` by default):

`dotnet add package {{package}} --package-directory {{path/to/directory}}`
