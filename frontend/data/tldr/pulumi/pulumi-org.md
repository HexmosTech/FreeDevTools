---
title: "Pulumi Org - Manage Cloud Organization Settings | Online Free DevTools by Hexmos"
name: pulumi-org
path: "/freedevtools/tldr/pulumi/pulumi-org/"
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-org/"
description: "Manage cloud organization configurations with Pulumi Org. Set default organizations and search resources using AI powered queries. Free online tool, no registration required."
category: common
keywords:
- pulumi organization management
- pulumi cloud configuration
- pulumi organization settings
- pulumi cloud organization
- pulumi ai resource search
- pulumi set default org
- pulumi cloud commands
- pulumi organization commands
- pulumi cloud resource management
- pulumi search organization
features:
- Set the default Pulumi organization.
- Display current organization and backend.
- Search Pulumi Cloud resources using AI.
- Display help information for the command.
- Configure Pulumi organization settings.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulumi org

> Manage Pulumi Organization configuration.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_org/>.

- Display the default organization and current backend:

`pulumi org`

- Display the default organization:

`pulumi org get-default`

- Set the default organization:

`pulumi org set-default {{organization_name}}`

- Search for resources in Pulumi Cloud using Pulumi AI with a plaintext natural language query:

`pulumi org search ai {{[-q|--query]}} {{"show me all load balancers in my organization"}}`

- Display help:

`pulumi org {{[-h|--help]}}`
