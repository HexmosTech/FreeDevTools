---
title: "SFDK Config - Configure SFDK | Online Free DevTools by Hexmos"
name: sfdk-config
path: /freedevtools/tldr/sfdk/sfdk-config
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-config/"
description: "Configure SFDK settings and manage different scopes with SFDK Config. Set, mask, and clear configuration options. Free online tool, no registration required."
category: common
keywords:
- sfdk configuration
- sfdk settings manager
- sailfishos development
- qtcreator sfdk
- sfdk global config
- sfdk session config
- sfdk command config
- sfdk option management
- sfdk value setting
- sfdk option masking
features:
- Configure SFDK settings across scopes
- Set specific configuration values
- Mask configuration options
- Clear configuration option values
- Run subcommands in specified scope
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sfdk config

> Configures sfdk.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/10-general/doc/command.config.adoc>.

- Show configuration in all scopes:

`sfdk config --show`

- Set a configuration value:

`sfdk config {{name}}={{value}}`

- Mask an option as empty:

`sfdk config {{name}}=`

- Mask an option as empty without pushing it at the inner scope:

`sfdk config {{name}}`

- Clear option value:

`sfdk --drop {{name}}`

- Run subcommand in specified scope (`global`, `session` or `command`):

`sfdk config --{{scope}} {{subcommand}}`
