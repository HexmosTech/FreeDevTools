---
title: "Profile Analyzer - Visualize Profiling Data | Free DevTools"
name: pprof
path: /freedevtools/tldr/common/pprof
canonical: "https://hexmos.com/freedevtools/tldr/common/pprof/"
description: "Visualize profiling data with pprof. Analyze CPU usage, memory allocation, and more. Free online tool, no registration required."
category: common
keywords:
- profiling data analyzer
- performance profile viewer
- cpu profile analysis
- memory profile analysis
- heap profile visualization
- go profiling tools
- pprof report generator
- pprof web interface
- performance bottleneck detection
- profiling data visualization
features:
- Generate text reports from profiling data
- Create SVG graphs to visualize profiling results
- Launch an interactive pprof session for manual analysis
- Run a web server for a web-based pprof interface
- Fetch profiles from HTTP servers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pprof

> Visualize and analyze profiling data.
> More information: <https://github.com/google/pprof>.

- Generate a text report from a specific profiling file, on fibbo binary:

`pprof -top {{./fibbo}} {{./fibbo-profile.pb.gz}}`

- Generate a graph and open it on a web browser:

`pprof -svg {{./fibbo}} {{./fibbo-profile.pb.gz}}`

- Run pprof in interactive mode to be able to manually launch `pprof` on a file:

`pprof {{./fibbo}} {{./fibbo-profile.pb.gz}}`

- Run a web server that serves a web interface on top of `pprof`:

`pprof -http={{localhost:8080}} {{./fibbo}} {{./fibbo-profile.pb.gz}}`

- Fetch a profile from an HTTP server and generate a report:

`pprof {{http://localhost:8080/debug/pprof}}`
