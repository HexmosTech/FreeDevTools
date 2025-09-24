---
title: "Pulumi Env - Manage Environments | Online Free DevTools by Hexmos"
name: pulumi-env
path: /freedevtools/tldr/pulumi/pulumi-env
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-env/"
description: "Manage Pulumi environments effortlessly with Pulumi Env. Create, set, edit, and delete environment configurations with ease. Free online tool, no registration required."
category: common
keywords:
- pulumi environment manager
- pulumi config manager
- pulumi environment variables
- pulumi infrastructure as code
- pulumi cloud configuration
- infrastructure environment management
- pulumi deployment environment
- pulumi stack configuration
- pulumi environment editor
- pulumi environment automation
features:
- List existing Pulumi environments
- Create new Pulumi environments
- Set environment-specific configuration values
- Edit Pulumi environment definitions
- Delete environment variables and entire environments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulumi env

> Manage Pulumi environments.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_env/>.

- List all environments:

`pulumi env ls`

- Create an environment:

`pulumi env init {{environment_name}}`

- Set a value in an environment:

`pulumi env set {{environment_name}} {{key}} {{value}}`

- Edit an environment definition:

`pulumi env edit {{environment_name}}`

- Delete a value from an environment:

`pulumi env rm {{environment_name}} {{key}}`

- Delete an environment entirely:

`pulumi env rm {{environment_name}}`

- Display help:

`pulumi env {{[-h|--help]}}`
