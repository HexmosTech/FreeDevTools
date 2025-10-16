---
title: "Control Elasticsearch Node - Manage Operations | Online Free DevTools by Hexmos"
name: elasticsearch-node
path: "/freedevtools/tldr/elasticsearch/elasticsearch-node/"
canonical: "https://hexmos.com/freedevtools/tldr/elasticsearch/elasticsearch-node/"
description: "Control Elasticsearch node operations with elasticsearch-node. Manage node shutdown, repurpose, and view diagnostics. Free online tool, no registration required."
category: common
keywords:
- Elasticsearch node manager
- Elasticsearch cluster management
- Elasticsearch node shutdown
- Elasticsearch node repurposing
- Elasticsearch node info command
- Elasticsearch unsafe bootstrap
- Elasticsearch roles management
- Elasticsearch diagnostics tool
- Elasticsearch command-line interface
- Elasticsearch node control
features:
- Display detailed Elasticsearch node information
- Prepare nodes for cluster restarts
- Repurpose nodes for different roles
- List roles assigned to a specific node
- Show JVM version and diagnostic info
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# elasticsearch-node

> Manage low-level Elasticsearch node operations such as shutdown, repurpose, or viewing info.
> More information: <https://www.elastic.co/docs/reference/elasticsearch/command-line-tools/node-tool>.

- Display information about the current node:

`elasticsearch-node info`

- Prepare the node for a full cluster restart (e.g., after upgrading):

`elasticsearch-node unsafe-bootstrap`

- Repurpose a node for a different role (e.g., from master to data node):

`elasticsearch-node repurpose`

- List the roles assigned to the node:

`elasticsearch-node roles`

- Show the installed JVM version, Elasticsearch home path, and other diagnostic information:

`elasticsearch-node diagnostics`

- Display help:

`elasticsearch-node {{[-h|--help]}}`
