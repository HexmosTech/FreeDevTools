---
title: "Monop - Inspect .NET Assemblies | Online Free DevTools by Hexmos"
name: monop
path: "/freedevtools/tldr/common/monop/"
canonical: "https://hexmos.com/freedevtools/tldr/common/monop/"
description: "Inspect .NET assemblies with Monop. Analyze types, methods, and dependencies of .NET assemblies. Free online tool, no registration required."
category: common
keywords:
- .NET assembly analyzer
- .NET metadata inspector
- .NET type structure
- .NET method signature
- .NET assembly dependency
- CIL inspector
- .NET reflection tool
- .NET code analysis
- .NET assembly browser
- MSIL disassembler
features:
- Display structure of .NET types and methods
- List types within a .NET assembly
- Show assembly references
- Filter members by declaration
- Show private members
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# monop

> Finds and displays signatures of Types and methods inside .NET assemblies.
> More information: <https://manned.org/monop>.

- Show the structure of a Type built-in of the .NET Framework:

`monop {{System.String}}`

- List the types in an assembly:

`monop -r:{{path/to/assembly.exe}}`

- Show the structure of a Type in a specific assembly:

`monop -r:{{path/to/assembly.dll}} {{Namespace.Path.To.Type}}`

- Only show members defined in the specified Type:

`monop -r:{{path/to/assembly.dll}} {{[-d|--declared-only]}} {{Namespace.Path.To.Type}}`

- Show private members:

`monop -r:{{path/to/assembly.dll}} {{[-p|--private]}} {{Namespace.Path.To.Type}}`

- Hide obsolete members:

`monop -r:{{path/to/assembly.dll}} {{[-f|--filter-obsolete]}} {{Namespace.Path.To.Type}}`

- List the other assemblies that a specified assembly references:

`monop -r:{{path/to/assembly.dll}} --refs`
