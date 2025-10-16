---
title: "Execute Julia Code - High-Performance Computing | Online Free DevTools by Hexmos"
name: julia
path: "/freedevtools/tldr/common/julia/"
canonical: "https://hexmos.com/freedevtools/tldr/common/julia/"
description: "Execute Julia code efficiently with Julia. A high-performance language for scientific computing and data analysis. Free online tool, no registration required."
category: common
keywords:
- Julia code execution
- scientific computing language
- dynamic programming Julia
- Julia REPL interactive shell
- high-performance Julia
- Julia program execution
- Julia command line
- Julia data analysis
- Julia multithreading
- Julia scripting
features:
- Execute Julia programs from the command line
- Evaluate Julia code snippets directly
- Run Julia code in multithreaded mode
- Pass arguments to Julia programs
- Evaluate expressions and print the results
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# julia

> A high-level, high-performance dynamic programming language for technical computing.
> More information: <https://docs.julialang.org/en/v1/manual/getting-started/>.

- Start a REPL (interactive shell):

`julia`

- Execute a Julia program and exit:

`julia {{program.jl}}`

- Execute a Julia program that takes arguments:

`julia {{program.jl}} {{arguments}}`

- Evaluate a string containing Julia code:

`julia {{[-e|--eval]}} '{{julia_code}}'`

- Evaluate a string of Julia code, passing arguments to it:

`julia {{[-e|--eval]}} '{{for x in ARGS; println(x); end}}' {{arguments}}`

- Evaluate an expression and print the result:

`julia {{[-E|--print]}} '{{(1 - cos(pi/4))/2}}'`

- Start Julia in multithreaded mode, using `n` threads:

`julia {{[-t|--threads]}} {{n}}`
