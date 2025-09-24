---
title: "MPI Compile - Create MPI Executables | Online Free DevTools by Hexmos"
name: mpicc
path: /freedevtools/tldr/common/mpicc
canonical: "https://hexmos.com/freedevtools/tldr/common/mpicc/"
description: "Create MPI executables effortlessly with mpicc, the Open MPI C wrapper compiler. Compile C code and link object files for parallel computing. Free online tool, no registration required."
category: common
keywords:
- MPI C compiler
- Open MPI compile
- Parallel C code compilation
- C code to executable
- Linux MPI compiler
- macOS MPI compiler
- HPC C compiler
- MPI object file linking
- C wrapper compiler
- MPI C development
features:
- Compile C source code into object files
- Link object files to create MPI executables
- Simplify MPI program development
- Provide a C wrapper for MPI functions
- Build parallel applications
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mpicc

> Open MPI C wrapper compiler.
> More information: <https://www.mpich.org/static/docs/latest/www1/mpicc.html>.

- Compile a source code file into an object file:

`mpicc -c {{path/to/file.c}}`

- Link an object file and make an executable:

`mpicc -o {{executable}} {{path/to/object_file.o}}`

- Compile and link source code in a single command:

`mpicc -o {{executable}} {{path/to/file.c}}`
