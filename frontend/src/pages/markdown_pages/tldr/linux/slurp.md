---
title: "Select Region - Capture Screen Regions with Slurp | Online Free DevTools by Hexmos"
name: slurp
path: /freedevtools/tldr/linux/slurp
canonical: "https://hexmos.com/freedevtools/tldr/linux/slurp/"
description: "Capture screen regions precisely with Slurp, a Wayland compositor tool.  Grab specific areas or single points effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - Wayland screen capture
  - Slurp region selection
  - Linux screen grab
  - Command line screen capture
  - Region to clipboard
  - Wayland compositor selection
  - Screenshot region tool
  - Screen area selection
  - Capture specific region
  - Slurp command examples
features:
  - Select a region for screenshotting
  - Print selected region coordinates to stdout
  - Display dimensions of selected region
  - Select a single point coordinate
  - Select specific output and print its name
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# slurp

> Select a region in a Wayland compositor.
> More information: <https://github.com/emersion/slurp>.

- Select a region and print it to `stdout`:

`slurp`

- Select a region and print it to `stdout`, while displaying the dimensions of the selection:

`slurp -d`

- Select a single point instead of a region:

`slurp -p`

- Select an output and print its name:

`slurp -o -f '%o'`

- Select a specific region and take a borderless screenshot of it, using `grim`:

`grim -g "$(slurp -w 0)"`

- Select a specific region and take a borderless video of it, using `wf-recorder`:

`wf-recorder --geometry "$(slurp -w 0)"`
