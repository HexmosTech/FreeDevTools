---
title: "Generate Ada Code - gnatprep Preprocessor | Online Free DevTools by Hexmos"
name: gnatprep
path: /freedevtools/tldr/common/gnatprep
canonical: "https://hexmos.com/freedevtools/tldr/common/gnatprep/"
description: "Generate Ada code with gnatprep, the GNAT preprocessor. Define symbols and values for conditional compilation of Ada source. Free online tool, no registration required."
category: common
keywords:
- ada preprocessor
- gnat preprocessor
- ada code generation
- gnat code generation
- ada conditional compilation
- gnat conditional compilation
- ada symbol definition
- gnat symbol definition
- ada source preprocessing
- gnat source preprocessing
features:
- Preprocess Ada source code files
- Define symbols from external files
- Specify symbol values on the command line
- Control conditional compilation of Ada code
- Generate modified Ada source code
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gnatprep

> Preprocessor for Ada source code files (part of the GNAT toolchain).
> More information: <https://gcc.gnu.org/onlinedocs/gnat_ugn/Preprocessing-with-gnatprep.html>.

- Use symbol definitions from a file:

`gnatprep {{source_file}} {{target_file}} {{definitions_file}}`

- Specify symbol values in the command-line:

`gnatprep -D{{name}}={{value}} {{source_file}} {{target_file}}`
