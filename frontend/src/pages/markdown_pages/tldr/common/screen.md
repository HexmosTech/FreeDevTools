---
title: "Control Screen Sessions - Manage SSH Connections | Online Free DevTools by Hexmos"
name: screen
path: /freedevtools/tldr/common/screen
canonical: "https://hexmos.com/freedevtools/tldr/common/screen/"
description: "Control screen sessions with Screen. Manage multiple SSH windows and keep sessions running even when disconnected. Free online tool, no registration required."
category: common
keywords:
- screen session manager
- linux screen command
- detach screen session
- reattach screen session
- named screen session
- multiple ssh sessions
- remote server session
- terminal multiplexer
- linux terminal manager
- screen command line
features:
- Manage multiple terminal windows within a single SSH connection.
- Detach and reattach to running sessions without losing progress.
- Create named screen sessions for easy identification and management.
- Log screen output to a file for later review and analysis.
- Execute commands in detached sessions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# screen

> Hold a session open on a remote server. Manage multiple windows with a single SSH connection.
> See also: `tmux`, `zellij`.
> More information: <https://manned.org/screen>.

- Start a new screen session:

`screen`

- Start a new named screen session:

`screen -S {{session_name}}`

- Start a new daemon and log the output to `screenlog.x`:

`screen -dmLS {{session_name}} {{command}}`

- Show open screen sessions:

`screen -ls`

- Reattach to an open screen:

`screen -r {{session_name}}`

- Detach from inside a screen:

`<Ctrl a><d>`

- Kill the current screen session:

`<Ctrl a><k>`

- Kill a detached screen:

`screen -X -S {{session_name}} quit`
