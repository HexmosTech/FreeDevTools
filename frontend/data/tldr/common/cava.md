---
title: "Visualize Audio - Control CAVA Visualizer | Online Free DevTools by Hexmos"
name: cava
path: "/freedevtools/tldr/common/cava/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cava/"
description: "Visualize audio spectrum with CAVA. Control audio visualization parameters, customize colors, and reload configurations easily. Free online tool, no registration required."
category: common
keywords:
- audio visualizer
- spectrum analyzer
- command line visualizer
- terminal visualizer
- linux audio
- macos audio
- cava visualizer
- cross-platform audio
- audio frequency analysis
- real-time audio visualization
features:
- Start and control the audio visualizer from the command line
- Customize the visualizer with configuration files
- Adjust sensitivity and number of bars dynamically
- Reload configurations and colors during runtime
- Cycle foreground and background colors for custom themes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cava

> Cross-platform audio visualizer.
> More information: <https://github.com/karlstav/cava#usage>.

- Start the visualizer:

`cava`

- Use the specified configuration file:

`cava -p {{path/to/file}}`

- Increase/Decrease sensitivity:

`{{<ArrowUp>|<ArrowDown>}}`

- Increase/Decrease the number of bars:

`{{<ArrowRight>|<ArrowLeft>}}`

- Reload the configuration file (this resets the number of bars and sensitivity):

`<r>`

- Reload colors from the configuration file:

`<c>`

- Cycle the foreground/background color:

`{{<f>|<b>}}`

- Quit:

`<q>`
