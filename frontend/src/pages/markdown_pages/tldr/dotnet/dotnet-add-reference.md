---
title: "Add .NET Reference - Manage Project Dependencies | Online Free DevTools by Hexmos"
name: dotnet-add-reference
path: /freedevtools/tldr/dotnet/dotnet-add-reference
canonical: "https://hexmos.com/freedevtools/tldr/dotnet/dotnet-add-reference/"
description: "Add .NET references to projects with dotnet-add-reference. Manage dependencies and build robust applications using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- .NET project reference
- .NET dependency management
- dotnet add reference command
- CSharp project dependencies
- .NET core dependencies
- .NET SDK project references
- project-to-project reference
- dotnet add p2p reference
- Visual Studio project reference
- NuGet package dependencies
features:
- Add references to a .NET project
- Manage project dependencies from the command line
- Add multiple references at once
- Specify target project for reference additions
- Simplify .NET project build process
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dotnet add reference

> Add .NET project-to-project references.
> More information: <https://learn.microsoft.com/dotnet/core/tools/dotnet-add-reference>.

- Add a reference to the project in the current directory:

`dotnet add reference {{path/to/reference.csproj}}`

- Add multiple references to the project in the current directory:

`dotnet add reference {{path/to/reference1.csproj path/to/reference2.csproj ...}}`

- Add a reference to the specific project:

`dotnet add {{path/to/project.csproj}} reference {{path/to/reference.csproj}}`

- Add multiple references to the specific project:

`dotnet add {{path/to/project.csproj}} reference {{path/to/reference1.csproj path/to/reference2.csproj ...}}`
