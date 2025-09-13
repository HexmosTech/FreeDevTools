---
title: "Generate Terraform Plan - Infrastructure as Code | Free DevTools"
name: terraform-plan
path: /freedevtools/tldr/common/terraform-plan
canonical: "https://hexmos.com/freedevtools/tldr/common/terraform-plan/"
description: "Generate Terraform execution plans instantly with Terraform Plan. Visualize changes before applying them, ensuring safe and predictable infrastructure updates. Free online tool, no registration required."
category: common
keywords:
- terraform plan
- infrastructure as code plan
- terraform execution plan
- terraform cloud
- terraform automation
- terraform configuration
- terraform deployment
- terraform aws
- terraform azure
- terraform google cloud
features:
- Generate detailed execution plans before applying changes.
- Target specific resources for focused planning.
- Output plans in JSON format for automation.
- Destroy resources within a Terraform configuration.
- Refresh state to reflect current infrastructure.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# terraform plan

> Generate and show Terraform execution plans.
> More information: <https://developer.hashicorp.com/terraform/cli/commands/plan>.

- Generate and show the execution plan in the currently directory:

`terraform plan`

- Show a plan to destroy all remote objects that currently exist:

`terraform plan -destroy`

- Show a plan to update the Terraform state and output values:

`terraform plan -refresh-only`

- Specify values for input variables:

`terraform plan -var '{{name1}}={{value1}}' -var '{{name2}}={{value2}}'`

- Focus Terraform's attention on only a subset of resources:

`terraform plan -target {{resource_type.resource_name[instance index]}}`

- Output a plan as JSON:

`terraform plan -json`

- Write a plan to a specific file:

`terraform plan -no-color > {{path/to/file}}`
