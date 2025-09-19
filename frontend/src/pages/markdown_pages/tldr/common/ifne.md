---
title: "Control Command Execution - ifne | Online Free DevTools by Hexmos"
name: ifne
path: /freedevtools/tldr/common/ifne
canonical: "https://hexmos.com/freedevtools/tldr/common/ifne/"
description: "Control command execution with ifne, a utility that executes commands based on stdin emptiness. Streamline shell scripting and automate tasks. Free online tool, no registration required."
category: common
keywords:
- stdin command control
- shell script conditional execution
- command execution trigger
- linux ifne command
- macos ifne command
- command line emptiness check
- pipeline command execution
- automation conditional command
- common commands
- conditional command execution
features:
- Execute a command only if stdin is not empty
- Execute a command only if stdin is empty
- Pass stdin to stdout if the command is not executed
- Control command execution based on stdin
- Simplify shell scripting with conditional execution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ifne

> Run a command depending on the emptyness of `stdin`.
> More information: <https://manned.org/ifne>.

- Run the specified command if and only if `stdin` is not empty:

`ifne {{command options ...}}`

- Run the specified command if and only if `stdin` is empty, otherwise pass `stdin` to `stdout`:

`ifne -n {{command options ...}}`
