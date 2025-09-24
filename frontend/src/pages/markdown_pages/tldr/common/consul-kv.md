---
title: "Consul KV - Manage Key-Value Data | Online Free DevTools by Hexmos"
name: consul-kv
path: /freedevtools/tldr/common/consul-kv
canonical: "https://hexmos.com/freedevtools/tldr/common/consul-kv/"
description: "Manage key-value data with Consul KV. Store, retrieve, and delete data in a distributed key-value store using command line. Free online tool, no registration required."
category: common
keywords:
- Consul key-value store
- Distributed key-value database
- Consul data management
- Consul CLI
- KV get command
- KV put command
- KV delete command
- Data storage command
- Key-value store management
- Consul service discovery
features:
- Retrieve data from a Consul key-value store
- Store new key-value pairs in Consul
- Delete key-value pairs from Consul
- Manage distributed configuration data
- Interact with Consul via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# consul kv

> Distributed key-value store with health checking and service discovery.
> More information: <https://learn.hashicorp.com/consul/getting-started/kv>.

- Read a value from the key-value store:

`consul kv get {{key}}`

- Store a new key-value pair:

`consul kv put {{key}} {{value}}`

- Delete a key-value pair:

`consul kv delete {{key}}`
