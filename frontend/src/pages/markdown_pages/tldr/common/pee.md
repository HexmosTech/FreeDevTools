---
title: "Control stdin with pee - Pipe stdin to Commands | Free DevTools"
name: pee
path: /freedevtools/tldr/common/pee
canonical: "https://hexmos.com/freedevtools/tldr/common/pee/"
description: "Control stdin output with pee. Pipe standard input to multiple commands simultaneously for parallel processing. Free online tool, no registration required."
category: common
keywords:
- stdin pipe
- command tee
- standard input manipulator
- parallel command execution
- linux stdin control
- macos stdin tee
- shell pipe tool
- pee command alternative
- stdin multiplexer
- command line tee
features:
- Distribute stdin to multiple commands concurrently
- Duplicate stdin streams for parallel processing
- Tee stdin to stdout and other commands
- Terminate on SIGPIPE and write errors
- Execute a series of piped commands from a single input
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pee

> Tee `stdin` to pipes.
> See also: `tee`.
> More information: <https://manned.org/pee>.

- Run each command, providing each one with a distinct copy of `stdin`:

`pee {{command1 command2 ...}}`

- Write a copy of `stdin` to `stdout` (like `tee`):

`pee cat {{command1 command2 ...}}`

- Immediately terminate upon SIGPIPEs and write errors:

`pee --no-ignore-sigpipe --no-ignore-write-errors {{command1 command2 ...}}`
