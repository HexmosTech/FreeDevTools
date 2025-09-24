---
title: "Xwininfo - Display Window Information | Online Free DevTools by Hexmos"
name: xwininfo
path: /freedevtools/tldr/common/xwininfo
canonical: "https://hexmos.com/freedevtools/tldr/common/xwininfo/"
description: "Display window information with Xwininfo. Quickly inspect window attributes, geometry, and hierarchy on Linux systems. Free online tool, no registration required."
category: common
keywords:
- window information
- x window information
- linux window manager
- window attributes
- window geometry
- x server info
- window ID
- window name
- xorg utility
- window hierarchy
features:
- Display window ID and name
- Show window size and position
- Visualize the window tree hierarchy
- Query window attributes via ID or name
- Inspect window properties on X server
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xwininfo

> Display information about windows.
> See also: `xprop`, `xkill`.
> More information: <https://www.x.org/releases/current/doc/man/man1/xwininfo.1.xhtml>.

- Display a cursor to select a window to display its attributes (id, name, size, position, ...):

`xwininfo`

- Display the tree of all windows:

`xwininfo -tree -root`

- Display the attributes of a window with a specific ID:

`xwininfo -id {{id}}`

- Display the attributes of a window with a specific name:

`xwininfo -name {{name}}`

- Display the ID of a window searching by name:

`xwininfo -tree -root | grep {{keyword}} | head -1 | perl -ne 'print $1 if /(0x[\da-f]+)/ig;'`
