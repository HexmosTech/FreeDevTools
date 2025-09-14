---
title: "Pulumi Cancel - Stop Stack Updates | Free DevTools"
name: pulumi-cancel
path: /freedevtools/tldr/pulumi/pulumi-cancel
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-cancel/"
description: "Stop running Pulumi stack updates with Pulumi Cancel. Cancel deployments and rollbacks efficiently for infrastructure as code. Free online tool, no registration required."
category: common
keywords:
- Pulumi Cancel
- Pulumi deployment cancel
- Pulumi rollback cancel
- IaC deployment cancel
- Cloud deployment cancel
- Pulumi stack management
- Pulumi command line interface
- infrastructure as code cancel
- cloud infrastructure cancel
- pulumi update stop
features:
- Cancel running Pulumi stack updates
- Forcefully stop deployments with confirmation bypass
- Gracefully terminate ongoing rollbacks
- Interrupt failed infrastructure deployments
- Provide command-line control over Pulumi deployments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pulumi cancel

> Cancel a stack's currently running update, if any.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_cancel/>.

- Cancel a stack's currently running update, if any:

`pulumi cancel {{stack_name}}`

- Skip confirmation prompts, and proceed with cancellation anyway:

`pulumi cancel {{[-y|--yes]}}`

- Display help:

`pulumi cancel {{[-h|--help]}}`
