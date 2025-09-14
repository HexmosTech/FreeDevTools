---
title: "Terraform Output - Generate Data | Free DevTools"
name: terraform-output
path: /freedevtools/tldr/terraform/terraform-output
canonical: "https://hexmos.com/freedevtools/tldr/terraform/terraform-output/"
description: "Generate Terraform output values with ease. Export structured data about your Terraform resources. Access values in JSON format and more. Free online tool, no registration required."
category: common
keywords:
- terraform output
- terraform data export
- terraform resource data
- infrastructure output
- configuration management data
- json output
- raw string output
- terraform cli
- terraform automation
- terraform resource values
features:
- Display all outputs for the root module
- Output a value with a specific name
- Convert the output value to a raw string
- Format the outputs as a JSON object
- Export structured data about Terraform resources
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# terraform output

> Export structured data about your Terraform resources.
> More information: <https://developer.hashicorp.com/terraform/cli/commands/output>.

- With no additional arguments, `output` will display all outputs for the root module:

`terraform output`

- Output only a value with specific name:

`terraform output {{name}}`

- Convert the output value to a raw string (useful for shell scripts):

`terraform output -raw`

- Format the outputs as a JSON object, with a key per output (useful with jq):

`terraform output -json`
