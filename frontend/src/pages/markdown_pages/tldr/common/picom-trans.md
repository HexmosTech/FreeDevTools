---
title: "Picom Opacity Control - Manage Window Transparency | Free DevTools"
name: picom-trans
path: /freedevtools/tldr/common/picom-trans
canonical: "https://hexmos.com/freedevtools/tldr/common/picom-trans/"
description: "Manage window opacity with Picom Opacity Control. Easily adjust transparency, toggle visibility, and customize desktop appearance. Free online tool, no registration required."
category: common
keywords:
- picom opacity control
- window transparency manager
- desktop compositor settings
- picom window manager
- linux window opacity
- opacity configuration tool
- picom configuration
- xorg window transparency
- window transparency toggle
- desktop customization
features:
- Set opacity for focused windows
- Set opacity for windows by name
- Select window for opacity adjustment using mouse
- Toggle window opacity on and off
- Adjust window transparency percentage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# picom-trans

> Set the window opacity for the `picom` window compositor.
> More information: <https://github.com/yshui/picom>.

- Set the currently focused window opacity to a specific percentage:

`picom-trans --current --opacity {{90}}`

- Set the opacity of a window with a specific name:

`picom-trans --name {{Firefox}} --opacity {{90}}`

- Set the opacity of a specific window selected via mouse cursor:

`picom-trans --select --opacity {{90}}`

- Toggle the opacity of a specific window:

`picom-trans --name {{Firefox}} --toggle`
