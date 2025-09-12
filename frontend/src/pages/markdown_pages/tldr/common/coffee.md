---
title: "Compile CoffeeScript - Convert to JavaScript | Free DevTools"
name: coffee
path: "/freedevtools/tldr/common/coffee"
canonical: "https://hexmos.com/freedevtools/tldr/common/coffee/"
description: "Convert CoffeeScript to JavaScript with Coffee. Compile CoffeeScript files directly to JavaScript for seamless integration. Free online tool, no registration required."
category: common
keywords:
- coffeescript compiler
- javascript code generator
- compile coffeescript to js
- coffeescript to javascript
- coffeescript syntax
- command line coffeescript
- coffeescript repl
- coffeescript watch mode
- coffeescript build tool
- coffeescript transpiler
features:
- Compile CoffeeScript files to JavaScript files
- Execute CoffeeScript code directly from the command line
- Start an interactive CoffeeScript REPL session
- Watch for changes in CoffeeScript files and recompile automatically
- Specify an output file for compiled JavaScript code
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# coffee

> Execute CoffeeScript scripts or compiles them into JavaScript.
> More information: <https://coffeescript.org#cli>.

- Run a script:

`coffee {{path/to/file.coffee}}`

- Compile to JavaScript and save to a file with the same name:

`coffee --compile {{path/to/file.coffee}}`

- Compile to JavaScript and save to a given output file:

`coffee --compile {{path/to/file.coffee}} --output {{path/to/file.js}}`

- Start a REPL (interactive shell):

`coffee --interactive`

- Watch script for changes and re-run script:

`coffee --watch {{path/to/file.coffee}}`
