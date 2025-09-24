---
title: "Evaluate Expressions - Calculate with Let Command | Online Free DevTools by Hexmos"
name: let
path: /freedevtools/tldr/common/let
canonical: "https://hexmos.com/freedevtools/tldr/common/let/"
description: "Evaluate expressions with the let command. Perform arithmetic calculations and conditional operations using shell scripting. Free online tool, no registration required."
category: common
keywords:
- bash arithmetic expression
- shell let command
- command line calculator
- linux expression evaluation
- macos let syntax
- conditional shell script
- bash variable assignment
- arithmetic operators shell
- expression parser common
- shell calculation tool
features:
- Calculate arithmetic expressions
- Support variable assignment
- Perform conditional operations
- Increment and decrement variables
- Evaluate expressions within shell scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# let

> Evaluate arithmetic expressions in shell.
> Supports variables, operators, and conditional expressions.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-let>.

- Evaluate a simple arithmetic expression:

`let "{{result = a + b}}"`

- Use post-increment and assignment in an expression:

`let "{{x++}}"`

- Use conditional operator in an expression:

`let "{{result = (x > 10) ? x : 0}}"`

- Display help:

`let --help`
