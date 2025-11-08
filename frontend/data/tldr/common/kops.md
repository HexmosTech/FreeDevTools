---
title: "Create Kubernetes Clusters - Manage kops | Online Free DevTools by Hexmos"
name: kops
path: "/freedevtools/tldr/common/kops/"
canonical: "https://hexmos.com/freedevtools/tldr/common/kops/"
description: "Create Kubernetes clusters instantly with kops. Provision, manage, and scale your Kubernetes infrastructure effortlessly. Free online tool, no registration required."
category: common
keywords:
- Kubernetes cluster creation
- kops cluster management
- Kubernetes provisioning tool
- kops infrastructure automation
- cloud Kubernetes deployment
- kops cluster validation
- Kubernetes cluster upgrade
- kops command-line tool
- k8s cluster management
- Kubernetes cluster configuration
features:
- Create Kubernetes clusters from specifications
- Generate SSH public keys for secure access
- Export cluster configuration to kubeconfig
- Validate cluster health and readiness
- Delete Kubernetes clusters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kops

> Create, destroy, upgrade and maintain Kubernetes clusters.
> More information: <https://github.com/kubernetes/kops/>.

- Create a cluster from the configuration specification:

`kops create cluster {{[-f|--filename]}} {{cluster_name.yaml}}`

- Create a new SSH public key:

`kops create sshpublickey {{key_name}} {{[-i|--ssh-public-key]}} {{~/.ssh/id_rsa.pub}}`

- Export the cluster configuration to the `~/.kube/config` file:

`kops export kubecfg {{cluster_name}}`

- Get the cluster configuration as YAML:

`kops get cluster {{cluster_name}} {{[-o|--output]}} yaml`

- Delete a cluster:

`kops delete cluster {{cluster_name}} {{[-y|--yes]}}`

- Validate a cluster:

`kops validate cluster {{cluster_name}} --wait {{wait_time_until_ready}} --count {{num_required_validations}}`
