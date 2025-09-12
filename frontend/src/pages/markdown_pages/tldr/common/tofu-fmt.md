---
title: "Tofu Format - Format Tofu Configuration | Free DevTools"
name: tofu-fmt
path: /freedevtools/tldr/common/tofu-fmt
canonical: "https://hexmos.com/freedevtools/tldr/common/tofu-fmt/"
description: "Format Tofu configuration files with Tofu Format. Ensure consistent and readable infrastructure-as-code. Free online tool, no registration required."
category: common
keywords:
- tofu format
- tofu configuration format
- infrastructure as code formatter
- hcl format
- terraform format
- tofu fmt
- configuration file formatter
- opentofu format
- opentofu configuration format
- declarative configuration format
features:
- Format Tofu configuration files to a standard style
- Recursively format configuration files in subdirectories
- Display a diff of the formatting changes
- Suppress the listing of formatted files
- Ensure consistent formatting across your Tofu projects
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tofu fmt

> Format configuration according to OpenTofu language style conventions.
> More information: <https://opentofu.org/docs/cli/commands/fmt/>.

- Format the configuration in the current directory:

`tofu fmt`

- Format the configuration in the current directory and subdirectories:

`tofu fmt -recursive`

- Display diffs of formatting changes:

`tofu fmt -diff`

- Do not list files that were formatted to `stdout`:

`tofu fmt -list=false`
