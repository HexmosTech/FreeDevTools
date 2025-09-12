---
title: "Zellij - Manage Terminal Sessions | Free DevTools"
name: zellij
path: "/freedevtools/tldr/common/zellij"
canonical: "https://hexmos.com/freedevtools/tldr/common/zellij/"
description: "Manage terminal sessions with Zellij, a terminal multiplexer. Organize windows and panes efficiently with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- terminal multiplexer
- zellij session manager
- command line terminal
- linux terminal multiplexer
- macos terminal multiplexer
- cross platform terminal
- tmux alternative
- screen alternative
- terminal workspace manager
- shell session persistence
features:
- Start named terminal sessions
- List available zellij sessions
- Attach to existing sessions
- Create new panes within a session
- Detach from a zellij session
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zellij

> Terminal multiplexer with batteries included.
> See also: `tmux`, `screen`.
> More information: <https://zellij.dev/documentation/>.

- Start a new named session:

`zellij {{[-s|--session]}} {{name}}`

- List existing sessions:

`zellij {{[ls|list-sessions]}}`

- Attach to the most recently used session:

`zellij {{[a|attach]}}`

- Open a new pane (inside a zellij session):

`<Alt n>`

- Detach from the current session (inside a zellij session):

`<Ctrl o><d>`
