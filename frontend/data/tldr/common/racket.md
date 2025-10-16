---
title: "Racket Interpreter - Execute Code | Online Free DevTools by Hexmos"
name: racket
path: "/freedevtools/tldr/common/racket/"
canonical: "https://hexmos.com/freedevtools/tldr/common/racket/"
description: "Execute Racket code snippets rapidly with Racket Interpreter. Run scripts, evaluate expressions, and manage modules seamlessly. Free online tool, no registration required."
category: common
keywords:
- Racket code execution
- Racket script interpreter
- Racket expression evaluator
- Racket REPL shell
- Racket module runner
- Lisp dialect interpreter
- Functional programming Racket
- Scheme language interpreter
- Racket command-line
- Racket language tool
features:
- Execute Racket scripts from the command line
- Evaluate Racket expressions directly
- Start an interactive Racket REPL shell
- Run Racket modules as scripts
- Interpret `typed/racket` hashlang
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# racket

> Racket language interpreter.
> More information: <https://docs.racket-lang.org/reference/running-sa.html#%28part._mz-cmdline%29>.

- Start a REPL (interactive shell):

`racket`

- Execute a Racket script:

`racket {{path/to/script.rkt}}`

- Execute a Racket expression:

`racket {{[-e|--eval]}} "{{expression}}"`

- Run module as a script (terminates option list):

`racket {{[-l|--lib]}} {{module_name}} {{[-m|--main]}} {{arguments}}`

- Start a REPL (interactive shell) for the `typed/racket` hashlang:

`racket -I typed/racket`
