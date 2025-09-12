---
title: "Pixel Color - Display Screen Color with Farge | Free DevTools"
name: farge
path: /freedevtools/tldr/linux/farge
canonical: "https://hexmos.com/freedevtools/tldr/linux/farge/"
description: "Display screen color with Farge. Capture pixel color in hexadecimal or RGB formats. Free online tool, no registration required for instant color analysis."
category: linux
keywords:
- pixel color display
- screen color picker
- hexadecimal color code
- RGB color code
- linux color tool
- command line color
- farge color
- color value extractor
- screen color analysis
- desktop color sampler
features:
- Display a pixel's color in hexadecimal format.
- Output pixel color to stdout.
- Copy pixel color to clipboard.
- Display pixel color as a notification.
- Support RGB color output.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# farge

> Display the color of a specific pixel on the screen in either hexadecimal or RGB formats.
> More information: <https://github.com/sdushantha/farge>.

- Display a small preview window of a pixel's color with it's hexadecimal value, and copy this value to the clipboard:

`farge`

- Copy a pixel's hexadecimal value to the clipboard without displaying a preview window:

`farge --no-preview`

- Output a pixel's hexadecimal value to `stdout`, and copy this value to the clipboard:

`farge --stdout`

- Output a pixel's RGB value to `stdout`, and copy this value to the clipboard:

`farge --rgb --stdout`

- Display a pixel's hexadecimal value as a notification which expires in 5000 milliseconds, and copy this value to the clipboard:

`farge --notify --expire-time 5000`
