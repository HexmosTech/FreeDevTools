---
title: "Pulumi Refresh - Update Infrastructure State | Free DevTools"
name: pulumi-refresh
path: /freedevtools/tldr/pulumi/pulumi-refresh
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-refresh/"
description: "Update infrastructure state with Pulumi Refresh. Synchronize your stack's resources with the actual cloud provider state. Free online tool, no registration required."
category: common
keywords:
- infrastructure refresh
- pulumi state management
- cloud resource synchronization
- pulumi cloud automation
- infrastructure as code refresh
- pulumi refresh command
- infrastructure state update
- pulumi infrastructure management
- IaC state synchronization
- pulumi cloud deployment
features:
- Synchronizes the stack's state with the cloud provider.
- Detects changes made outside of Pulumi.
- Applies infrastructure changes to the current stack.
- Shows a rich diff of changes to be applied.
- Prevents unexpected changes during refresh with error handling.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pulumi refresh

> Refresh the resources in a stack.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_refresh/>.

- Compare the current stack's state with the state in the cloud provider and adopt any changes into the current stack:

`pulumi refresh`

- Refresh resources in the current stack and show the operation as a rich diff:

`pulumi refresh --diff`

- Refresh resources in the current stack and return an error if any changes occur during the refresh:

`pulumi refresh --expect-no-changes`

- Only show a preview of the refresh, but don't perform the refresh itself:

`pulumi refresh --preview-only`

- The name of the stack to operate on (defaults to the current stack):

`pulumi refresh {{[-s|--stack]}} {{stack_name}}`

- Display help:

`pulumi refresh {{[-h|--help]}}`
