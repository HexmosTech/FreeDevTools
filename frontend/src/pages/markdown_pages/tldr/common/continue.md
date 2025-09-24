---
title: "Control Continue - Skip Loop Iterations | Online Free DevTools by Hexmos"
name: continue
path: /freedevtools/tldr/common/continue
canonical: "https://hexmos.com/freedevtools/tldr/common/continue/"
description: "Control loop execution with Continue command. Skip iterations in for, while, until, and select loops. Free online tool, no registration required."
category: common
keywords:
- bash continue command
- shell continue statement
- loop control continue
- bash skip iteration
- shell next iteration
- bash loop next
- shell loop control
- bash loop continue nested
- linux continue command
- macos continue command
features:
- Skip to the next iteration of a loop
- Bypass the remaining code in the current iteration
- Control the flow of `for`, `while`, `until`, and `select` loops
- Skip iterations from within nested loops
- Continue execution from the top of the loop
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# continue

> Skip to the next iteration of a `for`, `while`, `until` or `select` loop.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-continue>.

- Skip to the next iteration:

`while :; do continue; {{echo "This will never be reached"}}; done`

- Skip to the next iteration from within a nested loop:

`for i in {{{1..3}}}; do {{echo $i}}; while :; do continue 2; done; done`
