---
title: "Generate Network Stats PNGs - vnstati Command | Free DevTools"
name: vnstati
path: /freedevtools/tldr/linux/vnstati
canonical: "https://hexmos.com/freedevtools/tldr/linux/vnstati/"
description: "Generate PNG network statistics images with vnstati.  Visualize your network traffic data easily with this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - network traffic visualization
  - vnstati png generation
  - command-line network statistics
  - network usage png export
  - linux network monitoring
  - vnstat image output
  - png network graph generator
  - network data png
  - vnstati command-line tool
  - system network statistics png
features:
  - Outputs network statistics as PNG images.
  - Generates summary reports of monthly, daily, and all-time network usage.
  - Creates top 10 traffic-intensive days reports.
  - Displays monthly traffic statistics for the past year.
  - Presents hourly traffic statistics for the past 24 hours.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vnstati

> PNG image output support for vnStat.
> More information: <https://manned.org/vnstati>.

- Output a summary of the last 2: months, days, and all-time:

`vnstati --summary --iface {{network_interface}} --output {{path/to/output.png}}`

- Output the 10 most traffic-intensive days of all time:

`vnstati --top 10 --iface {{network_interface}} --output {{path/to/output.png}}`

- Output monthly traffic statistics from the last 12 months:

`vnstati --months --iface {{network_interface}} --output {{path/to/output.png}}`

- Output hourly traffic statistics from the last 24 hours:

`vnstati --hours --iface {{network_interface}} --output {{path/to/output.png}}`
