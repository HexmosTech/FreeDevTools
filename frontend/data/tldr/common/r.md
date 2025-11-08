---
title: "Run R Scripts - Execute R Language Programs | Online Free DevTools by Hexmos"
name: r
path: "/freedevtools/tldr/common/r/"
canonical: "https://hexmos.com/freedevtools/tldr/common/r/"
description: "Run R scripts effortlessly with this R interpreter tool. Execute R code, debug programs, and manage R packages directly from the command line. Free online tool, no registration required."
category: common
keywords:
- R script execution
- R language interpreter
- R command-line tools
- R package manager
- R debugger
- R vanilla mode
- R expression executor
- Linux R interpreter
- macOS R interpreter
- Unix R scripting
features:
- Start an interactive R session (REPL)
- Execute R scripts from a file
- Run R expressions directly from the command line
- Execute R in vanilla mode, without saving workspace
- Check R packages from package sources
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# R

> R language interpreter.
> More information: <https://www.r-project.org>.

- Start a REPL (interactive shell):

`R`

- Start R in vanilla mode (i.e. a blank session that doesn't save the workspace at the end):

`R {{[-v|--vanilla]}}`

- Execute a file:

`R {{[-f|--file]}} {{path/to/file.R}}`

- Execute an R expression and then exit:

`R -e {{expr}}`

- Run R with a debugger:

`R {{[-d|--debugger]}} {{debugger}}`

- Check R packages from package sources:

`R CMD check {{path/to/package_source}}`

- Display version:

`R --version`
