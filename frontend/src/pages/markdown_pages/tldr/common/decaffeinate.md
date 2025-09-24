---
title: "Convert CoffeeScript - Decaffeinate to JavaScript | Online Free DevTools by Hexmos"
name: decaffeinate
path: /freedevtools/tldr/common/decaffeinate
canonical: "https://hexmos.com/freedevtools/tldr/common/decaffeinate/"
description: "Convert CoffeeScript code to modern JavaScript with Decaffeinate. Effortlessly transform CoffeeScript files using command line. Free online tool, no registration required."
category: common
keywords:
- coffeescript to javascript converter
- decaffeinate coffeescript
- js modules converter
- coffeescript compiler
- coffeescript javascript transformation
- coffee to js
- decaffeinate command line
- coffeescript v2 conversion
- javascript export modules
- coffeescript named exports
features:
- Convert CoffeeScript files to JavaScript
- Support CoffeeScript v2 syntax
- Transform require and module.exports to import/export
- Allow named exports during conversion
- Process CoffeeScript using command-line interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# decaffeinate

> Move your CoffeeScript source to modern JavaScript.
> More information: <https://decaffeinate-project.org>.

- Convert a CoffeeScript file to JavaScript:

`decaffeinate {{path/to/file.coffee}}`

- Convert a CoffeeScript v2 file to JavaScript:

`decaffeinate --use-cs2 {{path/to/file.coffee}}`

- Convert require and `module.exports` to import and export:

`decaffeinate --use-js-modules {{path/to/file.coffee}}`

- Convert a CoffeeScript, allowing named exports:

`decaffeinate --loose-js-modules {{path/to/file.coffee}}`
