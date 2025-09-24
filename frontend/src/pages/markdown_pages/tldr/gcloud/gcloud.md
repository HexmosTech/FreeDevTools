---
title: "Control Google Cloud - Manage GCP Resources | Online Free DevTools by Hexmos"
name: gcloud
path: /freedevtools/tldr/gcloud/gcloud
canonical: "https://hexmos.com/freedevtools/tldr/gcloud/gcloud/"
description: "Control Google Cloud resources with gcloud. Manage projects, instances, and deployments. Free online tool, no registration required. Simplify GCP management."
category: common
keywords:
- google cloud command line
- gcloud cli tool
- gcp resource management
- cloud sdk gcloud
- compute engine commands
- kubernetes engine gcloud
- gcloud project configuration
- gcloud instance management
- gcloud auth login
- gcloud components update
features:
- Manage Google Cloud projects from the command line.
- Deploy and control virtual machine instances.
- Update Kubernetes clusters via gcloud.
- Configure the gcloud environment.
- Authenticate with Google Cloud accounts using the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcloud

> The official CLI tool for Google Cloud Platform.
> Note: `gcloud` subcommands have their own usage documentation.
> More information: <https://cloud.google.com/sdk/gcloud>.

- List all properties in one's active configuration:

`gcloud config list`

- Login to a Google account:

`gcloud auth login`

- Set the active project:

`gcloud config set project {{project_name}}`

- SSH into a virtual machine instance:

`gcloud compute ssh {{user}}@{{instance}}`

- Display all Google Compute Engine instances in a project (by default instances from all zones are listed):

`gcloud compute instances list`

- Update a kubeconfig file with the appropriate credentials to point `kubectl` to a specific cluster in Google Kubernetes Engine (GKE):

`gcloud container clusters get-credentials {{cluster_name}}`

- Update all `gcloud` components:

`gcloud components update`

- Display help for a given command:

`gcloud help {{command}}`
