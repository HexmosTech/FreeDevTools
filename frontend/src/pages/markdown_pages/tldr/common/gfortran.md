---
title: "Compile Fortran Code - Generate Executables with gfortran | Online Free DevTools by Hexmos"
name: gfortran
path: /freedevtools/tldr/common/gfortran
canonical: "https://hexmos.com/freedevtools/tldr/common/gfortran/"
description: "Compile Fortran code with gfortran. Generate executables and object files using advanced compilation options. Free online tool, no registration required."
category: common
keywords:
- fortran compiler
- gfortran compiler
- compile fortran code
- gfortran executable
- fortran object file
- gnu fortran
- fortran linux
- fortran macos
- fortran command line
- fortran debugging
features:
- Compile Fortran source files into executable programs
- Generate object files from Fortran source code
- Enable debugging symbols during compilation
- Include external libraries and modules
- Preprocess Fortran source code
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gfortran

> Preprocess and compile Fortran source files, then assemble and link them together.
> More information: <https://gcc.gnu.org/onlinedocs/gfortran/Invoking-GNU-Fortran.html>.

- Compile multiple source files into an executable:

`gfortran {{path/to/source1.f90 path/to/source2.f90 ...}} -o {{path/to/output_executable}}`

- Show common warnings, debug symbols in output, and optimize without affecting debugging:

`gfortran {{path/to/source.f90}} -Wall -g -Og -o {{path/to/output_executable}}`

- Include libraries from a different path:

`gfortran {{path/to/source.f90}} -o {{path/to/output_executable}} -I{{path/to/mod_and_include}} -L{{path/to/library}} -l{{library_name}}`

- Compile source code into Assembler instructions:

`gfortran -S {{path/to/source.f90}}`

- Compile source code into an object file without linking:

`gfortran -c {{path/to/source.f90}}`
