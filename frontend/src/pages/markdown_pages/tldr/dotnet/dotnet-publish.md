---
title: "Publish .NET - Deploy Applications with Dotnet Publish | Free DevTools"
name: dotnet-publish
path: /freedevtools/tldr/dotnet/dotnet-publish
canonical: "https://hexmos.com/freedevtools/tldr/dotnet/dotnet-publish/"
description: "Publish .NET applications easily with Dotnet Publish. Create deployment packages, control runtime environments, and optimize for size. Free online tool, no registration required."
category: common
keywords:
- .NET Application Publish
- Dotnet Deploy
- .NET Core Runtime
- Cross-Platform Compilation
- Single-File Executable
- .NET Project Deployment
- Trimmed Application Publish
- Release Mode Compilation
- Runtime Identifier Specification
- Dotnet Publish Command
features:
- Compiles .NET projects in release or debug mode.
- Publishes applications with or without the .NET Core runtime.
- Creates platform-specific single-file executables.
- Reduces application size by trimming unused libraries.
- Supports specifying custom output directories for published files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dotnet publish

> Publish a .NET application and its dependencies to a directory for deployment to a hosting system.
> More information: <https://learn.microsoft.com/dotnet/core/tools/dotnet-publish>.

- Compile a .NET project in release mode:

`dotnet publish {{[-c|--configuration]}} Release {{path/to/project_file}}`

- Publish the .NET Core runtime with your application for the specified runtime:

`dotnet publish {{[-sc|--self-contained]}} true {{[-r|--runtime]}} {{runtime_identifier}} {{path/to/project_file}}`

- Package the application into a platform-specific single-file executable:

`dotnet publish {{[-r|--runtime]}} {{runtime_identifier}} -p:PublishSingleFile=true {{path/to/project_file}}`

- Trim unused libraries to reduce the deployment size of an application:

`dotnet publish {{[-sc|--self-contained]}} true {{[-r|--runtime]}} {{runtime_identifier}} -p:PublishTrimmed=true {{path/to/project_file}}`

- Compile a .NET project without restoring dependencies:

`dotnet publish --no-restore {{path/to/project_file}}`

- Specify the output directory:

`dotnet publish {{[-o|--output]}} {{path/to/directory}} {{path/to/project_file}}`
