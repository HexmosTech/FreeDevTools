---
title: "Sailfish SDK - Control Sailfish OS Apps | Online Free DevTools by Hexmos"
name: sfdk
path: /freedevtools/tldr/sfdk/sfdk
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk/"
description: "Control Sailfish OS applications with Sailfish SDK command-line tool. Manage development, testing, and building on Sailfish. Free online tool, no registration required."
category: common
keywords:
- Sailfish SDK control
- Sailfish command-line tool
- Sailfish OS development
- Sailfish application testing
- Sailfish SDK building
- SFDK command-line
- SFDK Sailfish OS
- SFDK development
- SFDK application control
- Linux Sailfish development
features:
- Execute Sailfish SDK subcommands.
- Specify a custom working directory for SFDK commands.
- Configure SFDK with custom name-value pairs.
- Display help documentation for various SFDK topics.
- Check the version of the Sailfish SDK.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk

> The command line frontend of the Sailfish SDK.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/10-general/doc/module.adoc>.

- Execute a subcommand:

`sfdk {{subcommand}}`

- Execute a subcommand on a custom working directory:

`git -C {{path/to/directory}} {{subcommand}}`

- Execute a subcommand with a given configuration set:

`git -c '{{name}}={{value}}' {{subcommand}}`

- Display help:

`sfdk {{[-h|--help]}}`

- Display help for specific topic (`building`, `testing`, `maintaining`, `ide`, `all`):

`sfdk --help-{{topic}}`

- Display version:

`sfdk --version`
