---
title: "PHP Version Manager - Control PHP Environments | Free DevTools"
name: phpenv
path: /freedevtools/tldr/php/phpenv
canonical: "https://hexmos.com/freedevtools/tldr/php/phpenv/"
description: "Manage PHP versions effectively with phpenv. Install, switch, and isolate PHP environments for diverse projects. Free online tool, no registration required."
category: common
keywords:
- php version manager
- php environment control
- phpenv version control
- php version installation
- php local version
- php global version
- php rehash command
- php shim files
- linux php version
- macos php version
features:
- Install specific PHP versions globally
- Refresh shim files for PHP binaries
- List all installed PHP versions
- Set global and local PHP versions
- Unset local PHP versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phpenv

> A PHP version manager for development purposes.
> More information: <https://github.com/phpenv/phpenv>.

- Install a PHP version globally:

`phpenv install {{version}}`

- Refresh shim files for all PHP binaries known to `phpenv`:

`phpenv rehash`

- List all installed PHP versions:

`phpenv versions`

- Display the currently active PHP version:

`phpenv version`

- Set the global PHP version:

`phpenv global {{version}}`

- Set the local PHP version, which overrides the global version:

`phpenv local {{version}}`

- Unset the local PHP version:

`phpenv local --unset`
