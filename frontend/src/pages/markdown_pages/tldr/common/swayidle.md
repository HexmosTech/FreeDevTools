---
title: "Control Idle Time - Manage Wayland Idle with Swayidle | Online Free DevTools by Hexmos"
name: swayidle
path: "/freedevtools/tldr/common/swayidle"
canonical: "https://hexmos.com/freedevtools/tldr/common/swayidle/"
description: "Control Wayland idle state with Swayidle. Configure idle timeouts, execute commands on inactivity, and manage screen locking. Free online tool, no registration required."
category: common
keywords:
- Wayland idle manager
- Swayidle configuration
- Linux idle daemon
- Wayland power management
- sway idle timeout
- swaylock integration
- XDG config swayidle
- desktop idle detection
- screen locking manager
- idle activity listener
features:
- Configure idle timeouts for Wayland sessions
- Execute custom commands on idle detection
- Integrate with swaylock for screen locking
- Specify different actions for various idle states
- Monitor user activity and trigger events
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# swayidle

> Idle management daemon for Wayland.
> Note: The configuration options are documented in its man page.
> More information: <https://github.com/swaywm/swayidle/blob/master/swayidle.1.scd>.

- Listen for idle activity using the configuration in `$XDG_CONFIG_HOME/swayidle/config` or `$HOME/swayidle/config`:

`swayidle`

- Specify an alternative path to the configuration file:

`swayidle -C {{path/to/file}}`
