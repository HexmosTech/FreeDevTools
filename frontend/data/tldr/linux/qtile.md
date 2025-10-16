---
title: "qtile Window Manager - Control Windows with Python | Online Free DevTools by Hexmos"
name: qtile
path: "/freedevtools/tldr/linux/qtile/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qtile/"
description: "Control your window layout effortlessly with qtile, a powerful tiling window manager written in Python. Manage windows, groups, and layouts with simple commands. Free online tool, no registration required."
category: linux
keywords:
  - python window manager
  - tiling window manager
  - qtile commands
  - linux window management
  - window management python
  - qtile configuration
  - qtile scripting
  - python gui automation
  - customize window layout
  - manage windows efficiently
features:
  - Start and restart the window manager.
  - Check configuration file for errors.
  - Monitor current system resource usage.
  - Run applications in specified groups and window states.
  - Highly customizable via Python scripting.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qtile

> A full-featured, hackable tiling window manager written and configured in Python.
> More information: <https://docs.qtile.org/en/latest/manual/commands/shell/index.html>.

- Start the window manager, if it is not running already (should ideally be run from `.xsession` or similar):

`qtile start`

- Check the configuration file for any compilation errors (default location is `~/.config/qtile/config.py`):

`qtile check`

- Show current resource usage information:

`qtile top --force`

- Open the program `xterm` as a floating window on the group named `test-group`:

`qtile run-cmd --group {{test-group}} --float {{xterm}}`

- Restart the window manager:

`qtile cmd-obj --object cmd --function restart`
