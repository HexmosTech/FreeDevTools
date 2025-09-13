---
title: "Create ACR Registry - Manage Azure Containers | Free DevTools"
name: az-acr
path: /freedevtools/tldr/az/az-acr
canonical: "https://hexmos.com/freedevtools/tldr/az/az-acr/"
description: "Create ACR registry with az-acr. Manage, store and retrieve container images in Azure. Streamline your DevOps workflow. Free online tool, no registration required."
category: common
keywords:
- Azure Container Registry management
- ACR image creation
- Azure CLI container commands
- Docker image repository
- Azure container deployment
- az-acr container management
- Container registry command line
- Azure container storage
- Cloud container images
- Azure container registry CLI
features:
- Create and manage Azure Container Registries.
- Authenticate and login to private registries.
- Push and pull container images to and from ACR.
- Delete images and repositories from the registry.
- List images within a specific registry.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az acr

> Manage private registries with Azure Container Registries.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/acr>.

- Create a managed container registry:

`az acr create {{[-n|--name]}} {{registry_name}} {{[-g|--resource-group]}} {{resource_group}} --sku {{sku}}`

- Login to a registry:

`az acr login {{[-n|--name]}} {{registry_name}}`

- Tag a local image for ACR:

`docker tag {{image_name}} {{registry_name}}.azurecr.io/{{image_name}}:{{tag}}`

- Push an image to a registry:

`docker push {{registry_name}}.azurecr.io/{{image_name}}:{{tag}}`

- Pull an image from a registry:

`docker pull {{registry_name}}.azurecr.io/{{image_name}}:{{tag}}`

- Delete an image from a registry:

`az acr repository delete {{[-n|--name]}} {{registry_name}} --repository {{image_name}}:{{tag}}`

- Delete a managed container registry:

`az acr delete {{[-n|--name]}} {{registry_name}} {{[-g|--resource-group]}} {{resource_group}} {{[-y|--yes]}}`

- List images within a registry:

`az acr repository list {{[-n|--name]}} {{registry_name}} --output table`
