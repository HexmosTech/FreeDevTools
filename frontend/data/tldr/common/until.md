---
title: "Control Shell Loop - Repeat Commands Until Zero | Online Free DevTools by Hexmos"
name: until
path: "/freedevtools/tldr/common/until/"
canonical: "https://hexmos.com/freedevtools/tldr/common/until/"
description: "Control shell loop execution with the 'until' command. Easily repeat commands until a zero return value. Free online tool, no registration required."
category: common
keywords:
- shell loop control
- bash until loop
- command repetition
- systemd service monitoring
- conditional command execution
- bash scripting
- linux shell
- until loop example
- shell programming
- zero return value loop
features:
- Execute commands repeatedly until success
- Monitor systemd service status
- Create conditional loops in shell scripts
- Wait for a specific condition to be met
- Automate tasks based on command return values
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# until

> Simple shell loop that repeats until it receives zero as return value.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-until>.

- Execute a command until it succeeds:

`until {{command}}; do :; done`

- Wait for a systemd service to be active:

`until systemctl is-active {{[-q|--quiet]}} {{nginx}}; do {{echo "Waiting..."}}; sleep 1; done; {{echo "Launched!"}}`
