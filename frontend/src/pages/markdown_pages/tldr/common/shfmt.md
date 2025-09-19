---
title: "Format Shell Script - shfmt Formatter | Online Free DevTools by Hexmos"
name: shfmt
path: /freedevtools/tldr/common/shfmt
canonical: "https://hexmos.com/freedevtools/tldr/common/shfmt/"
description: "Format shell scripts easily with shfmt. Enhance code readability and enforce consistent style using this powerful shell parser and formatter. Free online tool, no registration required."
category: common
keywords:
- shell script formatter
- shfmt formatter
- shell parser
- shell code beautifier
- bash formatter
- shell script linter
- linux shell script
- macos shell script
- command line formatter
- shell script style guide
features:
- Format shell scripts to a consistent style
- List unformatted shell scripts
- Write formatted output directly to files
- Simplify shell code by removing redundancies
- Parse and interpret shell scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# shfmt

> Shell parser, formatter and interpreter.
> More information: <https://pkg.go.dev/mvdan.cc/sh>.

- Print a formatted version of a shell script:

`shfmt {{path/to/file}}`

- List unformatted files:

`shfmt --list {{path/to/directory}}`

- Write the result to the file instead of printing it to the terminal:

`shfmt --write {{path/to/file}}`

- Simplify the code, removing redundant pieces of syntax (i.e. removing "$" from vars in expressions):

`shfmt --simplify {{path/to/file}}`
