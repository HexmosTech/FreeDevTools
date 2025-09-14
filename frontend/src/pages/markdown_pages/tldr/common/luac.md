---
title: "Lua Compiler - Generate Bytecode | Free DevTools"
name: luac
path: /freedevtools/tldr/common/luac
canonical: "https://hexmos.com/freedevtools/tldr/common/luac/"
description: "Compile Lua source code into bytecode with Lua Compiler. Optimize your Lua scripts and reduce file size efficiently. Free online tool, no registration required."
category: common
keywords:
- Lua bytecode compiler
- Lua script compiler
- Lua source code compiler
- Lua file converter
- Lua optimization tool
- luac command line
- Lua command
- Lua performance tuning
- Lua development tool
- Common platform compiler
features:
- Compile Lua source files to bytecode format
- Optimize Lua scripts for performance
- Remove debug symbols from compiled bytecode
- Generate platform-independent Lua bytecode
- Reduce Lua file size for faster loading
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# luac

> Lua bytecode compiler.
> More information: <https://www.lua.org/manual/5.4/luac.html>.

- Compile a Lua source file to Lua bytecode:

`luac -o {{byte_code.luac}} {{source.lua}}`

- Do not include debug symbols in the output:

`luac -s -o {{byte_code.luac}} {{source.lua}}`
