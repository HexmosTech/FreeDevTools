---
title: "Tmux - Manage Terminal Sessions with Ease | Online Free DevTools by Hexmos"
name: tmux
path: /freedevtools/tldr/common/tmux
canonical: "https://hexmos.com/freedevtools/tldr/common/tmux/"
description: "Manage terminal sessions easily with Tmux. Multiplex terminals, create windows, and detach/attach sessions efficiently. Free online tool, no registration required."
category: common
keywords:
- tmux session manager
- terminal multiplexer
- tmux commands linux
- tmux configuration
- tmux macos
- tmux windows
- linux terminal sessions
- create tmux session
- detach tmux session
- tmux cheat sheet
features:
- Create and manage multiple terminal sessions.
- Detach and re-attach to sessions without losing progress.
- Split terminal windows into panes.
- Switch between sessions and windows quickly.
- Kill sessions by name.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tmux

> Terminal multiplexer.
> It allows multiple sessions with windows, panes, and more.
> See also: `zellij`, `screen`.
> More information: <https://github.com/tmux/tmux>.

- Start a new session:

`tmux`

- Start a new named [s]ession:

`tmux {{[new|new-session]}} -s {{name}}`

- List existing sessions:

`tmux {{[ls|list-sessions]}}`

- Attach to the most recently used session:

`tmux {{[a|attach]}}`

- Detach from the current session (inside a tmux session):

`<Ctrl b><d>`

- Create a new window (inside a tmux session):

`<Ctrl b><c>`

- Switch between sessions and windows (inside a tmux session):

`<Ctrl b><w>`

- Kill a session by [t]arget name:

`tmux kill-session -t {{name}}`
