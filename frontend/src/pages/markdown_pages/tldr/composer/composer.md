---
title: "Manage PHP Dependencies - Composer Package Manager | Online Free DevTools by Hexmos"
name: composer
path: /freedevtools/tldr/composer/composer
canonical: "https://hexmos.com/freedevtools/tldr/composer/composer/"
description: "Manage PHP dependencies easily with Composer Package Manager. Install, update, and remove packages for your PHP projects. Free online tool, no registration required."
category: common
keywords:
- PHP dependency manager
- Composer package management
- PHP composer require
- Composer install update
- PHP project dependencies
- Composer lock file
- PHP package installer
- Composer self-update
- Common platform commands
- PHP Composer tool
features:
- Install PHP project dependencies
- Update PHP packages and lock file
- Remove packages from PHP projects
- Manage PHP project dependencies
- Update Composer to latest version
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# composer

> A package-based dependency manager for PHP projects.
> More information: <https://getcomposer.org/doc/03-cli.md>.

- Interactively create a `composer.json` file:

`composer init`

- Add a package as a dependency for this project, adding an entry to `composer.json`:

`composer require {{user/package}}`

- Install all the dependencies in this project's `composer.json` and create `composer.lock`:

`composer install`

- Uninstall a package from this project, removing it as a dependency from `composer.json` and `composer.lock`:

`composer remove {{user/package}}`

- Update all the dependencies in this project's `composer.json` and note new versions in `composer.lock` file:

`composer update`

- Update only `composer.lock` after updating `composer.json` manually:

`composer update --lock`

- Learn more about why a dependency can't be installed:

`composer why-not {{user/package}}`

- Update composer to its latest version:

`composer self-update`
