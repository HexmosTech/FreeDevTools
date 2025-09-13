---
title: "Pulumi Destroy - Remove Cloud Resources with Pulumi | Free DevTools"
name: pulumi-destroy
path: /freedevtools/tldr/pulumi/pulumi-destroy
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-destroy/"
description: "Destroy cloud resources efficiently with Pulumi Destroy. Safely delete stacks, manage deployments, and clean up infrastructure as code. Free online tool, no registration required."
category: common
keywords:
- Pulumi destroy
- infrastructure as code destroy
- cloud resource removal
- Pulumi stack deletion
- IaC stack destroy
- pulumi cli destroy
- cloud infrastructure cleanup
- pulumi deployment removal
- pulumi resource management
- cloud automation destroy
features:
- Destroy all resources in a Pulumi stack
- Remove a Pulumi stack and its configuration
- Automatically approve destruction after previewing
- Exclude protected resources from destruction
- Continue destruction even if errors occur
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pulumi destroy

> Destroy all existing resources in a stack.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_destroy/>.

- Destroy all resources in the current stack:

`pulumi destroy`

- Destroy all resources in a specific stack:

`pulumi destroy {{[-s|--stack]}} {{stack}}`

- Automatically approve and destroy resources after previewing:

`pulumi destroy {{[-y|--yes]}}`

- Exclude protected resources from being destroyed:

`pulumi destroy --exclude-protected`

- Remove the stack and its configuration file after all resources in the stack are deleted:

`pulumi destroy --remove`

- Continue destroying the resources, even if an error is encountered:

`pulumi destroy --continue-on-error`
