---
title: "Doctl Databases DB - Manage Database Clusters | Online Free DevTools by Hexmos"
name: doctl-databases-db
path: /freedevtools/tldr/doctl/doctl-databases-db
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-databases-db/"
description: "Manage database clusters with doctl databases db. Easily create, delete, list, and get databases within DigitalOcean. Free online tool, no registration required."
category: common
keywords:
- DigitalOcean databases management
- doctl database cluster control
- database creation doctl
- database deletion doctl
- list databases doctl
- get database information doctl
- doctl database command-line
- DigitalOcean API databases
- database administration doctl
- doctl databases db command
features:
- Create new databases within a cluster
- Delete existing databases from a cluster
- List all databases in a specified cluster
- Retrieve specific database details by name
- Manage DigitalOcean database clusters using doctl
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doctl databases db

> Manage databases that are served by a database cluster.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/databases/db>.

- Run a `doctl databases db` command with an access token:

`doctl {{[d|databases]}} db {{command}} {{[-t|--access-token]}} {{access_token}}`

- Retrieve the name of the given database hosted in the given database cluster:

`doctl {{[d|databases]}} db {{[g|get]}} {{database_id}} {{database_name}}`

- List existing databases hosted within a given database cluster:

`doctl {{[d|databases]}} db {{[ls|list]}} {{database_id}}`

- Create a database with the given name in the given database cluster:

`doctl {{[d|databases]}} db {{[c|create]}} {{database_id}} {{database_name}}`

- Delete the database with the given name in the given database cluster:

`doctl {{[d|databases]}} db {{[rm|delete]}} {{database_id}} {{database_name}}`
