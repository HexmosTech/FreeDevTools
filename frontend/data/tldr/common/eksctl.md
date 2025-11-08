---
title: "Create EKS Clusters - Manage Kubernetes with eksctl | Online Free DevTools by Hexmos"
name: eksctl
path: "/freedevtools/tldr/common/eksctl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/eksctl/"
description: "Create and manage Amazon EKS clusters efficiently with eksctl. Streamline Kubernetes deployment and scaling with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- eksctl Kubernetes management
- EKS cluster creation
- AWS Kubernetes CLI
- Kubernetes cluster management
- Amazon EKS command-line tool
- eksctl EKS deployment
- Kubernetes cluster deployment
- AWS EKS cluster control
- EKS configuration management
- Kubernetes cluster administration
features:
- Deploy EKS clusters with single command
- Manage EKS cluster configurations via files
- Delete EKS clusters quickly
- Customize kubeconfig file location
- Automate Kubernetes credential management
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eksctl

> The official CLI for Amazon EKS.
> More information: <https://eksctl.io>.

- Create a basic cluster:

`eksctl create cluster`

- List the details about a cluster or all of the clusters:

`eksctl get cluster --name={{name}} --region={{region}}`

- Create a cluster passing all configuration information in a file:

`eksctl create cluster --config-file={{path/to/file}}`

- Create a cluster using a configuration file and skip creating nodegroups until later:

`eksctl create cluster --config-file=<path> --without-nodegroup`

- Delete a cluster:

`eksctl delete cluster --name={{name}} --region={{region}}`

- Create cluster and write cluster credentials to a file other than the default:

`eksctl create cluster --name={{name}} --nodes={{4}} --kubeconfig={{path/to/config.yaml}}`

- Create a cluster and prevent storing cluster credentials locally:

`eksctl create cluster --name={{name}} --nodes={{4}} --write-kubeconfig=false`

- Create a cluster and let `eksctl` manage cluster credentials under the `~/.kube/eksctl/clusters` directory:

`eksctl create cluster --name={{name}} --nodes={{4}} --auto-kubeconfig`
