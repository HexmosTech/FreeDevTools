---
title: "Control Argo CD - Manage Applications | Online Free DevTools by Hexmos"
name: argocd
path: "/freedevtools/tldr/common/argocd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/argocd/"
description: "Control Argo CD applications with this command line interface. Manage deployments, monitor application health, and automate software delivery pipelines. Free online tool, no registration required."
category: common
keywords:
- argocd application management
- argocd deployment control
- argocd cli tool
- argocd kubernetes deployments
- argocd application synchronization
- argocd continuous delivery
- argocd gitops workflow
- kubernetes argocd
- argocd application monitoring
- argocd server control
features:
- Login to Argo CD servers securely
- List and view deployed applications
- Manage application deployments
- Monitor application status and health
- Automate application synchronization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# argocd

> Interface to control an Argo CD server.
> Some subcommands such as `app` have their own usage documentation.
> More information: <https://argo-cd.readthedocs.io/en/stable/user-guide/commands/argocd/>.

- Login to Argo CD server:

`argocd login --insecure --username {{user}} --password {{password}} {{argocd_server:port}}`

- List applications:

`argocd app list`
