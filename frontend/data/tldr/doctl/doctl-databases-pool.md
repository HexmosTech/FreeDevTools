---
title: "Doctl Databases Pool - Manage Database Pools | Online Free DevTools by Hexmos"
name: doctl-databases-pool
path: "/freedevtools/tldr/doctl/doctl-databases-pool/"
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-databases-pool/"
description: "Manage database pools with Doctl databases pool. Create, list, and delete database connection pools for optimal performance. Free online tool, no registration required."
category: common
keywords:
- Doctl database pool management
- DigitalOcean database connection pools
- Doctl database pool creation
- Doctl database pool listing
- Doctl database pool deletion
- Doctl database connection management
- DigitalOcean database pool command line
- Database pool configuration
- Database pool scaling
- Connection pool optimization
features:
- Create new database connection pools
- List existing database connection pools
- Delete database connection pools
- Retrieve information about specific pools
- Manage database pool sizes and configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doctl databases pool

> Manage connection pools for your database cluster.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/databases/pool/>.

- Run a `doctl databases pool` command with an access token:

`doctl {{[d|databases]}} {{[p|pool]}} {{command}} {{[-t|--access-token]}} {{access_token}}`

- Retrieve information about a database connection pool:

`doctl {{[d|databases]}} {{[p|pool]}} {{[g|get]}} {{database_id}} {{pool_name}}`

- List connection pools for a database cluster:

`doctl {{[d|databases]}} {{[p|pool]}} {{[ls|list]}} {{database_id}}`

- Create a connection pool for a database:

`doctl {{[d|databases]}} {{[p|pool]}} {{[c|create]}} {{database_id}} {{pool_name}} --db {{new_pool_name}} --size {{pool_size}}`

- Delete a connection pool for a database:

`doctl {{[d|databases]}} {{[p|pool]}} {{[c|create]}} {{database_id}} {{pool_name}}`
