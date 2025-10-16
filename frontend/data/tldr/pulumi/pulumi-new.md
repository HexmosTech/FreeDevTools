---
title: "Create Pulumi Project - Generate New Infrastructure | Online Free DevTools by Hexmos"
name: pulumi-new
path: "/freedevtools/tldr/pulumi/pulumi-new/"
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-new/"
description: "Create Pulumi projects instantly with Pulumi New. Generate infrastructure as code, choose templates, and manage secrets securely. Free online tool, no registration required."
category: common
keywords:
- pulumi project generator
- infrastructure as code creator
- pulumi template manager
- yaml project generator
- cloud infrastructure manager
- pulumi new command
- infrastructure deployment tool
- cloud resource provisioner
- pulumi secrets manager
- pulumi project scaffolder
features:
- Generate new Pulumi projects from interactive templates
- Create projects using specific templates like azure-python
- Initialize projects from local files and directories
- Clone projects directly from Git repositories
- Securely manage secrets using specified secrets providers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulumi new

> Create a new Pulumi project.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_new/>.

- Choose a template interactively:

`pulumi new`

- Create a project from a specific template (e.g `azure-python`):

`pulumi new {{provided-template}}`

- Create a project from a local file:

`pulumi new {{path/to/templates/aws-typescript}}`

- Create a project from a Git repository:

`pulumi new {{url}}`

- Use the specified secrets provider with the <pulumi.com> backend:

`pulumi new --secrets-provider {{passphrase}}`
