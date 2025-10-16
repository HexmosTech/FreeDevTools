---
title: "pw-profiler - Profile Instances | Online Free DevTools by Hexmos"
name: pw-profiler
path: "/freedevtools/tldr/linux/pw-profiler/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pw-profiler/"
description: "Profile instances easily with pw-profiler. Analyze performance, identify bottlenecks and optimize applications. Free online tool, no registration required."
category: linux
keywords:
- pipewire profiler
- linux profiler
- instance profiler
- command line profiler
- pw-profiler linux
- performance analysis
- bottleneck detection
- application optimization
- pipewire debugging
- remote instance profiling
features:
- Profile local PipeWire instances
- Profile remote PipeWire instances over a network
- Log profiling data to a specified file
- Generate gnuplot files for visualization
- Generate HTML file for visualizing results
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pw-profiler

> Profile a local or remote instance.
> More information: <https://docs.pipewire.org/page_man_pw-profiler_1.html>.

- Profile the default instance, logging to `profile.log` (`gnuplot` files and a HTML file for result visualizing are also generated):

`pw-profiler`

- Change the log output file:

`pw-profiler {{[-o|--output]}} {{path/to/file.log}}`

- Profile a remote instance:

`pw-profiler {{[-r|--remote]}} {{remote_name}}`

- Display help:

`pw-profiler {{[-h|--help]}}`
