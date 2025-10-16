---
title: "Tofu Output - Export Tofu Resources | Online Free DevTools by Hexmos"
name: tofu-output
path: "/freedevtools/tldr/tofu/tofu-output/"
canonical: "https://hexmos.com/freedevtools/tldr/tofu/tofu-output/"
description: "Export data with Tofu Output. Extract structured information about your infrastructure resources for automation and reporting. Free online tool, no registration required."
category: common
keywords:
- tofu output data
- infrastructure output
- resource data export
- opentofu resource data
- tofu configuration data
- tofu variable extraction
- infrastructure automation
- resource reporting
- infrastructure as code data
- tofu command line output
features:
- Exports all outputs for the root module
- Outputs a value with a specified name
- Converts output values to a raw string
- Formats outputs as a JSON object
- Retrieves resource data from OpenTofu
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tofu output

> Export structured data about your OpenTofu resources.
> More information: <https://opentofu.org/docs/cli/commands/output/>.

- With no additional arguments, `output` will display all outputs for the root module:

`tofu output`

- Output only a value with specific name:

`tofu output {{name}}`

- Convert the output value to a raw string (useful for shell scripts):

`tofu output -raw`

- Format the outputs as a JSON object, with a key per output (useful with `jq`):

`tofu output -json`
