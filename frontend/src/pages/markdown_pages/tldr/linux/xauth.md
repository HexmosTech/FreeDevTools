---
title: "Control Xauth - Manage X Server Authorizations | Online Free DevTools by Hexmos"
name: xauth
path: /freedevtools/tldr/linux/xauth
canonical: "https://hexmos.com/freedevtools/tldr/linux/xauth/"
description: "Control X server authorizations with Xauth. Manage access, list entries, and extract authentication tokens. Free online tool, no registration required."
category: linux
keywords:
  - X server authentication
  - Xauth manager
  - X authority control
  - X11 authorization
  - X display access
  - X server permissions
  - Linux Xauth
  - Unix Xauth
  - Xauth command
  - X server security
features:
  - Manage X server authorization entries
  - List available X display authorizations
  - Add new authorization entries for displays
  - Remove existing authorization entries
  - Extract authorization information to standard output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xauth

> Edit and display the authorization information used in connecting to the X server.
> More information: <https://manned.org/xauth>.

- Start interactive mode with a specific authority file (defaults to `~/.Xauthority`):

`xauth -f {{path/to/file}}`

- Display information about the authority file:

`xauth info`

- Display authorization entries for all the displays:

`xauth list`

- Add an authorization for a specific display:

`xauth add {{display_name}} {{protocol_name}} {{key}}`

- Remove the authorization for a specific display:

`xauth remove {{display_name}}`

- Print the authorization entry for the current display to `stdout`:

`xauth extract - $DISPLAY`

- Merge the authorization entries from a specific file into the authorization database:

`cat {{path/to/file}} | xauth merge -`

- Display help:

`xauth --help`
