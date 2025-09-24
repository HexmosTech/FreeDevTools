---
title: "Control Loop Break - Exit Loops in Bash | Online Free DevTools by Hexmos"
name: break
path: /freedevtools/tldr/common/break
canonical: "https://hexmos.com/freedevtools/tldr/common/break/"
description: "Control loop execution with Loop Break in Bash. Exit 'for', 'while', 'until', and 'select' loops effortlessly. Free online tool, no registration required."
category: common
keywords:
- bash loop break
- shell script break
- for loop exit
- while loop break
- until loop break
- select loop break
- command line break
- shell script control flow
- bash control statements
- linux break command
features:
- Exit a single loop iteration
- Break out of nested loops
- Terminate loop execution based on conditions
- Control script flow within loops
- Simplify loop management in bash scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# break

> Break out of a `for`, `while`, `until` or `select` loop.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-break>.

- Break out of a single loop:

`while :; do break; done`

- Break out of nested loops:

`while :; do while :; do break 2; done; done`
