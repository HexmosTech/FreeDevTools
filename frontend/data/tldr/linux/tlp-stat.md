---
title: "Generate TLP Status Reports - System Power Management | Online Free DevTools by Hexmos"
name: tlp-stat
path: "/freedevtools/tldr/linux/tlp-stat/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/tlp-stat/"
description: "Generate detailed system power management reports with tlp-stat.  Monitor power usage, temperatures, and device status. Free online tool, no registration required."
category: linux
keywords:
  - linux power management report
  - tlp status report generator
  - system power monitoring linux
  - tlp-stat command linux
  - linux battery status command
  - generate power usage report
  - linux thermal monitoring
  - tlp configuration report
  - linux device status report
  - power supply diagnostics linux
features:
  - Generate comprehensive system power status reports.
  - Monitor battery, processor, and disk activity.
  - Display detailed information on various hardware components.
  - Show current TLP configuration settings.
  - Provide power supply diagnostics and thermal information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlp-stat

> Generate TLP status reports.
> See also: `tlp`.
> More information: <https://linrunner.de/tlp/usage/tlp-stat>.

- Generate status report with configuration and all active settings:

`sudo tlp-stat`

- Show information about various devices:

`sudo tlp-stat --{{battery|disk|processor|graphics|pcie|rfkill|usb}}`

- Show verbose information about devices that support verbosity:

`sudo tlp-stat {{[-v|--verbose]}} --{{battery|processor|pcie|usb}}`

- Show configuration:

`sudo tlp-stat {{[-c|--config]}}`

- Monitor [p]ower supply `udev` [ev]ents:

`sudo tlp-stat {{[-P|--pev]}}`

- Show [p]ower [sup]ply diagonistics:

`sudo tlp-stat --psup`

- Show [t]emperatures and fan speed:

`sudo tlp-stat {{[-t|--temp]}}`

- Show general system information:

`sudo tlp-stat {{[-s|--system]}}`
