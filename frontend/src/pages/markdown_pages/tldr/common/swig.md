---
title: "SWIG - Generate Bindings for Multiple Languages | Online Free DevTools by Hexmos"
name: swig
path: "/freedevtools/tldr/common/swig"
canonical: "https://hexmos.com/freedevtools/tldr/common/swig/"
description: "Generate language bindings with SWIG. Create wrappers for C/C++ code in Python, Java, Go, and more. Free online tool, no registration required."
category: common
keywords:
- C++ bindings generator
- Python wrapper generator
- Java native interface
- Go language bindings
- Ruby extension module
- SWIG interface compiler
- C++ to Python bridge
- C/C++ code generator
- Cross-language binding
- Interface Definition Language
features:
- Generate bindings between C/C++ and Python
- Create wrappers for C/C++ code to interface with Java
- Produce bindings for C/C++ code to be used in Go
- Generate Ruby extension modules from C/C++ code
- Create cross-language interfaces using SWIG directives
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# swig

> Generate bindings between C/C++ code and various high level languages such as JavaScript, Python, C#, and more.
> It uses special `.i` or `.swg` files to generate the bindings (C/C++ with SWIG directives), then outputs a C/C++ file that contains all the wrapper code needed to build an extension module.
> More information: <https://www.swig.org>.

- Generate a binding between C++ and Python:

`swig -c++ -python -o {{path/to/output_wrapper.cpp}} {{path/to/swig_file.i}}`

- Generate a binding between C++ and Go:

`swig -go -cgo -intgosize 64 -c++ {{path/to/swig_file.i}}`

- Generate a binding between C and Java:

`swig -java {{path/to/swig_file.i}}`

- Generate a binding between C and Ruby and prefix the Ruby module with `foo::bar::`:

`swig -ruby -prefix "{{foo::bar::}}" {{path/to/swig_file.i}}`
