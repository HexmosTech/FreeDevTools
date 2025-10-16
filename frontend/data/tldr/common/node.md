---
title: "Node - Run JavaScript Server-Side | Online Free DevTools by Hexmos"
name: node
path: "/freedevtools/tldr/common/node/"
canonical: "https://hexmos.com/freedevtools/tldr/common/node/"
description: "Run JavaScript server-side with Node. Execute JavaScript files, start REPL shells, and evaluate code. Free online tool, no registration required."
category: common
keywords:
- javascript runtime
- node.js executor
- server-side javascript
- node repl
- node debug
- javascript interpreter
- node watch
- node cli
- node versions
- javascript eval
features:
- Execute JavaScript files from the command line
- Start an interactive JavaScript REPL shell
- Automatically restart processes when imported files change (using --watch)
- Evaluate JavaScript code directly from the command line
- Print Node.js dependencies versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# node

> Server-side JavaScript platform (Node.js).
> More information: <https://nodejs.org>.

- Run a JavaScript file:

`node {{path/to/file}}`

- Start a REPL (interactive shell):

`node`

- Execute the specified file restarting the process when an imported file is changed (requires Node.js version 18.11+):

`node --watch {{path/to/file}}`

- Evaluate JavaScript code by passing it as an argument:

`node {{[-e|--eval]}} "{{code}}"`

- Evaluate and print the result, useful to print node's dependencies versions:

`node {{[-p|--print]}} "process.versions"`

- Activate inspector, pausing execution until a debugger is connected once source code is fully parsed:

`node --no-lazy --inspect-brk {{path/to/file}}`
