---
title: "Deno Runtime - Execute JavaScript & TypeScript | Online Free DevTools by Hexmos"
name: deno
path: "/freedevtools/tldr/common/deno/"
canonical: "https://hexmos.com/freedevtools/tldr/common/deno/"
description: "Execute JavaScript and TypeScript code with Deno Runtime. Build secure and self-contained executables. Free online tool, no registration required."
category: common
keywords:
- deno runtime
- javascript runtime
- typescript runtime
- webassembly runtime
- deno cli
- deno repl
- deno tasks
- deno compile
- deno install
- deno permissions
features:
- Execute JavaScript, TypeScript, and WebAssembly code securely.
- Manage dependencies with `npm` or `jsr`.
- Run interactive REPL shell for quick testing.
- Compile scripts into standalone executables.
- Check types, format code, and lint files with ease.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# deno

> A secure runtime for JavaScript, TypeScript, and WebAssembly.
> Includes dependency management using `npm` or `jsr`, and tooling like bench, bundle, doc, and coverage.
> More information: <https://docs.deno.com/runtime/reference/cli>.

- Start a REPL (interactive shell, also known as Read-Eval-Print Loop):

`deno`

- Start a new project named sample and test it:

`deno init sample && cd sample && deno test`

- Run a file securely. It will ask (if needed) to allow net, read, etc:

`deno run {{path/to/file.ts}}`

- Run a file with explicit permissions or allow all (only if you trust the source):

`deno run {{[--allow-env|--allow-net|--allow-write|--allow-all]}} {{jsr:@deno/deployctl}}`

- List and run tasks from `deno.json` or scripts from `package.json`:

`deno task`

- Install dependencies listed in `deno.json` or `package.json` (also lock files):

`deno install`

- Check types, format, and lint (fix if possible):

`deno check && deno fmt && deno lint --fix`

- Compile the script, imported dependencies, and runtime into a self contained executable:

`deno compile {{path/to/file.ts}}`
