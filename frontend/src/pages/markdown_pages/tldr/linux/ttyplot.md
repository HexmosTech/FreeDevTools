---
title: "Plot Command-Line Data - Visualize Stdin with Ttyplot | Online Free DevTools by Hexmos"
name: ttyplot
path: /freedevtools/tldr/linux/ttyplot
canonical: "https://hexmos.com/freedevtools/tldr/linux/ttyplot/"
description: "Visualize command-line data with Ttyplot, a real-time plotting utility.  Analyze streaming data from stdin and create dynamic charts. Free online tool, no registration required."
category: linux
keywords:
  - command line data visualization
  - real time plotter
  - stdin data plotting
  - ttyplot command line
  - command line graphing
  - terminal data display
  - dynamic chart generator
  - data stream analyzer
  - command line monitoring
  - terminal plotting tool
features:
  - Plot data streamed from standard input in real-time.
  - Customize plot titles and units for better readability.
  - Visualize data from various command-line tools like ping.
  - Generate dynamic plots based on continuously changing values.
  - Monitor and analyze data directly from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ttyplot

> A realtime plotting utility for the command-line with data input from `stdin`.
> More information: <https://github.com/tenox7/ttyplot>.

- Plot the values `1`, `2` and `3` (Note: `cat` prevents `ttyplot` from exiting):

`{ echo {{1 2 3}}; cat; } | ttyplot`

- Set a specific title and unit:

`{ echo {{1 2 3}}; cat; } | ttyplot -t {{title}} -u {{unit}}`

- Use a while loop to continuously plot random values:

`{ while {{true}}; do echo {{$RANDOM}}; sleep {{1}}; done } | ttyplot`

- Parse the output from `ping` and visualize it:

`ping {{8.8.8.8}} | sed -u '{{s/^.*time=//g; s/ ms//g}}' | ttyplot -t "{{ping to 8.8.8.8}}" -u {{ms}}`
