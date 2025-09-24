---
title: "Pulumi Config - Manage Stack Configuration | Online Free DevTools by Hexmos"
name: pulumi-config
path: /freedevtools/tldr/pulumi/pulumi-config
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-config/"
description: "Manage Pulumi stack configuration efficiently with Pulumi Config. Securely store secrets and customize settings for infrastructure as code. Free online tool, no registration required."
category: common
keywords:
- pulumi configuration
- stack configuration management
- pulumi stack secrets
- infrastructure as code configuration
- pulumi config get
- pulumi config set
- pulumi config rm
- pulumi config stack
- cloud configuration
- infrastructure configuration
features:
- View Pulumi stack configuration in JSON format.
- Get the value of a specific Pulumi configuration key.
- Set configuration values, including secrets, for a Pulumi stack.
- Remove specific configuration values from a Pulumi stack.
- Manage configurations for multiple stacks using config files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulumi config

> Manage configuration of a Pulumi stack.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_config/>.

- View current configuration in JSON format:

`pulumi config {{[-j|--json]}}`

- View configuration for a specified stack:

`pulumi config {{[-s|--stack]}} {{stack_name}}`

- Get the value of a configuration key:

`pulumi config get {{key}}`

- Remove a configuration value:

`pulumi config rm {{key}}`

- Set a value for a configuration key from a file:

`cat {{path/to/file}} | pulumi config set {{key}}`

- Set a secret value (e.g. API key) for a configuration key and store/display as ciphertext:

`pulumi config set --secret {{key}} {{S3cr37_value}}`

- Remove multiple configuration values from a specified configuration file:

`pulumi config --config-file {{path/to/file}} rm-all {{key1 key2 ...}}`
