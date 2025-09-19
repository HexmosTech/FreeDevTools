---
title: "Pulumi Preview - Show Infrastructure Updates | Online Free DevTools by Hexmos"
name: pulumi-preview
path: /freedevtools/tldr/pulumi/pulumi-preview
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-preview/"
description: "Show infrastructure updates with Pulumi Preview. Inspect changes, identify potential issues, and ensure safe deployments. Free online tool, no registration required."
category: common
keywords:
- pulumi preview
- infrastructure as code preview
- IaC preview tool
- cloud deployment preview
- pulumi cloud preview
- pulumi diff
- policy pack validation
- infrastructure change management
- declarative infrastructure preview
- pulumi stack updates
features:
- Preview infrastructure changes before deployment
- Identify potential errors and conflicts
- Visualize changes using rich diffs
- Validate policies with Policy Packs
- Generate previews in JSON format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pulumi preview

> Show a preview of updates to a stack's resources.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_preview/>.

- Show a preview of updates to a stack's resources:

`pulumi preview`

- Show a preview of updates to a stack's resources in JSON format:

`pulumi preview {{[-j|--json]}}`

- Preview updates as a rich diff showing overall changes:

`pulumi preview --diff`

- Preview updates using a Policy Pack (without Pulumi Cloud, best on CI/CD):

`pulumi preview --policy-pack {{path/to/directory}}`

- Display help:

`pulumi preview {{[-h|--help]}}`
