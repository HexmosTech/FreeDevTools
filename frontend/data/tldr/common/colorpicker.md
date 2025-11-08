---
title: "Control Colorpicker - Select Colors on Linux | Online Free DevTools by Hexmos"
name: colorpicker
path: "/freedevtools/tldr/common/colorpicker/"
canonical: "https://hexmos.com/freedevtools/tldr/common/colorpicker/"
description: "Control colors with Colorpicker, a minimalist X11 tool. Quickly grab hexadecimal and RGB values from any pixel on your screen. Free online tool, no registration required."
category: common
keywords:
- X11 color picker
- Linux color picker
- RGB color code
- Hexadecimal color code
- Desktop color picker
- Pixel color grabber
- Screen color picker
- Color selection tool
- Color identification tool
- Color extraction tool
features:
- Print hexadecimal and RGB values of clicked pixels
- Capture color from a single pixel
- Exit on keypress after printing colors
- Output only RGB value
- Output only hexadecimal value
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# colorpicker

> A minimalist X11 colorpicker.
> Any mouse gesture except `<LeftClick>` will exit the program.
> More information: <https://github.com/ym1234/colorpicker>.

- Launch colorpicker and print the hexadecimal and RGB value of each clicked pixel to `stdout`:

`colorpicker`

- Only print the color of one clicked pixel and then exit:

`colorpicker --one-shot`

- Print the color of each clicked pixel and quit when a key is pressed:

`colorpicker --quit-on-keypress`

- Only print the RGB value:

`colorpicker --rgb`

- Only print the hexadecimal value:

`colorpicker --hex`
