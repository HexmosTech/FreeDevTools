---
title: "Dotnet Build - Compile .NET Applications | Free DevTools"
name: dotnet-build
path: /freedevtools/tldr/dotnet/dotnet-build
canonical: "https://hexmos.com/freedevtools/tldr/dotnet/dotnet-build/"
description: "Compile .NET applications effortlessly with Dotnet Build. Streamline your build process and manage dependencies with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- dotnet build command
- .net application compiler
- .net build tool
- .net core build
- cross platform build
- dotnet build release mode
- dotnet build debug mode
- .net dependency management
- .net command line
- dotnet build runtime
features:
- Compiles .NET projects and solutions from the command line
- Supports building in debug or release configurations
- Allows specifying a custom output directory for the build
- Enables building for specific runtime environments
- Can compile without restoring dependencies for faster builds
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dotnet build

> Builds a .NET application and its dependencies.
> More information: <https://learn.microsoft.com/dotnet/core/tools/dotnet-build>.

- Compile the project or solution in the current directory:

`dotnet build`

- Compile a .NET project or solution in debug mode:

`dotnet build {{path/to/project_or_solution}}`

- Compile in release mode:

`dotnet build {{[-c|--configuration]}} {{Release}}`

- Compile without restoring dependencies:

`dotnet build --no-restore`

- Compile with a specific verbosity level:

`dotnet build {{[-v|--verbosity]}} {{quiet|minimal|normal|detailed|diagnostic}}`

- Compile for a specific runtime:

`dotnet build {{[-r|--runtime]}} {{runtime_identifier}}`

- Specify the output directory:

`dotnet build {{[-o|--output]}} {{path/to/directory}}`
