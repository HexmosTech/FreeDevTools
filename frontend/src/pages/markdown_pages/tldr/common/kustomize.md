---
title: "Create Kubernetes Resources with Kustomize | Free DevTools"
name: kustomize
path: /freedevtools/tldr/common/kustomize
canonical: "https://hexmos.com/freedevtools/tldr/common/kustomize/"
description: "Create Kubernetes manifests with Kustomize. Define and manage your resources for streamlined deployments using overlays and patches. Free online tool, no registration required."
category: common
keywords:
- Kubernetes manifest
- Kubernetes resources
- Kustomize Kubernetes
- Kustomization yaml
- Kubernetes deploy
- Kubernetes overlays
- Kubernetes patches
- Kubernetes declarative
- Kustomize build
- Kustomize edit
features:
- Generate Kustomization files from existing resources
- Build customized Kubernetes manifests from a directory
- Set and modify image tags within Kustomization files
- Autodetect resources for inclusion in Kustomization files
- Deploy Kustomized manifests directly with kubectl
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kustomize

> Easily deploy resources for Kubernetes.
> More information: <https://github.com/kubernetes-sigs/kustomize>.

- Create a kustomization file with resources and namespace:

`kustomize create --resources {{deployment.yaml,service.yaml}} --namespace {{staging}}`

- Build a kustomization file and deploy it with `kubectl`:

`kustomize build . | kubectl apply {{[-f|--filename]}} -`

- Set an image in the kustomization file:

`kustomize edit set image {{busybox=alpine:3.6}}`

- Search for Kubernetes resources in the current directory to be added to the kustomization file:

`kustomize create --autodetect`
