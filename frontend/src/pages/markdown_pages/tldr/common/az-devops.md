---
title: "Manage Azure DevOps - Control Organizations | Free DevTools"
name: az-devops
path: /freedevtools/tldr/common/az-devops
canonical: "https://hexmos.com/freedevtools/tldr/common/az-devops/"
description: "Manage Azure DevOps organizations easily with az devops. Configure projects, manage teams, and streamline your development workflow with Azure CLI. Free online tool, no registration required."
category: common
keywords:
- azure devops manager
- devops configuration
- azure cli devops
- azure devops project management
- devops team management
- azure devops organization control
- devops pat authentication
- az devops command line
- devops cli configuration
- azure devops automation
features:
- Configure Azure DevOps projects and organizations
- Manage team members within specific projects
- Authenticate using Personal Access Tokens (PAT)
- Open Azure DevOps projects directly in a browser
- Configure default project and organization settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az devops

> Manage Azure DevOps organizations.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/devops>.

- Set the Personal Access Token (PAT) to login to a particular organization:

`az devops login {{[--org|--organization]}} {{organization_url}}`

- Open a project in the browser:

`az devops project show {{[-p|--project]}} {{project_name}} --open`

- List members of a specific team working on a particular project:

`az devops team list-member {{[-p|--project]}} {{project_name}} --team {{team_name}}`

- Check the Azure DevOps CLI current configuration:

`az devops configure {{[-l|--list]}}`

- Configure the Azure DevOps CLI behavior by setting a default project and a default organization:

`az devops configure {{[-d|--defaults]}} project={{project_name}} organization={{organization_url}}`
