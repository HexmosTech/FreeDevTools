---
title: "PHPENMOD - Enable PHP Extensions | Free DevTools"
name: phpenmod
path: /freedevtools/tldr/linux/phpenmod
canonical: "https://hexmos.com/freedevtools/tldr/linux/phpenmod/"
description: "Enable PHP extensions easily with phpenmod. Manage PHP modules across different versions and SAPIs on Debian-based systems. Free online tool, no registration required."
category: linux
keywords:
  - php extension manager
  - php module enable
  - debian php extension
  - linux php module
  - php cli extension
  - php sapi manager
  - phpenmod command
  - php version manager
  - enable php json
  - manage php extensions
features:
  - Enables PHP extensions on Debian systems.
  - Supports specifying PHP versions.
  - Allows selection of specific SAPIs (e.g., cli, apache).
  - Enables multiple extensions simultaneously.
  - Simplifies PHP extension management via command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phpenmod

> Enable PHP extensions on Debian-based OSes.
> More information: <https://salsa.debian.org/php-team/php-defaults>.

- Enable the JSON extension for every SAPI of every PHP version:

`sudo phpenmod {{json}}`

- Enable the JSON extension for PHP 7.3 with the cli SAPI:

`sudo phpenmod -v {{7.3}} -s {{cli}} {{json}}`
