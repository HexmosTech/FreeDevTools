---
title: "Dotnet - Create .NET Projects | Online Free DevTools by Hexmos"
name: dotnet
path: /freedevtools/tldr/dotnet/dotnet
canonical: "https://hexmos.com/freedevtools/tldr/dotnet/dotnet/"
description: "Create and manage .NET projects with Dotnet. Build, run, and restore NuGet packages easily using this cross-platform tool. Free online tool, no registration required."
category: common
keywords:
- dotnet project
- dotnet restore
- dotnet build
- dotnet run
- dotnet core
- .net sdk
- nuget packages
- csharp project
- fsharp project
- vbnet project
features:
- Initialize new .NET projects from templates
- Restore NuGet package dependencies
- Build .NET projects for execution
- Run packaged .NET applications
- Execute .NET projects from the current directory
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dotnet

> Cross platform .NET tools for .NET Core.
> Some subcommands such as `build` have their own usage documentation.
> More information: <https://learn.microsoft.com/dotnet/core/tools>.

- Initialize a new .NET project:

`dotnet new {{template_short_name}}`

- Restore NuGet packages:

`dotnet restore`

- Build and execute the .NET project in the current directory:

`dotnet run`

- Run a packaged dotnet application (only needs the runtime, the rest of the commands require the .NET Core SDK installed):

`dotnet {{path/to/application.dll}}`
