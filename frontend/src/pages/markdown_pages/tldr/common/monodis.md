---
title: "Monodis Disassembler - Analyze CIL Assemblies | Online Free DevTools by Hexmos"
name: monodis
path: /freedevtools/tldr/common/monodis
canonical: "https://hexmos.com/freedevtools/tldr/common/monodis/"
description: "Analyze CIL assemblies with Monodis Disassembler. Inspect .NET bytecode and extract resources. Free online tool, no registration required."
category: common
keywords:
- CIL disassembler
- .NET assembly analyzer
- Mono disassembler
- Assembly metadata viewer
- CIL bytecode inspector
- .NET resource extractor
- Mono assembly tool
- Windows disassembler
- Linux disassembler
- macOS disassembler
features:
- Disassemble .NET assemblies to CIL code
- Extract embedded resources from assemblies
- Display assembly metadata and references
- List methods within an assembly
- Save disassembled output to a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# monodis

> The Mono Common Intermediate Language (CIL) disassembler.
> More information: <https://www.mono-project.com/docs/tools+libraries/tools/monodis/>.

- Disassemble an assembly to textual CIL:

`monodis {{path/to/assembly.exe}}`

- Save the output to a file:

`monodis --output={{path/to/output.il}} {{path/to/assembly.exe}}`

- Show information about an assembly:

`monodis --assembly {{path/to/assembly.dll}}`

- List the references of an assembly:

`monodis --assemblyref {{path/to/assembly.exe}}`

- List all the methods in an assembly:

`monodis --method {{path/to/assembly.exe}}`

- List resources embedded within an assembly:

`monodis --manifest {{path/to/assembly.dll}}`

- Extract all the embedded resources to the current directory:

`monodis --mresources {{path/to/assembly.dll}}`
