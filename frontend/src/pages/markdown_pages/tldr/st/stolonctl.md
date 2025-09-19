---
title: "Control Stolon Clusters - Manage HA PostgreSQL | Online Free DevTools by Hexmos"
name: stolonctl
path: /freedevtools/tldr/st/stolonctl
canonical: "https://hexmos.com/freedevtools/tldr/st/stolonctl/"
description: "Control Stolon clusters with stolonctl. Manage PostgreSQL high availability, get cluster status, and update specifications using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- stolon cluster management
- postgresql high availability
- stolonctl command line
- cluster status monitoring
- postgresql cluster specification
- ha postgresql manager
- stolon cluster data
- etcd postgresql ha
- postgresql cluster update
- stolon postgresql cli
features:
- Get the current status of a Stolon cluster.
- Retrieve detailed cluster data.
- Fetch the cluster specification.
- Update cluster specifications using JSON patches.
- Manage PostgreSQL high availability configurations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stolonctl

> CLI for Stolon, a cloud native PostgreSQL manager for PostgreSQL high availability.
> More information: <https://github.com/sorintlab/stolon>.

- Get cluster status:

`stolonctl --cluster-name {{cluster_name}} --store-backend {{store_backend}} --store-endpoints {{store_endpoints}} status`

- Get cluster data:

`stolonctl --cluster-name {{cluster_name}} --store-backend {{store_backend}} --store-endpoints {{store_endpoints}} clusterdata`

- Get cluster specification:

`stolonctl --cluster-name {{cluster_name}} --store-backend {{store_backend}} --store-endpoints {{store_endpoints}} spec`

- Update cluster specification with a patch in JSON format:

`stolonctl --cluster-name {{cluster_name}} --store-backend {{store_backend}} --store-endpoints {{store_endpoints}} update --patch '{{cluster_spec}}'`
