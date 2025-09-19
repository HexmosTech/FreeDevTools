---
title: "xclock Time Display - Show Analog or Digital Clocks | Online Free DevTools by Hexmos"
name: xclock
path: /freedevtools/tldr/linux/xclock
canonical: "https://hexmos.com/freedevtools/tldr/linux/xclock/"
description: "Display analog or digital clocks instantly with xclock. Customize clock format, update intervals, and choose between 12/24-hour modes. Free online tool, no registration required."
category: linux
keywords:
  - digital clock display
  - analog clock display
  - xclock command
  - linux time display
  - terminal clock
  - unix time display
  - command-line clock
  - xclock customization
  - strftime time format
  - digital clock format
features:
  - Displays analog clocks
  - Displays digital clocks in various formats
  - Allows customization using strftime format strings
  - Supports 12-hour and 24-hour clock modes
  - Offers adjustable update intervals for digital clocks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xclock

> Display the time in analog or digital form.
> More information: <https://manned.org/xclock>.

- Display an analog clock:

`xclock`

- Display a 24-hour digital clock with the hour and minute fields only:

`xclock -digital -brief`

- Display a digital clock using an strftime format string (see strftime(3)):

`xclock -digital -strftime {{format}}`

- Display a 24-hour digital clock with the hour, minute and second fields that updates every second:

`xclock -digital -strftime '%H:%M:%S' -update 1`

- Display a 12-hour digital clock with the hour and minute fields only:

`xclock -digital -twelve -brief`
