---
title: "Guile Interpreter - Run Scheme Code | Online Free DevTools by Hexmos"
name: guile
path: /freedevtools/tldr/common/guile
canonical: "https://hexmos.com/freedevtools/tldr/common/guile/"
description: "Run Scheme code with Guile Interpreter. Execute scripts, expressions, and start interactive shells using command-line options. Free online tool, no registration required."
category: common
keywords:
- scheme interpreter
- guile repl
- gnu guile
- scheme script execution
- guile expression execution
- guile remote repl
- scheme coding
- linux scheme
- macos scheme
- unix scheme interpreter
features:
- Start an interactive Scheme REPL
- Execute Scheme code from a file
- Evaluate Scheme expressions directly
- Listen for remote REPL connections on a port
- Listen for remote REPL connections on a Unix socket
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# guile

> Guile Scheme interpreter.
> More information: <https://www.gnu.org/software/guile/manual/guile.html#Invoking-Guile>.

- Start a REPL (interactive shell):

`guile`

- Execute the script in a given Scheme file:

`guile {{script.scm}}`

- Execute a Scheme expression:

`guile -c "{{expression}}"`

- Listen on a port or a Unix domain socket (the default is port 37146) for remote REPL connections:

`guile --listen={{port_or_socket}}`
