---
title: "doctl Replica - Manage Database Replicas | Online Free DevTools by Hexmos"
name: doctl-databases-replica
path: /freedevtools/tldr/doctl/doctl-databases-replica
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-databases-replica/"
description: "Manage database replicas with doctl Replica. Create, list, and delete read-only database replicas. Free online tool, no registration required, plus secure token management."
category: common
keywords:
- doctl database replica management
- DigitalOcean database replica control
- doctl read-only replica command
- DigitalOcean replica command line
- database replica creation doctl
- database replica deletion doctl
- DigitalOcean databases command
- doctl databases replica list
- DigitalOcean database access token
- doctl databases replica tools
features:
- Create read-only database replicas
- List available database replicas
- Delete existing database replicas
- Retrieve information about a specific replica
- Manage database replicas via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doctl databases replica

> Manage read-only replicas associated with a database cluster.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/databases/replica/>.

- Run a `doctl databases replica` command with an access token:

`doctl {{[d|databases]}} {{[p|pool]}} {{command}} {{[-t|--access-token]}} {{access_token}}`

- Retrieve information about a read-only database replica:

`doctl {{[d|databases]}} {{[r|replica]}} {{[g|get]}} {{database_id}} {{replica_name}}`

- Retrieve list of read-only database replicas:

`doctl {{[d|databases]}} {{[r|replica]}} {{[ls|list]}} {{database_id}}`

- Create a read-only database replica:

`doctl {{[d|databases]}} {{[r|replica]}} {{[c|create]}} {{database_id}} {{replica_name}}`

- Delete a read-only database replica:

`doctl {{[d|databases]}} {{[r|replica]}} {{[rm|delete]}} {{database_id}} {{replica_name}}`
