---
title: "Pulumi Schema Check - Validate Pulumi Package Schemas | Online Free DevTools by Hexmos"
name: pulumi-schema
path: "/freedevtools/tldr/pulumi/pulumi-schema/"
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-schema/"
description: "Validate Pulumi package schemas with Pulumi Schema Check. Identify errors and enforce schema integrity for robust infrastructure as code. Free online tool, no registration required."
category: common
keywords:
- Pulumi schema check
- Pulumi schema validation
- Infrastructure as Code validation
- Package schema check
- IaC schema validation
- Pulumi schema errors
- Schema integrity
- Pulumi CLI
- Cloud resource validation
- Infrastructure definition
features:
- Checks Pulumi package schemas for errors
- Allows validation with dangling reference allowance
- Provides detailed error reporting
- Supports local and remote schema files
- Offers command-line interface for automation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulumi schema

> Check a Pulumi package schema for errors.
> Schema reference: <https://www.pulumi.com/docs/iac/extending-pulumi/schema/>.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_schema/>.

- Check a package schema:

`pulumi schema check {{path/to/file}}`

- Check a package schema without failing if the reference to a type is missing:

`pulumi schema check --allow-dangling-references {{path/to/file}}`

- Display help:

`pulumi schema check {{[-h|--help]}}`
