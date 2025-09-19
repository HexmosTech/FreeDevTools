---
title: "Control Window with Xkill - Kill Windows | Online Free DevTools by Hexmos"
name: xkill
path: /freedevtools/tldr/common/xkill
canonical: "https://hexmos.com/freedevtools/tldr/common/xkill/"
description: "Control windows with Xkill, a graphical tool to terminate unresponsive applications. Manage X server sessions and troubleshoot GUI issues. Free online tool, no registration required."
category: common
keywords:
- xkill window killer
- linux window manager
- X server control
- graphical process termination
- interactive kill signal
- X window system
- kill unresponsive application
- linux GUI tool
- X display management
- window ID termination
features:
- Interactively kill windows with a mouse cursor.
- Terminate windows using their unique ID.
- Force quit applications in the X Window System.
- Select a specific window for termination.
- Cancel window termination by pressing any mouse button.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xkill

> Kill a window interactively in a graphical session.
> See also: `kill`, `killall`.
> More information: <https://www.x.org/releases/current/doc/man/man1/xkill.1.xhtml>.

- Display a cursor to kill a window when pressing the left mouse button (press any other mouse button to cancel):

`xkill`

- Display a cursor to select a window to kill by pressing any mouse button:

`xkill -button any`

- Kill a window with a specific ID (use `xwininfo` to get info about windows):

`xkill -id {{id}}`
