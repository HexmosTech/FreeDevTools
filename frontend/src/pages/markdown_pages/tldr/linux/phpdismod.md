---
title: "PHP Extension Disabler - Disable PHP Extensions on Debian | Free DevTools"
name: phpdismod
path: /freedevtools/tldr/linux/phpdismod
canonical: "https://hexmos.com/freedevtools/tldr/linux/phpdismod/"
description: "Disable PHP extensions easily with phpdismod. Manage PHP configurations on Debian-based systems with this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - php extension disabler
  - debian php management
  - linux php configuration
  - phpdismod command
  - disable php extensions
  - manage php modules
  - command line php
  - debian php tools
  - php version control
  - system php control
features:
  - Disable specific PHP extensions.
  - Control extensions per PHP version.
  - Manage extensions for various SAPIs (Server Application Programming Interfaces).
  - Simplify Debian PHP configuration.
  - Streamline PHP extension management via command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phpdismod

> Disable PHP extensions on Debian-based OSes.
> More information: <https://salsa.debian.org/php-team/php-defaults>.

- Disable the JSON extension for every SAPI of every PHP version:

`sudo phpdismod {{json}}`

- Disable the JSON extension for PHP 7.3 with the cli SAPI:

`sudo phpdismod -v {{7.3}} -s {{cli}} {{json}}`
