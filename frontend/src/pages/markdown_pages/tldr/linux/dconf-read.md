---
title: "Read Dconf Keys - Access Config Values | Online Free DevTools by Hexmos"
name: dconf-read
path: /freedevtools/tldr/linux/dconf-read
canonical: "https://hexmos.com/freedevtools/tldr/linux/dconf-read/"
description: "Access and read Dconf key values with ease using dconf-read.  Retrieve configuration settings and default values directly from the command line. Free online tool, no registration required."
category: linux
keywords:
  - dconf key reader
  - linux configuration reader
  - dconf value retrieval
  - gsettings command alternative
  - gnome configuration access
  - dconf database reader
  - command line configuration
  - system settings reader
  - linux system config
  - dconf read command
features:
  - Read values from specific dconf keys.
  - Retrieve default values for dconf keys.
  - Access and display configuration settings via the command line.
  - Useful for system administrators and developers.
  - Provides quick access to application settings.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dconf read

> Read key values from dconf databases.
> See also: `dconf`.
> More information: <https://manned.org/dconf>.

- Print a specific key value:

`dconf read /{{path/to/key}}`

- Print a specific key [d]efault value:

`dconf read -d /{{path/to/key}}`
