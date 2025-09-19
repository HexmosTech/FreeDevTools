---
title: "Display Printer Status - Control Printing with lpstat | Online Free DevTools by Hexmos"
name: lpstat
path: /freedevtools/tldr/osx/lpstat
canonical: "https://hexmos.com/freedevtools/tldr/osx/lpstat/"
description: "Display printer status information with lpstat. Monitor print jobs, manage printers, and diagnose printing issues efficiently. Free online tool, no registration required."
category: osx
keywords:
  - printer status
  - print job monitor
  - CUPS server status
  - printing management
  - printer diagnostics
  - command line printing
  - lpstat command
  - printing classes status
  - lpstat examples
  - printer encryption status
features:
  - Show a long listing of printers, classes, and jobs
  - Force encryption when connecting to the CUPS server
  - Display the ranking of print jobs
  - Check if the CUPS server is running
  - Display all available status information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lpstat

> Display status information about the current classes, jobs, and printers.
> More information: <https://keith.github.io/xcode-man-pages/lpstat.1.html>.

- Show a long listing of printers, classes, and jobs:

`lpstat -l`

- Force encryption when connecting to the CUPS server:

`lpstat -E`

- Show the ranking of print jobs:

`lpstat -R`

- Show whether or not the CUPS server is running:

`lpstat -r`

- Show all status information:

`lpstat -t`
