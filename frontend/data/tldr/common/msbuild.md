---
title: "MSBuild - Build Visual Studio Projects | Online Free DevTools by Hexmos"
name: msbuild
path: "/freedevtools/tldr/common/msbuild/"
canonical: "https://hexmos.com/freedevtools/tldr/common/msbuild/"
description: "Build Visual Studio projects efficiently with MSBuild. Automate compilation, manage dependencies, and create distributable packages. Free online tool, no registration required."
category: common
keywords:
- Visual Studio project builder
- MSBuild command line tool
- .NET project compilation
- C# project build
- VB.NET project build
- MSBuild automation
- Project dependency management
- Solution build automation
- MSBuild targets and properties
- Windows build tool
features:
- Build Visual Studio solutions from the command line
- Specify targets and properties for customized builds
- Control the build tools version
- Generate detailed build summaries
- Automate project compilation and packaging
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# msbuild

> The Microsoft build tool for Visual Studio project solutions.
> More information: <https://learn.microsoft.com/visualstudio/msbuild>.

- Build the first project file in the current directory:

`msbuild`

- Build a specific project file:

`msbuild {{path/to/project_file}}`

- Specify one or more semicolon-separated targets to build:

`msbuild {{path/to/project_file}} /target:{{targets}}`

- Specify one or more semicolon-separated properties:

`msbuild {{path/to/project_file}} /property:{{name=value}}`

- Specify the build tools version to use:

`msbuild {{path/to/project_file}} /toolsversion:{{version}}`

- Display detailed information at the end of the log about how the project was configured:

`msbuild {{path/to/project_file}} /detailedsummary`

- Display help:

`msbuild /help`
