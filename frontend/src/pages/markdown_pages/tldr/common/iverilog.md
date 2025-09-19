---
title: "Iverilog - Compile Verilog Code | Online Free DevTools by Hexmos"
name: iverilog
path: /freedevtools/tldr/common/iverilog
canonical: "https://hexmos.com/freedevtools/tldr/common/iverilog/"
description: "Compile Verilog code with Iverilog. Simulate and test hardware designs effectively with this Verilog compiler. Free online tool, no registration required."
category: common
keywords:
- Verilog compiler
- Verilog simulator
- IEEE 1364 Verilog
- Hardware description language compilation
- Verilog HDL compiler
- Command-line Verilog tool
- Digital circuit simulation
- Verilog testbench development
- Icarus Verilog
- SystemVerilog compilation
features:
- Compiles Verilog source code into executable programs
- Supports specifying library directories for Verilog modules
- Enables preprocessing of Verilog code
- Allows explicit compilation and runtime execution using VVP
- Provides options for displaying all compilation warnings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# iverilog

> Preprocesses and compiles Verilog HDL (IEEE-1364) code into executable programs for simulation.
> More information: <https://github.com/steveicarus/iverilog>.

- Compile a source file into an executable:

`iverilog {{path/to/source.v}} -o {{path/to/executable}}`

- Compile a source file into an executable while displaying all warnings:

`iverilog {{path/to/source.v}} -Wall -o {{path/to/executable}}`

- Compile and run explicitly using the VVP runtime:

`iverilog -o {{path/to/executable}} -tvvp {{path/to/source.v}}`

- Compile using Verilog library files from a different path:

`iverilog {{path/to/source.v}} -o {{path/to/executable}} -I{{path/to/library_directory}}`

- Preprocess Verilog code without compiling:

`iverilog -E {{path/to/source.v}}`
