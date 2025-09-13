---
title: "Create LKE Cluster - Manage Linode Kubernetes | Free DevTools"
name: linode-cli-lke
path: /freedevtools/tldr/common/linode-cli-lke
canonical: "https://hexmos.com/freedevtools/tldr/common/linode-cli-lke/"
description: "Create LKE clusters easily with linode-cli. Manage and deploy Kubernetes clusters on Linode infrastructure efficiently using command line. Free online tool, no registration required."
category: common
keywords:
- LKE cluster management
- Linode Kubernetes engine
- Kubernetes cluster creation
- linode-cli lke commands
- kubectl cluster management
- Linux LKE management
- cloud native Kubernetes
- LKE cluster deployment
- infrastructure as code LKE
- command line Kubernetes
features:
- List existing Linode Kubernetes Engine (LKE) clusters
- Create new LKE clusters with specified region, type, and node configuration
- View detailed information about a specific LKE cluster
- Update the node type of an existing LKE cluster
- Delete an LKE cluster
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# linode-cli lke

> Manage Linode Kubernetes Engine (LKE) clusters.
> See also: `linode-cli`.
> More information: <https://techdocs.akamai.com/cloud-computing/docs/cli-commands-for-lke>.

- List all LKE clusters:

`linode-cli lke clusters list`

- Create a new LKE cluster:

`linode-cli lke clusters create --region {{region}} --type {{type}} --node-type {{node_type}} --nodes-count {{count}}`

- View details of a specific LKE cluster:

`linode-cli lke clusters view {{cluster_id}}`

- Update an existing LKE cluster:

`linode-cli lke clusters update {{cluster_id}} --node-type {{new_node_type}}`

- Delete an LKE cluster:

`linode-cli lke clusters delete {{cluster_id}}`
