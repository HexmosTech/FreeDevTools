---
title: "Lebab Modernizer - Transpile JavaScript ES6/ES7 | Online Free DevTools by Hexmos"
name: lebab
path: /freedevtools/tldr/common/lebab
canonical: "https://hexmos.com/freedevtools/tldr/common/lebab/"
description: "Transpile JavaScript with Lebab Modernizer, converting legacy JavaScript code to modern ES6/ES7 syntax. Automate code upgrades. Free online tool, no registration required."
category: common
keywords:
- JavaScript modernizer
- ES6 transpiler
- ES7 transpiler
- JavaScript code converter
- JavaScript syntax upgrade
- Lebab transformations
- JavaScript refactoring
- command line JavaScript tool
- transpilation tool
- JavaScript code migration
features:
- Transpile JavaScript code to ES6/ES7 syntax
- Apply multiple transformations simultaneously
- Transpile a single JavaScript file
- Replace files in-place within a directory
- Display help information about Lebab commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lebab

> A JavaScript modernizer for transpiling code to ES6/ES7.
> Transformations must be provided for all examples.
> More information: <https://github.com/lebab/lebab>.

- Transpile using one or more comma-separated transformations:

`lebab --transform {{transformation1,transformation2,...}}`

- Transpile a file to `stdout`:

`lebab {{path/to/input_file}}`

- Transpile a file to the specified output file:

`lebab {{path/to/input_file}} --out-file {{path/to/output_file}}`

- Replace all `.js` files in-place in the specified directory, glob or file:

`lebab --replace {{directory|glob|file}}`

- Display help:

`lebab --help`
