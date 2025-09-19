---
title: "Define Function - Create Shell Functions | Online Free DevTools by Hexmos"
name: function
path: "/freedevtools/tldr/common/function"
canonical: "https://hexmos.com/freedevtools/tldr/common/function/"
description: "Define functions with Bash Function. Create and manage reusable shell commands quickly using shell script. Free online tool, no registration required."
category: common
keywords:
- bash function definition
- shell script function
- command line function
- define bash function linux
- create shell function macos
- bash function example
- shell function tutorial
- function syntax bash
- linux shell functions
- bash function variables
features:
- Define functions with specified names and content.
- Execute defined functions directly from the command line.
- Define functions using alternative syntax without the 'function' keyword.
- Display detailed help information for the function command.
- Create reusable blocks of shell code.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# function

> Define a function.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#Shell-Functions>.

- Define a function with the specified name:

`function {{func_name}} { {{echo "Function contents here"}}; }`

- Run a function named `func_name`:

`func_name`

- Define a function without the `function` keyword:

`{{func_name}}() { {{echo "Function contents here"}}; }`

- Display help:

`help function`
