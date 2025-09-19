---
title: "Grab Screenshots - Control Linux Screenshots with grim | Online Free DevTools by Hexmos"
name: grim
path: /freedevtools/tldr/linux/grim
canonical: "https://hexmos.com/freedevtools/tldr/linux/grim/"
description: "Grab screenshots instantly with grim on Linux. Capture specific outputs and regions for quick image creation and documentation. Free online tool, no registration required."
category: linux
keywords:
- linux screenshot tool
- wayland screenshot capture
- grim command line
- screenshot region selection
- linux image grabber
- desktop screenshot automation
- wayland compositor capture
- command line screenshot utility
- linux terminal screenshot
- grim screenshot linux
features:
- Capture full screen screenshots on Wayland
- Select and capture specific output screens
- Define a custom region to capture a screenshot
- Integrate with slurp for interactive region selection
- Save screenshots to custom file paths
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# grim

> Grab images (Screenshots) from a Wayland compositor.
> More information: <https://sr.ht/~emersion/grim>.

- Screenshot all outputs:

`grim`

- Screenshot a specific output:

`grim -o {{path/to/output_file}}`

- Screenshot a specific region:

`grim -g "{{x_position}},{{y_position}} {{width}}x{{height}}"`

- Select a specific region and screenshot it, (using slurp):

`grim -g "{{$(slurp)}}"`

- Use a custom filename:

`grim "{{path/to/file.png}}"`

- Screenshot and copy to clipboard:

`grim - | {{clipboard_manager}}`
