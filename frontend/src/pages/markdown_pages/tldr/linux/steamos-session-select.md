---
title: "Control SteamOS Sessions - Manage Desktop Modes | Free DevTools"
name: steamos-session-select
path: /freedevtools/tldr/linux/steamos-session-select
canonical: "https://hexmos.com/freedevtools/tldr/linux/steamos-session-select/"
description: "Manage SteamOS sessions with steamos-session-select.  Switch between desktop modes (Plasma, Wayland, X11),  set persistent boot options, and control your SteamOS environment. Free online tool, no registration required."
category: linux
keywords:
  - steamOS session manager
  - linux session control
  - steamos desktop mode
  - plasma session switcher
  - wayland session management
  - x11 session management
  - persistent boot configuration
  - steamOS command line tool
  - gamemode session control
  - linux system administration
features:
  - Switch between Plasma, Wayland, and X11 desktop modes.
  - Set persistent boot options for specific desktop environments.
  - Easily switch to gamemode for optimal gaming performance.
  - Control SteamOS session from the command line.
  - Manage system boot behavior for different session types.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# steamos-session-select

> Manipulate which session is currently in use.
> More information: <https://gitlab.com/users/evlaV/projects>.

- Change to desktop mode:

`steamos-session-select plasma`

- Change to gamemode (sets the system to boot into gamemode if `-persistent` options were selected previously):

`steamos-session-select`

- Change to Wayland desktop mode:

`steamos-session-select plasma-wayland`

- Change to Wayland desktop mode and have the device boot to desktop:

`steamos-session-select plasma-wayland-persistent`

- Change to X11 desktop mode and have the device boot to desktop:

`steamos-session-select plasma-x11-persistent`
