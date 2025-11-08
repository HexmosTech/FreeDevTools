---
title: "Timeout Command - Control Process Execution | Online Free DevTools by Hexmos"
name: timeout
path: "/freedevtools/tldr/common/timeout/"
canonical: "https://hexmos.com/freedevtools/tldr/common/timeout/"
description: "Control process execution with Timeout Command. Limit execution time, send signals, and preserve exit statuses. Free online tool, no registration required."
category: common
keywords:
- timeout command linux
- timeout command execution
- timeout process limit
- linux timeout kill signal
- command timeout control
- execution time control
- process management linux
- timeout command macos
- timeout command common
- timeout command examples
features:
- Limit command execution time
- Send signals upon timeout
- Preserve the exit status
- Forcefully terminate processes
- Display verbose timeout messages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# timeout

> Run a command with a time limit.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/timeout-invocation.html>.

- Run `sleep 10` and terminate it after 3 seconds:

`timeout 3s sleep 10`

- Send a signal to the command after the time limit expires (`TERM` by default, `kill -l` to list all signals):

`timeout {{[-s|--signal]}} {{INT|HUP|KILL|...}} {{5s}} {{sleep 10}}`

- Send verbose output to `stderr` showing signal sent upon timeout:

`timeout {{[-v|--verbose]}} {{0.5s|1m|1h|1d|...}} {{command}}`

- Preserve the exit status of the command regardless of timing out:

`timeout {{[-p|--preserve-status]}} {{1s|1m|1h|1d|...}} {{command}}`

- Send a forceful `KILL` signal after certain duration if the command ignores initial signal upon timeout:

`timeout {{[-k|--kill-after]}} {{5m}} {{30s}} {{command}}`
