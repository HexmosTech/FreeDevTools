---
title: "Etcd Control - Manage Distributed Key-Value Stores | Online Free DevTools by Hexmos"
name: etcd
path: /freedevtools/tldr/common/etcd
canonical: "https://hexmos.com/freedevtools/tldr/common/etcd/"
description: "Control distributed key-value stores with Etcd. Manage critical data, configure clusters, and enable extensive metrics. Free online tool, no registration required."
category: common
keywords:
- etcd control
- distributed key-value store
- etcd cluster management
- etcd data management
- etcd configuration
- etcd metrics
- etcd api
- etcd command line
- etcd distributed system
- etcd monitoring
features:
- Start a single-node etcd cluster
- Configure client URLs for etcd
- Customize the etcd cluster name
- Enable extensive metrics for debugging
- Control etcd behavior through command-line options
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# etcd

> A distributed, reliable key-value store for the most critical data of a distributed system.
> More information: <https://etcd.io>.

- Start a single-node etcd cluster:

`etcd`

- Start a single-node etcd cluster, listening for client requests on a custom URL:

`etcd --advertise-client-urls {{http://127.0.0.1:1234}} --listen-client-urls {{http://127.0.0.1:1234}}`

- Start a single-node etcd cluster with a custom name:

`etcd --name {{my_etcd_cluster}}`

- Start a single-node etcd cluster with extensive metrics available at <http://localhost:2379/debug/pprof/>:

`etcd --enable-pprof --metrics extensive`
