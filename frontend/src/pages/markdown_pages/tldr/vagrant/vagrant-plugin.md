---
title: "Manage Vagrant Plugins - Enhance Your Vagrant Workflow | Online Free DevTools by Hexmos"
name: vagrant-plugin
path: /freedevtools/tldr/vagrant/vagrant-plugin
canonical: "https://hexmos.com/freedevtools/tldr/vagrant/vagrant-plugin/"
description: "Manage Vagrant plugins efficiently with Vagrant Plugin Manager. Install, update, and uninstall plugins to extend Vagrant's functionality. Free online tool, no registration required."
category: common
keywords:
- Vagrant plugin manager
- Vagrant plugin installer
- Vagrant plugin update
- Vagrant plugin uninstall
- Vagrant plugin list
- Virtualization plugin management
- RubyGems Vagrant plugins
- Vagrant plugin development
- HashiCorp Vagrant plugins
- Vagrant extension tools
features:
- Install Vagrant plugins from remote repositories
- Install Vagrant plugins from local file sources
- Update all installed Vagrant plugins to the latest version
- Uninstall specific Vagrant plugins
- List all currently installed Vagrant plugins
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vagrant plugin

> Manage Vagrant plugins.
> See also: `vagrant`.
> More information: <https://developer.hashicorp.com/vagrant/docs/cli/plugin>.

- List all the plugins currently installed:

`vagrant plugin list`

- Install a plugin from remote repositories, usually RubyGems:

`vagrant plugin install {{vagrant_vbguest}}`

- Install a plugin from a local file source:

`vagrant plugin install {{path/to/my_plugin.gem}}`

- Update all installed plugins to their latest version:

`vagrant plugin update`

- Update a plugin to the latest version:

`vagrant plugin update {{vagrant_vbguest}}`

- Uninstall a specific plugin:

`vagrant plugin uninstall {{vagrant_vbguest}}`
