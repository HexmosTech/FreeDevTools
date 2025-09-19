---
title: "PHP Extension Manager - Control PHP Versions & Extensions | Online Free DevTools by Hexmos"
name: phpquery
path: /freedevtools/tldr/linux/phpquery
canonical: "https://hexmos.com/freedevtools/tldr/linux/phpquery/"
description: "Manage PHP extensions efficiently with phpquery.  List available versions, SAPIs, and enabled extensions with ease. Free online tool, no registration required."
category: linux
keywords:
  - php extension manager
  - php version manager
  - php sapi manager
  - php extension checker
  - debian php manager
  - linux php management
  - command line php tools
  - php module management
  - php configuration tool
  - phpcli management
features:
  - List available PHP versions
  - List available SAPIs for specific PHP versions
  - List enabled extensions for specific PHP versions and SAPIs
  - Check if a specific extension is enabled
  - Manage PHP configurations via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phpquery

> PHP extension manager for Debian-based OSes.
> More information: <https://code.google.com/archive/p/phpquery/wikis/CommandLineInterface.wiki>.

- List available PHP versions:

`sudo phpquery -V`

- List available SAPIs for PHP 7.3:

`sudo phpquery -v {{7.3}} -S`

- List enabled extensions for PHP 7.3 with the cli SAPI:

`sudo phpquery -v {{7.3}} -s {{cli}} -M`

- Check if the JSON extension is enabled for PHP 7.3 with the apache2 SAPI:

`sudo phpquery -v {{7.3}} -s {{apache2}} -m {{json}}`
