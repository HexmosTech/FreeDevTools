---
title: "Stdbuf Control - Modify Standard Streams | Online Free DevTools by Hexmos"
name: stdbuf
path: "/freedevtools/tldr/st/stdbuf/"
canonical: "https://hexmos.com/freedevtools/tldr/st/stdbuf/"
description: "Control standard streams buffering with Stdbuf. Modify stdin, stdout, and stderr buffer sizes using command line. Free online tool, no registration required."
category: common
keywords:
- stdbuf buffer control
- standard stream management
- stdin buffering options
- stdout buffering options
- stderr buffering options
- linux buffer utility
- gnu coreutils stdbuf
- command-line buffer tool
- process i/o control
- terminal output buffering
features:
- Modify stdin buffer size
- Change stdout buffering to line-buffered
- Set stderr to unbuffered
- Control standard stream behavior
- Adjust process input/output buffering
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# stdbuf

> Run a command with modified buffering operations for its standard streams.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/stdbuf-invocation.html>.

- Change `stdin` buffer size to 512 KiB:

`stdbuf {{[-i|--input]}} 512K {{command}}`

- Change `stdout` buffer to line-buffered:

`stdbuf {{[-o|--output]}} L {{command}}`

- Change `stderr` buffer to unbuffered:

`stdbuf {{[-e|--error]}} 0 {{command}}`
