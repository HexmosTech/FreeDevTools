---
title: "DVC Config - Manage DVC Repository Configurations | Online Free DevTools by Hexmos"
name: dvc-config
path: /freedevtools/tldr/dvc/dvc-config
canonical: "https://hexmos.com/freedevtools/tldr/dvc/dvc-config/"
description: "Manage DVC repository configurations with DVC Config. Configure project settings, remotes and parameters via command line. Free online tool, no registration required."
category: common
keywords:
- dvc config
- dvc repository configuration
- data version control configuration
- dvc remote config
- dvc project config
- dvc global config
- dvc system config
- dvc config settings
- dvc config parameters
- dvc command line config
features:
- Set DVC configurations at project level
- Configure DVC remotes easily
- Unset DVC configuration values
- Manage DVC settings from command line
- Configure DVC at local, global, or system level
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dvc config

> Low level command to manage custom configuration options for dvc repositories.
> These configurations can be on project, local, global, or system level.
> More information: <https://dvc.org/doc/command-reference/config>.

- Get the name of the default remote:

`dvc config core.remote`

- Set the project's default remote:

`dvc config core.remote {{remote_name}}`

- Unset the project's default remote:

`dvc config {{[-u|--unset]}} core.remote`

- Get the configuration value for a specified key for the current project:

`dvc config {{key}}`

- Set the configuration value for a key on a project level:

`dvc config {{key}} {{value}}`

- Unset a project level configuration value for a given key:

`dvc config {{[-u|--unset]}} {{key}}`

- Set a local, global, or system level configuration value:

`dvc config --{{local|global|system}} {{key}} {{value}}`
