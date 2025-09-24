---
title: "Develop Kubernetes Apps - Control DevSpace Workflow | Online Free DevTools by Hexmos"
name: devspace
path: /freedevtools/tldr/common/devspace
canonical: "https://hexmos.com/freedevtools/tldr/common/devspace/"
description: "Develop Kubernetes applications efficiently with DevSpace. Deploy, debug and build images directly in Kubernetes. Free online tool, no registration required."
category: common
keywords:
- kubernetes development
- devspace kubernetes
- kubernetes deployment
- kubernetes debugging
- devspace cli
- container development
- microservice deployment
- kubectl alternative
- application deployment
- kubernetes workflow
features:
- Initialize new DevSpace projects
- Start development with port forwarding and file sync
- Deploy projects to Kubernetes clusters
- Build container images for deployment
- Follow logs from pods in real-time
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# devspace

> Develop, deploy, and debug applications inside Kubernetes.
> More information: <https://devspace.sh/docs/cli>.

- Initialize a new DevSpace project in the current directory:

`devspace init`

- Start development mode with port forwarding, file synchronization, and terminal access:

`devspace dev`

- Start development mode in a specific namespace:

`devspace dev {{[-n|--namespace]}} {{namespace}}`

- Deploy the project to Kubernetes:

`devspace deploy`

- Deploy the project with a specific profile:

`devspace deploy {{[-p|--profile]}} {{profile-name}}`

- Build all defined images:

`devspace build`

- Follow logs from a pod:

`devspace logs {{[-f|--follow]}}`

- Open the DevSpace UI in the browser:

`devspace ui`
