---
title: "Manage Azure Redis - Control Caches | Free DevTools"
name: az-redis
path: /freedevtools/tldr/common/az-redis
canonical: "https://hexmos.com/freedevtools/tldr/common/az-redis/"
description: "Manage Azure Redis caches with AZ Redis. Control, create, update, export and delete Redis instances. Free online tool, no registration required."
category: common
keywords:
- azure redis management
- azure redis command line
- redis cache control
- az redis cli
- azure cli redis
- redis instance manager
- azure cache manager
- redis data export
- azure redis delete
- azure redis update
features:
- Create new Azure Redis cache instances
- Update existing Redis cache configurations
- Export data stored in Redis caches
- Delete Redis caches from Azure
- Manage Redis resources via the Azure CLI
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az redis

> Manage Redis caches.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/redis>.

- Create a new Redis cache instance:

`az redis create --location {{location}} {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}} --sku {{Basic|Premium|Standard}} --vm-size {{c0|c1|c2|c3|c4|c5|c6|p1|p2|p3|p4|p5}}`

- Update a Redis cache:

`az redis update {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}} --sku {{Basic|Premium|Standard}} --vm-size {{c0|c1|c2|c3|c4|c5|c6|p1|p2|p3|p4|p5}}`

- Export data stored in a Redis cache:

`az redis export --container {{container}} --file-format {{file-format}} {{[-n|--name]}} {{name}} --prefix {{prefix}} {{[-g|--resource-group]}} {{resource_group}}`

- Delete a Redis cache:

`az redis delete {{[-n|--name]}} {{name}} {{[-g|--resource-group]}} {{resource_group}} {{[-y|--yes]}}`
