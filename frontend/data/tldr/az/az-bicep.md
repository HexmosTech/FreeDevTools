---
title: "Bicep CLI - Generate ARM Templates | Online Free DevTools by Hexmos"
name: az-bicep
path: "/freedevtools/tldr/az/az-bicep/"
canonical: "https://hexmos.com/freedevtools/tldr/az/az-bicep/"
description: "Generate ARM templates with Bicep CLI. Build, decompile, and upgrade Bicep files using the command line. Free online tool, no registration required."
category: common
keywords:
- Bicep CLI
- ARM template generator
- Azure Bicep
- Azure CLI
- Infrastructure as Code
- IaC template builder
- Bicep decompiler
- ARM template converter
- Azure resource deployment
- Azure automation
features:
- Build Bicep files into ARM templates.
- Decompile ARM templates back into Bicep code.
- Upgrade Bicep CLI to the latest version.
- List available versions of Bicep CLI.
- Uninstall Bicep CLI from your system.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# az bicep

> Bicep CLI command group.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/bicep>.

- Install Bicep CLI:

`az bicep install`

- Build a Bicep file:

`az bicep build {{[-f|--file]}} {{path/to/file.bicep}}`

- Attempt to decompile an ARM template file to a Bicep file:

`az bicep decompile {{[-f|--file]}} {{path/to/template_file.json}}`

- Upgrade Bicep CLI to the latest version:

`az bicep upgrade`

- Display the installed version of Bicep CLI:

`az bicep version`

- List all available versions of Bicep CLI:

`az bicep list-versions`

- Uninstall Bicep CLI:

`az bicep uninstall`
