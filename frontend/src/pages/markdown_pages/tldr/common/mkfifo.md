---
title: "Create Named Pipe - Make FIFOs on Linux | Online Free DevTools by Hexmos"
name: mkfifo
path: /freedevtools/tldr/common/mkfifo
canonical: "https://hexmos.com/freedevtools/tldr/common/mkfifo/"
description: "Create named pipes (FIFOs) with mkfifo on Linux and other systems. Establish inter-process communication using command line tools. Free online tool, no registration required."
category: common
keywords:
- named pipe creation
- linux fifo creation
- mkfifo command
- inter-process communication linux
- command line fifo
- fifo creation linux
- posix fifo
- linux pipe
- named pipe example
- shell fifo creation
features:
- Create named pipes for inter-process communication
- Send data through named pipes
- Receive data through named pipes
- Share terminal sessions in real-time
- Create FIFOs at a specified path
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkfifo

> Make FIFOs (named pipes).
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/mkfifo-invocation.html>.

- Create a named pipe at a given path:

`mkfifo {{path/to/pipe}}`

- Send data through a named pipe and send the command to the background:

`echo "{{Hello World}}" > {{path/to/pipe}} &`

- Receive data through a named pipe:

`cat {{path/to/pipe}}`

- Share your terminal session in real-time:

`mkfifo {{path/to/pipe}}; script {{[-f|--flush]}} {{path/to/pipe}}`
