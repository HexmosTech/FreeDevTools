---
title: "Monitor X Events - Analyze X11 Activity | Online Free DevTools by Hexmos"
name: xev
path: /freedevtools/tldr/common/xev
canonical: "https://hexmos.com/freedevtools/tldr/common/xev/"
description: "Monitor X events instantly with xev. Analyze X11 activity, track window changes, and debug graphical applications. Free online tool, no registration required."
category: common
keywords:
- X11 Events Monitor
- X Events Analyzer
- X Window Debugger
- Linux X11 Tools
- X Server Event Logging
- Graphical Application Debugging
- Window Event Tracking
- X11 Protocol Analyzer
- GUI Event Monitor
- X Server Debugging
features:
- Monitor all occurring X events.
- Monitor X events of the root window.
- Monitor X events of a particular window by ID.
- Monitor X events from specific categories.
- Analyze X11 protocol interactions in real-time.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xev

> Print contents of X events.
> More information: <https://gitlab.freedesktop.org/xorg/app/xev>.

- Monitor all occurring X events:

`xev`

- Monitor all X events of the root window instead of creating a new one:

`xev -root`

- Monitor all X events of a particular window:

`xev -id {{window_id}}`

- Monitor X events from a given category (can be specified multiple times):

`xev -event {{event_category}}`
