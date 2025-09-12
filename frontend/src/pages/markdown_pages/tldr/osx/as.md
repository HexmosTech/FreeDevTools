---
title: "Assemble GNU Code - Assemble Files with as | Free DevTools"
name: as
path: /freedevtools/tldr/unknown/as
canonical: "https://hexmos.com/freedevtools/tldr/unknown/as/"
description: "Assemble GNU assembly code with as. Create executable files from assembly source code with this portable GNU assembler. Free online tool, no registration required."
category: unknown
keywords:
- GNU assembler
- assembly code
- executable file generator
- GCC assembler
- linker input
- object file creator
- assembly source
- as command
- command line assembler
- system programming
features:
- Assemble assembly source files into object code
- Generate output files with specified names
- Skip whitespace and comment preprocessing for faster assembly
- Include specified directories in the search path for include files
- Create object files ready for linking with ld
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# as

> Portable GNU assembler.
> Primarily intended to assemble output from `gcc` to be used by `ld`.
> More information: <https://keith.github.io/xcode-man-pages/as.1.html>.

- Assemble a file, writing the output to `a.out`:

`as {{path/to/file.s}}`

- Assemble the output to a given file:

`as {{path/to/file.s}} -o {{path/to/output_file.o}}`

- Generate output faster by skipping whitespace and comment preprocessing. (Should only be used for trusted compilers):

`as -f {{path/to/file.s}}`

- Include a given path to the list of directories to search for files specified in `.include` directives:

`as -I {{path/to/directory}} {{path/to/file.s}}`
