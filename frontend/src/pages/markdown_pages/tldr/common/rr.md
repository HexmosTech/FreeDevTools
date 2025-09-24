---
title: "rr - Debug Program Execution | Online Free DevTools by Hexmos"
name: rr
path: /freedevtools/tldr/common/rr
canonical: "https://hexmos.com/freedevtools/tldr/common/rr/"
description: "Debug program execution with rr. Record and replay application behavior to find and fix bugs effectively. Free online tool, no registration required."
category: common
keywords:
- program execution debugging
- rr debugger
- record and replay debugging
- linux debugging tool
- application execution analysis
- process recording
- deterministic replay
- bug tracking
- software debugging
- command line debugger
features:
- Record application execution for later analysis
- Replay recorded execution deterministically
- Analyze program behavior to identify bugs
- Step through execution history
- Inspect program state at any point in time
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rr

> Debugging tool designed to record and replay program execution.
> More information: <https://github.com/rr-debugger/rr/wiki/Usage>.

- Record an application:

`rr record {{path/to/binary --arg1 --arg2}}`

- Replay latest recorded execution:

`rr replay`
