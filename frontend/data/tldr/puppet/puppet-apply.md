---
title: "Puppet Apply - Execute Manifests Locally | Online Free DevTools by Hexmos"
name: puppet-apply
path: "/freedevtools/tldr/puppet/puppet-apply/"
canonical: "https://hexmos.com/freedevtools/tldr/puppet/puppet-apply/"
description: "Apply Puppet manifests locally with Puppet Apply. Automate system configuration and manage infrastructure as code. Free online tool, no registration required."
category: common
keywords:
- puppet manifest apply
- puppet apply command
- puppet configuration management
- puppet infrastructure automation
- puppet code execution
- puppet module management
- puppet hiera configuration
- puppet apply linux
- puppet apply windows
- puppet apply macos
features:
- Apply Puppet manifests from file paths
- Execute Puppet code directly from the command line
- Specify custom module paths for manifest application
- Utilize custom Hiera configuration files
- Automate system configuration management locally
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# puppet apply

> Apply Puppet manifests locally.
> More information: <https://github.com/puppetlabs/puppet/blob/main/references/man/apply.md>.

- Apply a manifest:

`puppet apply {{path/to/manifest}}`

- Execute puppet code:

`puppet apply --execute {{code}}`

- Use a specific module and hiera configuration file:

`puppet apply --modulepath {{path/to/directory}} --hiera_config {{path/to/file}} {{path/to/manifest}}`
