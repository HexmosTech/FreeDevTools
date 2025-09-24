---
title: "Pulumi Up - Create Infrastructure with Pulumi | Online Free DevTools by Hexmos"
name: pulumi-up
path: /freedevtools/tldr/pulumi/pulumi-up
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-up/"
description: "Create infrastructure with Pulumi Up, a command-line tool to deploy and update resources. Manage cloud infrastructure effortlessly with Pulumi. Free online tool, no registration required."
category: common
keywords:
- pulumi infrastructure as code
- pulumi cloud deployment
- pulumi stack update
- pulumi infrastructure automation
- pulumi command line interface
- pulumi resource management
- pulumi infrastructure provisioning
- pulumi aws deployment
- pulumi azure deployment
- pulumi gcp deployment
features:
- Deploy infrastructure using Pulumi stacks
- Preview changes before deployment
- Automatically approve updates
- Suppress stack outputs during deployment
- Continue updates even if errors occur
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulumi up

> Create or update the resources in a stack.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_up/>.

- Preview and deploy changes to a program and/or infrastructure:

`pulumi up`

- Automatically approve and perform the update after previewing it:

`pulumi up {{[-y|--yes]}}`

- Preview and deploy changes in a specific stack:

`pulumi up {{[-s|--stack]}} {{stack}}`

- Don't display stack outputs:

`pulumi up --suppress-outputs`

- Continue updating the resources, even if an error is encountered:

`pulumi up --continue-on-error`
