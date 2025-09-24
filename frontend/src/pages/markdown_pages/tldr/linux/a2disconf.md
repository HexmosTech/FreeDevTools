---
title: "A2disconf - Disable Apache Configs | Online Free DevTools by Hexmos"
name: a2disconf
path: /freedevtools/tldr/linux/a2disconf
canonical: "https://hexmos.com/freedevtools/tldr/linux/a2disconf/"
description: "Disable Apache configurations easily with A2disconf. Deactivate specified Apache configuration files on Debian systems. Free online tool, no registration required."
category: linux
keywords:
  - apache configuration disable
  - a2disconf debian
  - disable apache config file
  - apache config management
  - debian server configuration
  - a2disconf command line
  - apache config a2disconf
  - server config disable
  - apache module management
  - linux apache config
features:
  - Disable specified Apache configuration files
  - Prevent loading configuration files on startup
  - Operate silently using quiet mode
  - Manage Apache server configurations on Debian
  - Streamline Apache config deactivation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# a2disconf

> Disable an Apache configuration file on Debian-based OSes.
> More information: <https://manned.org/a2disconf.8>.

- Disable a configuration file:

`sudo a2disconf {{configuration_file}}`

- Don't show informative messages:

`sudo a2disconf {{[-q|--quiet]}} {{configuration_file}}`
