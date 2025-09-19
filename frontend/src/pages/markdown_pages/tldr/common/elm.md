---
title: "Compile Elm Code - Generate JavaScript with Elm Compiler | Online Free DevTools by Hexmos"
name: elm
path: /freedevtools/tldr/common/elm
canonical: "https://hexmos.com/freedevtools/tldr/common/elm/"
description: "Compile Elm code effortlessly with the Elm Compiler. Generate JavaScript files and initialize projects using this free online tool, no registration required."
category: common
keywords:
- elm compiler
- elm to javascript
- elm project generator
- elm interactive shell
- elm package manager
- elm web server
- elm reactor
- elm init
- elm make
- elm repl
features:
- Compile Elm source files to JavaScript
- Initialize new Elm projects with elm.json
- Start an interactive Elm REPL environment
- Run a local web server for Elm development
- Install packages from the Elm package repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# elm

> Compile and run Elm source files.
> More information: <https://elm-lang.org>.

- Initialize an Elm project, generates an elm.json file:

`elm init`

- Start interactive Elm shell:

`elm repl`

- Compile an Elm file, output the result to an `index.html` file:

`elm make {{source}}`

- Compile an Elm file, output the result to a JavaScript file:

`elm make {{source}} --output={{destination}}.js`

- Start local web server that compiles Elm files on page load:

`elm reactor`

- Install Elm package from <https://package.elm-lang.org>:

`elm install {{author}}/{{package}}`
