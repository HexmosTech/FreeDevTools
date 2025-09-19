---
title: "Control OCaml Packages - Link Libraries | Online Free DevTools by Hexmos"
name: ocamlfind
path: /freedevtools/tldr/common/ocamlfind
canonical: "https://hexmos.com/freedevtools/tldr/common/ocamlfind/"
description: "Control OCaml packages effortlessly with ocamlfind. Simplify linking OCaml executables with external libraries for efficient software development. Free online tool, no registration required."
category: common
keywords:
- OCaml package manager
- OCaml library linker
- OCaml findlib
- OCaml build tool
- OCaml compiler linker
- OCaml dependency management
- OCaml cross-compilation
- OCaml bytecode compilation
- OCaml native compilation
- OCaml command-line tools
features:
- Link executables with OCaml packages
- Compile OCaml source files to native binaries
- Compile OCaml source files to bytecode binaries
- Cross-compile OCaml code for different platforms
- Manage OCaml dependencies during compilation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ocamlfind

> The findlib package manager for OCaml.
> Simplifies linking executables with external libraries.
> More information: <https://manned.org/ocamlfind>.

- Compile a source file to a native binary and link with packages:

`ocamlfind ocamlopt -package {{package1,package2,...}} -linkpkg -o {{path/to/executable}} {{path/to/source.ml}}`

- Compile a source file to a bytecode binary and link with packages:

`ocamlfind ocamlc -package {{package1,package2,...}} -linkpkg -o {{path/to/executable}} {{path/to/source.ml}}`

- Cross-compile for a different platform:

`ocamlfind -toolchain {{cross-toolchain}} ocamlopt -o {{path/to/executable}} {{path/to/source.ml}}`
