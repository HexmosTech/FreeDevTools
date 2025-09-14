---
title: "Debug Go Code - Delve Go Programs | Free DevTools"
name: dlv
path: /freedevtools/tldr/common/dlv
canonical: "https://hexmos.com/freedevtools/tldr/common/dlv/"
description: "Debug Go code with Delve, a powerful Go language debugger. Inspect variables, set breakpoints, and step through code. Free online tool, no registration required."
category: common
keywords:
- go debugger
- delve debugger
- go debug tool
- debug go programs
- go debugging tutorial
- go delve tutorial
- golang debugger
- linux go debugger
- macos go debugger
- windows go debugger
features:
- Debug Go programs locally
- Connect to remote debugging servers
- Attach to running Go processes
- Trace Go program execution with regular expressions
- Compile and debug Go test binaries
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dlv

> Debugger for the Go programming language.
> More information: <https://github.com/go-delve/delve/blob/master/Documentation/usage/dlv.md>.

- Compile and begin debugging the main package in the current directory (by default, with no arguments):

`dlv debug`

- Compile and begin debugging a specific package:

`dlv debug {{package}} {{arguments}}`

- Compile a test binary and begin debugging the compiled program:

`dlv test`

- Connect to a headless debug server:

`dlv connect {{ip_address}}`

- Attach to a running process and begin debugging:

`dlv attach {{pid}}`

- Compile and begin tracing a program:

`dlv trace {{package}} --regexp '{{regex}}'`
