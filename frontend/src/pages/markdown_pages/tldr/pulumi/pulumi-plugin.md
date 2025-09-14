---
title: "Pulumi Plugin Manager - Control Plugins | Free DevTools"
name: pulumi-plugin
path: /freedevtools/tldr/pulumi/pulumi-plugin
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-plugin/"
description: "Control Pulumi plugins with Pulumi Plugin Manager. Install, list, and remove resource provider plugins. Free online tool, no registration required."
category: common
keywords:
- Pulumi plugin manager
- Pulumi resource plugin
- Infrastructure as code plugin
- Pulumi CLI plugin
- Pulumi plugin install
- Pulumi plugin list
- Pulumi plugin remove
- IaC plugin manager
- Cloud resource plugin
- Pulumi version management
features:
- List installed Pulumi plugins.
- Install specific versions of Pulumi plugins.
- Remove Pulumi plugins by kind, name, and version.
- Manage resource and language provider plugins.
- Display help information for plugin commands.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pulumi plugin

> Manage language and resource provider plugins manually.
> Other commands manage these automatically.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_plugin/>.

- List all plugins on the downloaded cache:

`pulumi plugin ls`

- List plugins being used by the current project in JSON format:

`pulumi plugin {{[-p|--project]}} {{[-j|--json]}}`

- Install a plugin kind (e.g resource) with the latest version or a specific one:

`pulumi plugin install {{kind}} {{name}} {{version}}`

- Remove a plugin kind (e.g. resource) and interactively pick a version or provide a specific one:

`pulumi plugin rm {{kind}} {{name}} {{version}}`

- Display help:

`pulumi plugin {{[-h|--help]}}`
