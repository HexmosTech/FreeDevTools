---
title: "a2ensite - Enable Apache Virtual Hosts | Online Free DevTools by Hexmos"
name: a2ensite
path: /freedevtools/tldr/linux/a2ensite
canonical: "https://hexmos.com/freedevtools/tldr/linux/a2ensite/"
description: "Enable Apache virtual hosts easily with a2ensite.  Manage and control your website configurations on Debian-based systems. Free online tool, no registration required."
category: linux
keywords:
  - a2ensite command
  - apache virtual host enable
  - debian apache configuration
  - linux web server management
  - enable apache site
  - disable apache site
  - a2dissite command
  - apache2 configuration
  - website management linux
  - virtual host control
features:
  - Enables Apache virtual hosts with a single command.
  - Simplifies website configuration on Debian systems.
  - Integrates seamlessly with the Apache2 web server.
  - Allows for quick enabling and disabling of virtual hosts.
  - Provides a command-line interface for managing website configurations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# a2ensite

> Enable an Apache virtual host on Debian-based OSes.
> More information: <https://manned.org/a2ensite.8>.

- Enable a virtual host:

`sudo a2ensite {{virtual_host}}`

- Don't show informative messages:

`sudo a2ensite {{[-q|--quiet]}} {{virtual_host}}`
