---
title: "Remap Keys - Control Keyboard Bindings with keyd | Free DevTools"
name: keyd
path: /freedevtools/tldr/unknown/keyd
canonical: "https://hexmos.com/freedevtools/tldr/unknown/keyd/"
description: "Control keyboard bindings with keyd. Remap keys and customize your keyboard layout on Linux using command line. Free online tool, no registration required."
category: unknown
keywords:
- keyboard remapping
- key binding configuration
- linux keyboard layout
- keyd configuration tool
- customize keyboard keys
- remap keyboard shortcuts
- systemd service keyd
- keyd bind command
- keyboard customization linux
- command line keyboard control
features:
- Start and enable the keyd service
- Display keypress information in real-time
- Reset bindings and reload configuration files
- List all valid key names for remapping
- Create temporary keyboard bindings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# keyd

> Remap keys.
> More information: <https://manned.org/keyd>.

- Start and enable the `keyd` service:

`systemctl enable keyd --now`

- Display keypress information:

`sudo keyd monitor`

- Reset bindings and reload the configuration files in `/etc/keyd`:

`sudo keyd reload`

- List all valid key names:

`keyd list-keys`

- Create a temporary binding:

`sudo keyd bind "{{pressed_key}} = {{output_key}}"`
