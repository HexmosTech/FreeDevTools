---
title: "Manage Pulumi Stacks - View & Control State | Online Free DevTools by Hexmos"
name: pulumi-stack
path: /freedevtools/tldr/pulumi/pulumi-stack
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-stack/"
description: "Manage Pulumi stacks efficiently with this online Pulumi Stack tool. View state, create, list, select and delete stacks. Free online tool, no registration required."
category: common
keywords:
- Pulumi stack manager
- Infrastructure as code management
- IaC stack control
- Pulumi state viewer
- Cloud resource manager
- Pulumi stack lister
- Pulumi stack creator
- Pulumi stack selector
- Pulumi stack remover
- Pulumi cloud deployment
features:
- Create and initialize new Pulumi stacks
- List and view all stacks within a project or across projects
- Select and switch between active stacks for management
- Remove and delete existing Pulumi stacks
- Export stack state to a JSON file for backup or analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pulumi stack

> Manage stacks and view stack state.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_stack/>.

- Create a new stack:

`pulumi stack init {{stack_name}}`

- Show the stack state along with resource URNs:

`pulumi stack {{[-u|--show-urns]}}`

- List stacks in the current project:

`pulumi stack ls`

- List stacks across all projects:

`pulumi stack ls {{[-a|--all]}}`

- Select an active stack:

`pulumi stack select {{stack_name}}`

- Delete a stack:

`pulumi stack rm {{stack_name}}`

- Show stack outputs, including secrets, in plaintext:

`pulumi stack output --show-secrets`

- Export the stack state to a JSON file:

`pulumi stack export --file {{path/to/file.json}}`
