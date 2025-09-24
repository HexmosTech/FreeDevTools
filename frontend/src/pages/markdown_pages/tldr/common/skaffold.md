---
title: "Skaffold - Develop Kubernetes Applications | Online Free DevTools by Hexmos"
name: skaffold
path: /freedevtools/tldr/common/skaffold
canonical: "https://hexmos.com/freedevtools/tldr/common/skaffold/"
description: "Develop Kubernetes applications easily with Skaffold. Build, deploy, and manage Kubernetes apps continuously with automatic code updates. Free online tool, no registration required."
category: common
keywords:
- kubernetes development
- skaffold kubernetes
- continuous deployment kubernetes
- kubernetes application development
- container deployment
- kubernetes pipeline
- cloud native development
- devops kubernetes
- docker kubernetes
- kubernetes CI/CD
features:
- Build container images from source code
- Deploy applications to Kubernetes clusters
- Automatically detect and deploy code changes
- Manage the entire Kubernetes development lifecycle
- Diagnose Skaffold setup and configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# skaffold

> Facilitate continuous development for Kubernetes applications.
> More information: <https://skaffold.dev>.

- Build the artifacts:

`skaffold build {{[-f|--filename]}} {{skaffold.yaml}}`

- Build and deploy your app every time your code changes:

`skaffold dev {{[-f|--filename]}} {{skaffold.yaml}}`

- Run a pipeline file:

`skaffold run {{[-f|--filename]}} {{skaffold.yaml}}`

- Run a diagnostic on Skaffold:

`skaffold diagnose {{[-f|--filename]}} {{skaffold.yaml}}`

- Deploy the artifacts:

`skaffold deploy {{[-f|--filename]}} {{skaffold.yaml}}`
