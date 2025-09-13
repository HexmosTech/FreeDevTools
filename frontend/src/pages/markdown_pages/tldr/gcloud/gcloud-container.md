---
title: "Create GKE Clusters - Manage Containers with gcloud | Free DevTools"
name: gcloud-container
path: /freedevtools/tldr/gcloud/gcloud-container
canonical: "https://hexmos.com/freedevtools/tldr/gcloud/gcloud-container/"
description: "Create and manage containerized applications with gcloud container. Deploy Kubernetes clusters and configure kubectl effortlessly. Free online tool, no registration required."
category: common
keywords:
- gcloud Kubernetes clusters
- container management Google Cloud
- GKE cluster creation
- kubectl configuration gcloud
- container image tagging
- Google container engine CLI
- cloud container orchestration
- Kubernetes deployment gcloud
- Google cloud shell container
- gcloud container commands
features:
- Create and manage GKE clusters from the command line.
- Update kubeconfig for seamless kubectl integration.
- List container image tags and digests.
- Describe existing Kubernetes clusters in Google Cloud.
- Register gcloud as a Docker credential helper.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gcloud container

> Manage containerized applications on Kubernetes and clusters.
> See also: `gcloud`.
> More information: <https://cloud.google.com/sdk/gcloud/reference/container>.

- Register `gcloud` as a Docker credential helper:

`gcloud auth configure-docker`

- Create a cluster to run GKE containers:

`gcloud container clusters create {{cluster_name}}`

- List clusters for running GKE containers:

`gcloud container clusters list`

- Update kubeconfig to get `kubectl` to use a GKE cluster:

`gcloud container clusters get-credentials {{cluster_name}}`

- List tag and digest metadata for a container image:

`gcloud container images list-tags {{image}}`

- Describe an existing cluster for running containers:

`gcloud container clusters describe {{cluster_name}}`
