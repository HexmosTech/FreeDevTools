---
title: "Scheme Interpreter - Execute Code | Free DevTools"
name: scheme
path: /freedevtools/tldr/common/scheme
canonical: "https://hexmos.com/freedevtools/tldr/common/scheme/"
description: "Execute Scheme code instantly with Scheme Interpreter. Run scripts, load programs, and evaluate expressions using the command line. Free online tool, no registration required."
category: common
keywords:
- Scheme Interpreter
- Lisp interpreter
- Scheme REPL
- Run Scheme script
- GNU Scheme
- MIT Scheme
- Scheme language
- Scheme programming
- Command-line interpreter
- Interactive Scheme
features:
- Execute Scheme scripts
- Start an interactive Scheme REPL
- Load Scheme programs into the REPL
- Evaluate Scheme expressions directly
- Run Scheme programs in quiet mode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scheme

> MIT Scheme language interpreter and REPL (interactive shell).
> More information: <https://www.gnu.org/software/mit-scheme/documentation/stable/mit-scheme-user.html#Command_002dLine-Options>.

- Start a REPL (interactive shell):

`scheme`

- Run a scheme program (with no REPL output):

`scheme --quiet < {{script.scm}}`

- Load a scheme program into the REPL:

`scheme --load {{script.scm}}`

- Load scheme expressions into the REPL:

`scheme --eval "{{(define foo 'x)}}"`

- Open the REPL in quiet mode:

`scheme --quiet`
