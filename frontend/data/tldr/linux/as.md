---
title: "Assemble Files - Generate Assembly Code with AS | Online Free DevTools by Hexmos"
name: as
path: "/freedevtools/tldr/linux/as/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/as/"
description: "Assemble files instantly with AS, the GNU assembler. Convert source code into machine-readable assembly language for linking. Free online tool, no registration required."
category: linux
keywords:
- Assembly code generator
- Linux assembler
- GNU as command
- Source code assembler
- Object file creation
- Assembly language tool
- AS compiler linux
- Machine code generation
- Portable assembler
- Executable creation
features:
- Assemble source code into object files
- Control output file naming
- Skip whitespace and comment preprocessing for faster assembly
- Include custom directory paths for include files
- Convert assembly language to machine code
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# as

> Portable GNU assembler.
> Primarily intended to assemble output from `gcc` to be used by `ld`.
> More information: <https://manned.org/as>.

- Assemble a file, writing the output to `a.out`:

`as {{path/to/file.s}}`

- Assemble the output to a given file:

`as {{path/to/file.s}} -o {{path/to/output_file.o}}`

- Generate output faster by skipping whitespace and comment preprocessing. (Should only be used for trusted compilers):

`as -f {{path/to/file.s}}`

- Include a given path to the list of directories to search for files specified in `.include` directives:

`as -I {{path/to/directory}} {{path/to/file.s}}`
