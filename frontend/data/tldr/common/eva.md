---
title: "Eva Calculator - Calculate Expressions with Eva | Online Free DevTools by Hexmos"
name: eva
path: "/freedevtools/tldr/common/eva/"
canonical: "https://hexmos.com/freedevtools/tldr/common/eva/"
description: "Calculate expressions with Eva Calculator, a simple and powerful REPL. Perform arithmetic operations and use math functions. Free online tool, no registration required."
category: common
keywords:
- calculator repl
- command line calculator
- eva calculator
- arithmetic expressions
- math functions
- terminal calculator
- eva command
- linux calculator
- macos calculator
- number formatting
features:
- Perform calculations using mathematical expressions
- Evaluate expressions directly from the command line
- Specify number of decimal places in the output
- Use built-in trigonometric functions
- Maintain a persistent command history
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eva

> Simple calculator REPL, similar to `bc`, with syntax highlighting and persistent history.
> More information: <https://github.com/NerdyPepper/eva>.

- Run the calculator in interactive mode:

`eva`

- Calculate the result of an expression:

`eva "{{(1 + 2) * 2 ^ 2}}"`

- Calculate an expression forcing the number of decimal places to 5:

`eva --fix {{5}} "{{5 / 3}}"`

- Calculate an expression with sine and cosine:

`eva "{{sin(1) + cos(1)}}"`
