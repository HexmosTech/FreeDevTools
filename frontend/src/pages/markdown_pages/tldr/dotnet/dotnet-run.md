---
title: "Dotnet Run - Execute .NET Projects | Online Free DevTools by Hexmos"
name: dotnet-run
path: /freedevtools/tldr/dotnet/dotnet-run
canonical: "https://hexmos.com/freedevtools/tldr/dotnet/dotnet-run/"
description: "Execute .NET projects effortlessly with Dotnet Run. Run, build, and debug your .NET applications directly from the command line. Free online tool, no registration required."
category: common
keywords:
- dotnet run project
- .net execute application
- dotnet command line runner
- cross-platform dotnet runner
- .net core run command
- dotnet sdk run
- windows dotnet run
- linux dotnet run
- macos dotnet run
- dotnet framework runner
features:
- Run .NET projects without compilation.
- Specify a target framework moniker.
- Execute projects with custom arguments.
- Target specific architectures and operating systems.
- Run a specific project by its project file path.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dotnet run

> Run a .NET application without explicit compile or launch commands.
> More information: <https://learn.microsoft.com/dotnet/core/tools/dotnet-run>.

- Run the project in the current directory:

`dotnet run`

- Run a specific project:

`dotnet run --project {{path/to/file.csproj}}`

- Run the project with specific arguments:

`dotnet run -- {{arg1=foo arg2=bar ...}}`

- Run the project using a target framework moniker:

`dotnet run {{[-f|--framework]}} {{net7.0}}`

- Specify architecture and OS, available since .NET 6 (Don't use `--runtime` with these options):

`dotnet run {{[-a|--arch]}} {{x86|x64|arm|arm64}} --os {{win|win7|osx|linux|ios|android}}`
