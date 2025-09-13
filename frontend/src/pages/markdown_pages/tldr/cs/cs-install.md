---
title: "Coursier Install - Install Applications | Free DevTools"
name: cs-install
path: /freedevtools/tldr/cs/cs-install
canonical: "https://hexmos.com/freedevtools/tldr/cs/cs-install/"
description: "Install applications easily with Coursier Install. Manage dependencies and streamline software installation process. Free online tool, no registration required."
category: common
keywords:
- coursier install
- application installer
- dependency management
- software installation
- coursier package manager
- java application install
- scala application install
- coursier cli
- command-line installer
- package dependency resolver
features:
- Install applications from the command line
- Manage application versions with Coursier Install
- Update installed applications efficiently
- Uninstall specific applications seamlessly
- List installed applications with detailed information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cs install

> Install an application in the installation directory onfigured when installing `cs` (to enable the binary to be loaded add to your `.bash_profile` the `$ eval "$(cs install --env)"` command).
> More information: <https://get-coursier.io/docs/cli-install>.

- Install a specific application:

`cs install {{application_name}}`

- Install a specific version of an application:

`cs install {{application_name}}:{{application_version}}`

- Search an application by a specific name:

`cs search {{application_partial_name}}`

- Update a specific application if available:

`cs update {{application_name}}`

- Update all the installed applications:

`cs update`

- Uninstall a specific application:

`cs uninstall {{application_name}}`

- List all installed applications:

`cs list`

- Pass specific Java options to an installed application:

`{{application_name}} {{-Jjava_option_name1=value1 -Jjava_option_name2=value2 ...}}`
