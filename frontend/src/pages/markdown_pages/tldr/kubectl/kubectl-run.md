---
title: "Kubectl Run - Create Pods in Kubernetes | Online Free DevTools by Hexmos"
name: kubectl-run
path: /freedevtools/tldr/kubectl/kubectl-run
canonical: "https://hexmos.com/freedevtools/tldr/kubectl/kubectl-run/"
description: "Create Kubernetes pods instantly with Kubectl Run. Deploy applications, manage containers, and test configurations. Free online tool, no registration required."
category: common
keywords:
- kubernetes pod creation
- kubectl pod deployment
- container management cli
- k8s run command
- kubernetes application deployment
- kubectl run example
- docker container orchestration
- pod configuration yaml
- kubernetes command line
- kubectl deployment tool
features:
- Deploy containers using the kubectl run command
- Specify container images for pod creation
- Set environment variables for container configuration
- Execute custom commands within created pods
- Manage pod lifecycle with restart policies and deletion options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubectl run

> Run pods in Kubernetes. Specifies pod generator to avoid deprecation error in some K8S versions.
> More information: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#run>.

- Run an nginx pod and expose port 80:

`kubectl run {{nginx-dev}} --image=nginx --port 80`

- Run an nginx pod, setting the TEST_VAR environment variable:

`kubectl run {{nginx-dev}} --image=nginx --env="{{TEST_VAR}}={{testing}}"`

- Show API calls that would be made to create an nginx container:

`kubectl run {{nginx-dev}} --image=nginx --dry-run={{none|server|client}}`

- Run an Ubuntu pod interactively, never restart it, and remove it when it exits:

`kubectl run {{temp-ubuntu}} --image=ubuntu:22.04 --restart=Never --rm -- /bin/bash`

- Run an Ubuntu pod, overriding the default command with echo, and specifying custom arguments:

`kubectl run {{temp-ubuntu}} --image=ubuntu:22.04 --command -- echo {{argument1 argument2 ...}}`
