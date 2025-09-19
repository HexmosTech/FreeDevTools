---
title: "Control Chef Server - Manage Nodes with Knife | Online Free DevTools by Hexmos"
name: knife
path: /freedevtools/tldr/common/knife
canonical: "https://hexmos.com/freedevtools/tldr/common/knife/"
description: "Control your Chef server with Knife. Manage nodes, roles, and data bags easily using command-line interactions. Free online tool, no registration required."
category: common
keywords:
- Chef server management
- Knife command line tool
- Node bootstrap chef
- Role editing chef
- Data bag viewing chef
- Cookbook uploading chef
- Chef automation tool
- Infrastructure as code
- Configuration management
- Chef command reference
features:
- Bootstrap new Chef nodes
- List registered Chef nodes
- Show details of a Chef node
- Edit Chef node attributes
- Upload cookbooks to the Chef server
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# knife

> Interact with a Chef server from a local Chef repo.
> More information: <https://docs.chef.io/knife.html>.

- Bootstrap a new node:

`knife bootstrap {{fqdn_or_ip}}`

- List all registered nodes:

`knife node list`

- Show a node:

`knife node show {{node_name}}`

- Edit a node:

`knife node edit {{node_name}}`

- Edit a role:

`knife role edit {{role_name}}`

- View a data bag:

`knife data bag show {{data_bag_name}} {{data_bag_item}}`

- Upload a local cookbook to the Chef server:

`knife cookbook upload {{cookbook_name}}`
