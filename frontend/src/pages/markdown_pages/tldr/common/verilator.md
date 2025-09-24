---
title: "Verilator - Generate C++ Models | Online Free DevTools by Hexmos"
name: verilator
path: /freedevtools/tldr/common/verilator
canonical: "https://hexmos.com/freedevtools/tldr/common/verilator/"
description: "Generate C++ models with Verilator. Convert Verilog and SystemVerilog HDL designs to executable code. Free online tool, no registration required."
category: common
keywords:
- verilator
- verilog model generator
- systemverilog to c++
- hdl to executable
- verilator linting
- verilator xml output
- verilog compiler
- systemverilog compiler
- linux verilator
- verilator simulator
features:
- Generate C++ or SystemC models from Verilog/SystemVerilog code
- Perform linting and code analysis on HDL designs
- Create XML output describing design hierarchy and data types
- Build executable simulations of hardware designs
- Compile Verilog/SystemVerilog code into optimized C++ code
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# verilator

> Convert Verilog and SystemVerilog hardware description language (HDL) design into a C++ or SystemC model to be executed after compiling.
> More information: <https://veripool.org/guide/latest/>.

- Build a specific C project in the current directory:

`verilator --binary --build-jobs 0 -Wall {{path/to/source.v}}`

- Create a C++ executable in a specific folder:

`verilator --cc --exe --build --build-jobs 0 -Wall {{path/to/source.cpp}} {{path/to/output.v}}`

- Perform linting over a code in the current directory:

`verilator --lint-only -Wall`

- Create XML output about the design (files, modules, instance hierarchy, logic and data types) to feed into other tools:

`verilator --xml-output -Wall {{path/to/output.xml}}`
