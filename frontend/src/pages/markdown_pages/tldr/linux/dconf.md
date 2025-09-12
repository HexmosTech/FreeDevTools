---
title: "dconf - Manage dconf Databases | Free DevTools"
name: dconf
path: /freedevtools/tldr/linux/dconf
canonical: "https://hexmos.com/freedevtools/tldr/linux/dconf/"
description: "Manage dconf databases with dconf command. Inspect, modify, and reset dconf settings on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- dconf database management
- linux configuration tool
- gsettings alternative
- dconf read write reset
- command line dconf editor
- dconf settings editor linux
- dconf dump command
- dconf watch changes
- linux dconf command
- dconf path configuration
features:
- Read dconf key values
- List dconf directory contents
- Write dconf key values
- Reset dconf key values to default
- Watch for changes in dconf keys or directories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dconf

> Manage dconf databases.
> See also: `dconf-read`, `dconf-reset`, `dconf-write`, `gsettings`.
> More information: <https://manned.org/dconf>.

- Print a specific key value:

`dconf read /{{path/to/key}}`

- Print a specific path sub-directories and sub-keys:

`dconf list /{{path/to/directory}}/`

- Write a specific key value:

`dconf write /{{path/to/key}} "{{value}}"`

- Reset a specific key value:

`dconf reset /{{path/to/key}}`

- Watch a specific key/directory for changes:

`dconf watch /{{path/to/key|/path/to/directory}}/`

- Dump a specific directory in INI file format:

`dconf dump /{{path/to/directory}}/`
