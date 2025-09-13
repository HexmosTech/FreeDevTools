---
title: "Generate D Code - Compile D Code with GDC | Free DevTools"
name: gdc
path: /freedevtools/tldr/common/gdc
canonical: "https://hexmos.com/freedevtools/tldr/common/gdc/"
description: "Generate D code with GDC compiler. Compile D programming language source code using GCC backend. Free online tool, no registration required."
category: common
keywords:
- D compiler
- GDC compiler
- D code compilation
- GCC backend D
- D language
- Compile D
- D executable
- D documentation generation
- D interface files
- D module dependencies
features:
- Create executable files from D source code
- Print information about module dependencies
- Generate Ddoc documentation for projects
- Generate D interface files for module definitions
- Compile without standard GCC libraries
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gdc

> D compiler using GCC as a backend.
> More information: <https://wiki.dlang.org/Using_GDC>.

- Create an executable:

`gdc {{path/to/source.d}} -o {{path/to/output_executable}}`

- Print information about module dependencies:

`gdc -fdeps`

- Generate Ddoc documentation:

`gdc -fdoc`

- Generate D interface files:

`gdc -fintfc`

- Do not link the standard GCC libraries in the compilation:

`gdc -nostdlib`
