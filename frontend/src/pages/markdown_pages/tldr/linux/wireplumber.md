---
title: "WirePlumber - Manage PipeWire Sessions | Online Free DevTools by Hexmos"
name: wireplumber
path: /freedevtools/tldr/linux/wireplumber
canonical: "https://hexmos.com/freedevtools/tldr/linux/wireplumber/"
description: "Manage PipeWire audio sessions efficiently with WirePlumber.  Control audio routing and policies using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - PipeWire session manager
  - PipeWire policy manager
  - Linux audio management
  - wireplumber commands
  - audio routing control
  - systemd service management
  - GObject library
  - PipeWire configuration
  - command-line audio tool
  - Linux audio daemon
features:
  - Manages PipeWire audio sessions and policies.
  - Provides a modular and extensible architecture.
  - Integrates seamlessly with systemd for user session management.
  - Offers command-line interface for easy configuration.
  - Enables customized audio routing and device control.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wireplumber

> A modular session/policy manager for PipeWire and a GObject-based high-level library that wraps PipeWire's API.
> See also: `wpctl`, `pipewire`.
> More information: <https://pipewire.pages.freedesktop.org/wireplumber/>.

- Make WirePlumber start with the user session immediately (for systemd systems):

`systemctl --user --now enable wireplumber`

- Run WirePlumber, after `pipewire` is started (for non-systemd systems):

`wireplumber`

- Specify a different context configuration file:

`wireplumber --config-file {{path/to/file}}`

- Display help:

`wireplumber --help`

- Display version:

`wireplumber --version`
