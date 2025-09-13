---
title: "Suspend Shell - Halt Processes Quickly | Free DevTools"
name: suspend
path: /freedevtools/tldr/common/suspend
canonical: "https://hexmos.com/freedevtools/tldr/common/suspend/"
description: "Suspend execution with Shell Suspend. Pause processes and manage shell sessions using this command line tool. Free online tool, no registration required."
category: common
keywords:
- shell suspend command
- bash suspend process
- linux suspend shell
- command line suspend
- terminal process control
- gnu suspend execution
- shell session management
- process pausing bash
- background shell process
- suspend command tutorial
features:
- Pauses the execution of the current shell
- Allows continuation from suspension in a separate terminal
- Supports forced suspension to halt processes
- Manages nested shell environments effectively
- Provides command-line process control
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# suspend

> Suspend the execution of the current shell.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-suspend>.

- Suspend the current shell (useful for when you are in nested shells like `su`):

`{{bash}} <Enter> suspend`

- Continue from suspension if `suspend` was used in a non-nested shell (run this in a separate terminal):

`pkill -CONT {{bash}}`

- Force suspension even if this would lock you out of the system:

`suspend -f`
