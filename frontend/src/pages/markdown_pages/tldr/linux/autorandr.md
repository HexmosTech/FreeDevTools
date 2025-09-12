---
title: "Autorandr - Control Screen Layout Automatically | Free DevTools"
name: autorandr
path: /freedevtools/tldr/unknown/autorandr
canonical: "https://hexmos.com/freedevtools/tldr/unknown/autorandr/"
description: "Control screen layout automatically with Autorandr. Save, load and manage multiple display configurations. Free online tool, no registration required."
category: unknown
keywords:
- screen layout manager
- display configuration tool
- autorandr profile management
- linux screen configuration
- command line display control
- monitor arrangement tool
- automated display setup
- screen resolution manager
- xrandr profile manager
- display arrangement script
features:
- Save current screen layout to a profile
- Load a specific screen layout profile
- Automatically detect and load a profile
- Set a default screen layout profile
- Manage multiple display configurations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# autorandr

> Automatically change screen layout.
> More information: <https://manned.org/autorandr>.

- Save the current screen layout:

`autorandr {{[-s|--save]}} {{profile_name}}`

- Show the saved profiles:

`autorandr`

- Load the first detected profile:

`autorandr {{[-c|--change]}}`

- Load a specific profile:

`autorandr {{[-l|--load]}} {{profile_name}}`

- Set the default profile:

`autorandr {{[-d|--default]}} {{profile_name}}`
