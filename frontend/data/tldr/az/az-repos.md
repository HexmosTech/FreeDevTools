---
title: "Manage Azure Repos - Control Azure DevOps Repos | Online Free DevTools by Hexmos"
name: az-repos
path: "/freedevtools/tldr/az/az-repos/"
canonical: "https://hexmos.com/freedevtools/tldr/az/az-repos/"
description: "Manage Azure DevOps repositories with az repos. Automate policy creation, build validation, and pull request management effortlessly. Free online tool, no registration required."
category: common
keywords:
- Azure DevOps repos manager
- Azure Repos CLI
- Azure Repos policy automation
- Azure Repos pull request tool
- Azure build validation repos
- Azure DevOps repository control
- Azure repos merge strategy
- DevOps repository management
- Azure repos build pipeline
- Azure command line repos
features:
- List repositories within a specific Azure DevOps project
- Enforce merge restrictions on repository branches
- Implement automated build validation triggered by source updates
- List active pull requests for a repository
- Manage policies on Azure DevOps repositories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# az repos

> Manage Azure DevOps repos.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/repos>.

- List all repos in a specific project:

`az repos list {{[-p|--project]}} {{project_name}}`

- Add policy on a specific branch of a specific repository to restrict basic merge:

`az repos policy merge-strategy create --repository-id {{repository_id_in_repos_list}} --branch {{branch_name}} --blocking --enabled --allow-no-fast-forward false --allow-rebase true --allow-rebase-merge true --allow-squash true`

- Add build validation on a specific repository, using an existing build pipeline, to be triggered automatically on source update:

`az repos policy build create --repository-id {{repository_id}} --build-definition-id {{build_pipeline_id}} --branch main --blocking --enabled --queue-on-source-update-only true --display-name {{name}} --valid-duration {{minutes}}`

- List all active Pull Requests on a specific repository within a specific project:

`az repos pr list {{[-p|--project]}} {{project_name}} {{[-r|--repository]}} {{repository_name}} --status active`
