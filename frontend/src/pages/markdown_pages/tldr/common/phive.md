---
title: "Phive - Securely Install PHP Packages | Free DevTools"
name: phive
path: "/freedevtools/tldr/common/phive"
canonical: "https://hexmos.com/freedevtools/tldr/common/phive/"
description: "Securely install PHP packages with Phive, the Phar Installation and Verification Environment. Manage dependencies and ensure secure PHP application deployment. Free online tool, no registration required."
category: common
keywords:
- phar installation
- php package manager
- phive install
- secure php deployment
- phar verification
- php dependency management
- global phar installation
- phar update
- command-line php
- phar alias
features:
- Install PHP Phar packages securely.
- Verify the integrity of PHP Phar packages.
- Globally install PHP applications via Phar archives.
- Update existing Phar installations to the latest versions.
- Remove unused or outdated Phar packages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phive

> The Phar Installation and Verification Environment for secure PHP application deployment.
> More information: <https://phar.io/#Usage>.

- Display a list of available aliased Phars:

`phive list`

- Install a specified Phar to the local directory:

`phive install {{alias|url}}`

- Install a specified Phar globally:

`phive install {{alias|url}} {{[-g|--global]}}`

- Install a specified Phar to a target directory:

`phive install {{alias|url}} {{[-t|--target]}} {{path/to/directory}}`

- Update all Phar files to the latest version:

`phive update`

- Remove a specified Phar file:

`phive remove {{alias|url}}`

- Remove unused Phar files:

`phive purge`

- List all available commands:

`phive help`
