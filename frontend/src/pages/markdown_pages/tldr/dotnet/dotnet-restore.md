---
title: "Dotnet Restore - Restore .NET Dependencies | Online Free DevTools by Hexmos"
name: dotnet-restore
path: /freedevtools/tldr/dotnet/dotnet-restore
canonical: "https://hexmos.com/freedevtools/tldr/dotnet/dotnet-restore/"
description: "Restore .NET project dependencies with Dotnet Restore. Manage package sources and control verbosity levels for efficient builds. Free online tool, no registration required."
category: common
keywords:
- dotnet restore dependencies
- .net package manager
- nuget restore command
- dotnet build restore
- cross-platform dependencies
- .net core restore
- csharp restore
- vb.net restore
- msbuild restore
- dotnet sdk restore
features:
- Restore dependencies for .NET projects
- Restore dependencies for .NET solutions
- Specify project or solution path
- Ignore failed package sources
- Control verbosity level during restoration
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dotnet restore

> Restores the dependencies and tools of a .NET project.
> More information: <https://learn.microsoft.com/dotnet/core/tools/dotnet-restore>.

- Restore dependencies for a .NET project or solution in the current directory:

`dotnet restore`

- Restore dependencies for a .NET project or solution in a specific location:

`dotnet restore {{path/to/project_or_solution}}`

- Restore dependencies without caching the HTTP requests:

`dotnet restore --no-cache`

- Force all dependencies to be resolved even if the last restore was successful:

`dotnet restore --force`

- Restore dependencies using package source failures as warnings:

`dotnet restore --ignore-failed-sources`

- Restore dependencies with a specific verbosity level:

`dotnet restore {{[-v|--verbosity]}} {{quiet|minimal|normal|detailed|diagnostic}}`
