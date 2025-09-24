---
title: "KScreen Console - Query KScreen Status | Online Free DevTools by Hexmos"
name: kscreen-console
path: /freedevtools/tldr/linux/kscreen-console
canonical: "https://hexmos.com/freedevtools/tldr/linux/kscreen-console/"
description: "Query KScreen's status with KScreen Console. Monitor display configurations and troubleshoot display issues. Free online tool, no registration required."
category: linux
keywords:
- kscreen status
- display configuration
- linux display manager
- kscreen console utility
- monitor display changes
- query outputs
- kscreen configuration
- kde display settings
- linux display resolution
- display bug reporting
features:
- Show all outputs for bug reporting
- Display KScreen configuration file paths
- Show KScreen output information and configuration
- Monitor KScreen for display changes
- Display current KScreen configuration as JSON
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kscreen-console

> Query KScreen's status.
> More information: <https://manned.org/kscreen-console>.

- Show all outputs and configuration files to attach to a bug report:

`kscreen-console bug`

- Show paths to KScreen configuration files:

`kscreen-console config`

- Show KScreen output information and configuration:

`kscreen-console outputs`

- Monitor for changes:

`kscreen-console monitor`

- Show the current KScreen configuration as JSON:

`kscreen-console json`

- Display help:

`kscreen-console {{[-h|--help]}}`

- Display help including Qt specific command-line options:

`kscreen-console --help-all`
