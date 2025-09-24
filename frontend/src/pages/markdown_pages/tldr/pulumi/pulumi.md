---
title: "Create Infrastructure - Pulumi Cloud Deployment | Online Free DevTools by Hexmos"
name: pulumi
path: /freedevtools/tldr/pulumi/pulumi
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi/"
description: "Create infrastructure with Pulumi, define cloud resources using code. Provision, deploy, and manage infrastructure on any cloud platform. Free online tool, no registration required."
category: common
keywords:
- infrastructure as code
- pulumi infrastructure
- cloud deployment
- infrastructure automation
- cloud resource management
- pulumi CLI
- infrastructure definition
- pulumi stack
- pulumi config
- yaml infrastructure
features:
- Deploy infrastructure across multiple cloud providers
- Manage infrastructure configurations with version control
- Preview changes before deployment
- Destroy entire infrastructures with a single command
- Initialize new Pulumi projects from templates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulumi

> Define infrastructure on any cloud using familiar programming languages.
> Some subcommands such as `up` have their own usage documentation.
> More information: <https://www.pulumi.com/docs/iac/cli/>.

- Create a new project using a template:

`pulumi new`

- Create a new stack using an isolated deployment target:

`pulumi stack init`

- Configure variables (e.g. keys, regions, etc.) interactively:

`pulumi config`

- Preview and deploy changes to a program and/or infrastructure:

`pulumi up`

- Preview deployment changes without performing them (dry-run):

`pulumi preview`

- Destroy a program and its infrastructure:

`pulumi destroy`

- Use Pulumi locally, independent of a Pulumi Cloud:

`pulumi login {{[-l|--local]}}`
