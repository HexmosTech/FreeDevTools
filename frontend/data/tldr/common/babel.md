---
title: "Transpile JavaScript - Babel ES6 to ES5 | Online Free DevTools by Hexmos"
name: babel
path: "/freedevtools/tldr/common/babel/"
canonical: "https://hexmos.com/freedevtools/tldr/common/babel/"
description: "Transpile JavaScript code with Babel. Convert ES6/ES7 syntax to ES5 for broader browser compatibility. Free online tool, no registration required."
category: common
keywords:
- JavaScript transpiler
- ES6 to ES5 converter
- Babel transpiler
- JavaScript compiler
- JavaScript syntax converter
- Babel CLI
- Babel ES6
- JavaScript ES5
- JavaScript ES7
- Node.js Babel
features:
- Transpile JavaScript files from ES6/ES7 to ES5 syntax
- Watch files for changes and automatically re-transpile
- Transpile an entire directory of JavaScript files
- Ignore specific files during directory transpilation
- Output minified JavaScript for smaller file sizes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# babel

> A transpiler which converts code from JavaScript ES6/ES7 syntax to ES5 syntax.
> More information: <https://babeljs.io/docs/babel-cli>.

- Transpile a specified input file and output to `stdout`:

`babel {{path/to/file}}`

- Transpile a specified input file and output to a specific file:

`babel {{path/to/input_file}} --out-file {{path/to/output_file}}`

- Transpile the input file every time it is changed:

`babel {{path/to/input_file}} --watch`

- Transpile a whole directory of files:

`babel {{path/to/input_directory}}`

- Ignore specified comma-separated files in a directory:

`babel {{path/to/input_directory}} --ignore {{ignored_file1,ignored_file2,...}}`

- Transpile and output as minified JavaScript:

`babel {{path/to/input_file}} --minified`

- Choose a set of presets for output formatting:

`babel {{path/to/input_file}} --presets {{preset1,preset2,...}}`

- Display help:

`babel --help`
