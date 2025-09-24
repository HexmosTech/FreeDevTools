---
title: "Execute TypeScript - Run TS Directly | Online Free DevTools by Hexmos"
name: ts-node
path: /freedevtools/tldr/common/ts-node
canonical: "https://hexmos.com/freedevtools/tldr/common/ts-node/"
description: "Execute TypeScript code directly with ts-node, bypassing compilation. Run .ts files, evaluate code literals, and transpile TypeScript easily. Free online tool, no registration required."
category: common
keywords:
- TypeScript execution
- ts-node direct run
- TypeScript interpreter
- JavaScript transpilation
- TypeScript REPL
- ts-node compiler bypass
- TypeScript scripting
- Node.js TypeScript
- TypeScript without compilation
- Quick TypeScript prototyping
features:
- Execute TypeScript files without compiling.
- Evaluate TypeScript code snippets directly from the command line.
- Transpile TypeScript files to JavaScript without execution.
- Skip project configuration files when running TypeScript.
- Execute TypeScript code in script mode.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ts-node

> Run TypeScript code directly, without any compiling.
> More information: <https://typestrong.org/ts-node/docs/options>.

- Execute a TypeScript file without compiling (`node` + `tsc`):

`ts-node {{path/to/file.ts}}`

- Execute a TypeScript file without loading `tsconfig.json`:

`ts-node --skipProject {{path/to/file.ts}}`

- Evaluate TypeScript code passed as a literal:

`ts-node {{[-e|--eval]}} '{{console.log("Hello World")}}'`

- Execute a TypeScript file in script mode:

`ts-node --script-mode {{path/to/file.ts}}`

- Transpile a TypeScript file to JavaScript without executing it:

`ts-node {{[-T|--transpileOnly]}} {{path/to/file.ts}}`

- Display help:

`ts-node {{[-h|--help]}}`
