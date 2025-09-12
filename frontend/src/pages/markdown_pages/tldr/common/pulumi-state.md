---
title: "Pulumi State - Edit Stack State | Free DevTools"
name: pulumi-state
path: /freedevtools/tldr/common/pulumi-state
canonical: "https://hexmos.com/freedevtools/tldr/common/pulumi-state/"
description: "Edit your Pulumi stack's state with Pulumi State. Move resources, repair invalid states, and manage deployments. Free online tool, no registration required."
category: common
keywords:
- pulumi state editor
- pulumi stack management
- infrastructure as code state
- cloud resource migration
- pulumi state repair
- pulumi state delete
- pulumi resource rename
- pulumi stack manipulation
- pulumi state command line
- iac state management
features:
- Delete specific resources from a Pulumi stack's state.
- Move resources between different Pulumi stacks.
- Rename resources within a Pulumi stack.
- Repair corrupted or invalid Pulumi stack states.
- Edit a stack's state directly in a text editor.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pulumi state

> Edit the current stack's state.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_state/>.

- Delete a resource from the current stack's state:

`pulumi state delete`

- Move a resource from the current stack to another:

`pulumi state move {{resource_urn}} --dest {{stack_name}}`

- Rename a resource in the current stack's state:

`pulumi state rename`

- Repair an invalid state:

`pulumi state repair`

- Edit a stack's state in the editor specified by the `EDITOR` environment variable:

`pulumi state edit --stack {{stack_name}}`

- Display help:

`pulumi state {{[-h|--help]}}`
