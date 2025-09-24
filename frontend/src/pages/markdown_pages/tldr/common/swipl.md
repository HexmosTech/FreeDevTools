---
title: "Prolog Interpreter - Execute Prolog Code | Online Free DevTools by Hexmos"
name: swipl
path: /freedevtools/tldr/common/swipl
canonical: "https://hexmos.com/freedevtools/tldr/common/swipl/"
description: "Execute Prolog code with SWI-Prolog Interpreter. Run scripts, display runtime variables, and debug Prolog applications. Free online tool, no registration required."
category: common
keywords:
- prolog interpreter
- swi-prolog
- prolog code execution
- prolog script runner
- interactive prolog shell
- prolog runtime variables
- command-line prolog
- prolog debugging
- prolog environment
- prolog command
features:
- Start an interactive SWI-Prolog session.
- Execute Prolog commands in quiet mode.
- Run Prolog scripts from the command line.
- Dump all SWI-Prolog runtime configuration variables.
- Display the SWI-Prolog version information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# swipl

> SWI-Prolog - A comprehensive free Prolog environment.
> More information: <https://www.swi-prolog.org/pldoc/man?section=cmdline>.

- Start an interactive session:

`swipl`

- Execute a command without showing any output:

`swipl --quiet -t "{{command}}"`

- Execute a script:

`swipl {{path/to/file.pl}}`

- Print all shell configuration variables:

`swipl --dump-runtime-variables`

- Display version:

`swipl --version`
