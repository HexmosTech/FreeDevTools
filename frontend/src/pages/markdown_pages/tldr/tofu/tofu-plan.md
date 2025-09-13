---
title: "Generate Tofu Plans - Automate Infrastructure with OpenTofu | Free DevTools"
name: tofu-plan
path: /freedevtools/tldr/tofu/tofu-plan
canonical: "https://hexmos.com/freedevtools/tldr/tofu/tofu-plan/"
description: "Generate Tofu plans with OpenTofu to automate infrastructure deployments. Preview changes, target resources, and manage your infrastructure efficiently. Free online tool, no registration required."
category: common
keywords:
- opentofu plan
- infrastructure as code
- opentofu automation
- tofu execution plan
- opentofu destroy plan
- tofu refresh state
- opentofu variable definition
- opentofu resource targeting
- opentofu json output
- opentofu plan file
features:
- Generate execution plans for infrastructure changes
- Preview resource modifications before applying them
- Target specific resources for focused updates
- Output plans in JSON format for automation
- Write plans to a file for later application
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tofu plan

> Generate and show OpenTofu execution plans.
> More information: <https://opentofu.org/docs/cli/commands/plan/>.

- Generate and show the execution plan in the currently directory:

`tofu plan`

- Show a plan to destroy all remote objects that currently exist:

`tofu plan -destroy`

- Show a plan to update the Tofu state and output values:

`tofu plan -refresh-only`

- Specify values for input variables:

`tofu plan -var '{{name1}}={{value1}}' -var '{{name2}}={{value2}}'`

- Focus Tofu's attention on only a subset of resources:

`tofu plan -target {{resource_type.resource_name[instance index]}}`

- Output a plan as JSON:

`tofu plan -json`

- Write a plan to a specific file:

`tofu plan -no-color > {{path/to/file}}`
