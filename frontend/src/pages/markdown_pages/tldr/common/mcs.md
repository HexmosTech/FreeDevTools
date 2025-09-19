---
title: "Compile C# Code - Control Compilation with mcs | Online Free DevTools by Hexmos"
name: mcs
path: /freedevtools/tldr/common/mcs
canonical: "https://hexmos.com/freedevtools/tldr/common/mcs/"
description: "Compile C# code quickly with mcs, the Mono C# Compiler. Generate executables, libraries, or modules with ease. Free online tool, no registration required."
category: common
keywords:
- csharp compiler
- csharp code compiler
- mono csharp compiler
- mcs compiler
- dotnet compiler
- executable generator
- library generator
- module generator
- linux csharp compiler
- windows csharp compiler
features:
- Compile multiple C# source files simultaneously
- Specify the output file name for the compiled program
- Target different output types (exe, winexe, library, module)
- Generate .NET executables from C# source code
- Control the compilation process through command-line options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mcs

> Mono C# Compiler.
> More information: <https://manned.org/mcs.1>.

- Compile the specified files:

`mcs {{path/to/input_file1.cs path/to/input_file2.cs ...}}`

- Specify the output program name:

`mcs -out:{{path/to/file.exe}} {{path/to/input_file1.cs path/to/input_file2.cs ...}}`

- Specify the output program type:

`mcs -target:{{exe|winexe|library|module}} {{path/to/input_file1.cs path/to/input_file2.cs ...}}`
