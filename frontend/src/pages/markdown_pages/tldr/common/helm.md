---
title: "Helm - Manage Kubernetes Applications | Online Free DevTools by Hexmos"
name: helm
path: /freedevtools/tldr/common/helm
canonical: "https://hexmos.com/freedevtools/tldr/common/helm/"
description: "Manage Kubernetes deployments easily with Helm. Streamline application installation, upgrades, and rollbacks with this powerful package manager. Free online tool, no registration required."
category: common
keywords:
- kubernetes package manager
- helm chart management
- application deployment kubernetes
- kubernetes application installer
- helm repository management
- yaml kubernetes deployment
- kubernetes deployment manager
- cli kubernetes tools
- docker kubernetes deployment
- microservices deployment helm
features:
- Create new Helm charts for application deployment.
- Manage Helm repositories for accessing charts.
- Install applications into Kubernetes clusters using Helm charts.
- Update dependencies within a Helm chart.
- Download existing Helm charts for inspection and modification.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# helm

> A package manager for Kubernetes.
> Some subcommands such as `install` have their own usage documentation.
> More information: <https://helm.sh/docs/helm/>.

- Create a helm chart:

`helm create {{chart_name}}`

- Add a new helm repository:

`helm repo add {{repository_name}}`

- List helm repositories:

`helm repo {{[ls|list]}}`

- Update helm repositories:

`helm repo {{[up|update]}}`

- Delete a helm repository:

`helm repo {{[rm|remove]}} {{repository_name}}`

- Install a helm chart:

`helm install {{name}} {{repository_name}}/{{chart_name}}`

- Download helm chart as a tar archive:

`helm get {{chart_release_name}}`

- Update helm dependencies:

`helm {{[dep|dependency]}} {{[up|update]}}`
