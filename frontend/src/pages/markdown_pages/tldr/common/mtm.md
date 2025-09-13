---
title: "Control Terminal Sessions - mtm Multiplexer | Free DevTools"
name: mtm
path: /freedevtools/tldr/common/mtm
canonical: "https://hexmos.com/freedevtools/tldr/common/mtm/"
description: "Control multiple terminal sessions with mtm, a minimal terminal multiplexer. Manage windows, split panes, and navigate easily within your terminal. Free online tool, no registration required."
category: common
keywords:
- terminal multiplexer
- mtm terminal
- linux terminal manager
- tmux alternative
- screen alternative
- command line multiplexer
- terminal session manager
- command-line tools
- console window manager
- mtm command
features:
- Split terminal into horizontal or vertical panes
- Navigate between terminal sessions using arrow keys
- View scrollback buffer of terminal sessions
- Switch between multiple terminal windows
- Close current terminal session quickly
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mtm

> Minimal terminal multiplexer.
> See also: `tmux`, `screen`.
> More information: <https://github.com/deadpixi/mtm>.

- Start the program with default command chord (`<Ctrl g>`):

`mtm`

- Use `<Ctrl q>` as the command chord:

`mtm -c {{q}}`

- Split and stack horizontally:

`<Ctrl g><h>`

- Split and stack vertically:

`<Ctrl g><v>`

- View scrollback buffer:

`<Ctrl g><PageUp>`

- Switch terminals:

`<Ctrl g><ArrowKeys>`

- Close current terminal:

`<Ctrl g><w>`
