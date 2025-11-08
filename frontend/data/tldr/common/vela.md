---
title: "Vela Pipeline - Trigger & Control CI/CD Workflows | Online Free DevTools by Hexmos"
name: vela
path: "/freedevtools/tldr/common/vela/"
canonical: "https://hexmos.com/freedevtools/tldr/common/vela/"
description: "Control CI/CD pipelines with Vela. Trigger deployments, list deployments, and inspect specific deployments via command line. Free online tool, no registration required."
category: common
keywords:
- vela pipeline trigger
- vela ci/cd control
- vela deployment manager
- vela workflow automation
- vela command line tool
- ci/cd pipeline management
- deployment automation
- git workflow integration
- pipeline deployment tool
- vela deployment inspector
features:
- Trigger pipeline deployments from Git branches, commits, or tags.
- List all deployments for a specific repository.
- Inspect the details of a particular deployment.
- Manage CI/CD workflows via the command line.
- Automate deployment processes using Git events.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vela

> Tools for the Vela pipeline.
> More information: <https://go-vela.github.io/docs/reference/cli/>.

- Trigger a pipeline to run from a Git branch, commit or tag:

`vela add deployment --org {{organization}} --repo {{repository_name}} --target {{environment}} --ref {{branch|commit|refs/tags/git_tag}} --description "{{deploy_description}}"`

- List deployments for a repository:

`vela get deployment --org {{organization}} --repo {{repository_name}}`

- Inspect a specific deployment:

`vela view deployment --org {{organization}} --repo {{repository_name}} --deployment {{deployment_number}}`
