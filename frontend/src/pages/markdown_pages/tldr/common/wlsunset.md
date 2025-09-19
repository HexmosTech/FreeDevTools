---
title: "Control Screen Temperature with wlsunset | Online Free DevTools by Hexmos"
name: wlsunset
path: /freedevtools/tldr/common/wlsunset
canonical: "https://hexmos.com/freedevtools/tldr/common/wlsunset/"
description: "Control screen temperature with wlsunset to adjust color based on sunrise/sunset times. Optimize eye comfort and reduce blue light. Free online tool, no registration required."
category: common
keywords:
- screen temperature controller
- Wayland compositor color adjustment
- wlsunset command line tool
- sunset sunrise time based color
- display color temperature control
- blue light filter Wayland
- Linux screen color management
- ambient lighting screen adjustment
- monitor temperature automation
- color calibration command
features:
- Adjust screen color temperature based on sunset/sunrise times
- Manually set specific sunset and sunrise times
- Define custom high and low color temperatures
- Set animation duration for temperature transitions
- Adjust the gamma value for color correction
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wlsunset

> Adjust the color temperature in Wayland compositors depending on the sunset/sunrise times.
> More information: <https://manned.org/wlsunset>.

- Automatically compute sunset/sunrise times based on the specified location:

`wlsunset -l {{latitude}} -L {{longitude}}`

- Manually set the sunset/sunrise times (time format: `HH:MM`):

`wlsunset -s {{sunset_time}} -S {{sunrise_time}}`

- Set the high and low temperatures (default: high - 6500, low - 4000):

`wlsunset -T {{high_temp}} -t {{low_temp}}`

- Set the animation time to `n` seconds (only applicable when using manual sunset/sunrise times):

`wlsunset -d {{n}} -s {{sunset_time}} -S {{sunrise_time}}`

- Set the gamma (default: 1.0):

`wlsunset -g {{gamma_value}}`
