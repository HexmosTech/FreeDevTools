---
title: "Enable Apache Modules - a2enmod Command | Online Free DevTools by Hexmos"
name: a2enmod
path: /freedevtools/tldr/linux/a2enmod
canonical: "https://hexmos.com/freedevtools/tldr/linux/a2enmod/"
description: "Enable Apache modules easily with the a2enmod command. Manage Apache configurations and activate necessary modules for your web server. Free online tool, no registration required."
category: linux
keywords:
  - apache module enablement
  - a2enmod command linux
  - a2enmod debian
  - apache module management
  - enable apache modules ubuntu
  - linux apache configuration
  - web server module control
  - a2enmod tutorial
  - apache2 module enable
  - command line apache config
features:
  - Enables Apache modules with a single command.
  - Simplifies Apache configuration management.
  - Allows for quick activation of needed modules.
  - Provides a command-line interface for module control.
  - Supports quiet mode to suppress output messages.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# a2enmod

> Enable an Apache module on Debian-based OSes.
> More information: <https://manned.org/a2enmod.8>.

- Enable a module:

`sudo a2enmod {{module}}`

- Don't show informative messages:

`sudo a2enmod {{[-q|--quiet]}} {{module}}`
