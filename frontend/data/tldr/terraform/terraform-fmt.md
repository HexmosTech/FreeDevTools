---
title: "Terraform Format - Format Infrastructure Code | Online Free DevTools by Hexmos"
name: terraform-fmt
path: "/freedevtools/tldr/terraform/terraform-fmt/"
canonical: "https://hexmos.com/freedevtools/tldr/terraform/terraform-fmt/"
description: "Format Terraform configurations with Terraform Fmt. Standardize infrastructure code and improve readability with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- terraform format
- infrastructure as code formatting
- terraform code formatter
- hcl format
- terraform style guide
- infrastructure configuration formatter
- terraform automation
- terraform linting
- terraform best practices
- terraform code style
features:
- Format Terraform configurations in a directory
- Recursively format Terraform configurations in subdirectories
- Display diffs of formatting changes
- Suppress output of formatted files
- Enforce consistent code style across infrastructure projects
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# terraform fmt

> Format configuration according to Terraform language style conventions.
> More information: <https://developer.hashicorp.com/terraform/cli/commands/fmt>.

- Format the configuration in the current directory:

`terraform fmt`

- Format the configuration in the current directory and subdirectories:

`terraform fmt -recursive`

- Display diffs of formatting changes:

`terraform fmt -diff`

- Do not list files that were formatted to `stdout`:

`terraform fmt -list=false`
