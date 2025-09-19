---
title: "NPM Config - Manage NPM Configuration | Online Free DevTools by Hexmos"
name: npm-config
path: /freedevtools/tldr/npm/npm-config
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-config/"
description: "Manage NPM configurations effectively with NPM Config. Control settings, retrieve values, and update configurations. Free online tool, no registration required."
category: common
keywords:
- npm config management
- npm configuration settings
- npm registry config
- npm config get
- npm config set
- npm config delete
- npm config list
- npm config edit
- node package manager config
- npm global config
features:
- List all NPM configuration settings
- Get the value of a specific configuration key
- Set a configuration key to a specific value
- Delete a configuration key
- Edit the global NPM configuration file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm config

> Manage the `npm` configuration settings.
> More information: <https://docs.npmjs.com/cli/npm-config>.

- Show all configuration settings:

`npm {{[c|config]}} list`

- List all configuration settings as `JSON`:

`npm {{[c|config]}} list --json`

- Get the value of a specific configuration key:

`npm {{[c|config]}} get {{key}}`

- Set a configuration key to a specific value:

`npm {{[c|config]}} set {{key}} {{value}}`

- Delete a configuration key:

`npm {{[c|config]}} delete {{key}}`

- Edit the global npm configuration file in the default editor:

`npm {{[c|config]}} edit`

- Attempt to repair invalid configuration items:

`npm {{[c|config]}} fix`
