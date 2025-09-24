---
title: "Control Databases - Manage DigitalOcean Clusters | Online Free DevTools by Hexmos"
name: doctl-databases
path: /freedevtools/tldr/doctl/doctl-databases
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-databases/"
description: "Control databases with doctl-databases, manage your DigitalOcean MySQL, Redis, PostgreSQL, and MongoDB clusters easily. Free online tool, no registration required."
category: common
keywords:
- DigitalOcean databases control
- doctl database management
- MySQL cluster command line
- Redis database administration
- PostgreSQL database CLI
- MongoDB database control
- doctl create database
- doctl delete database
- doctl list databases
- DigitalOcean database commands
features:
- Create DigitalOcean database clusters
- Delete existing database clusters
- List all database clusters
- Get details for a specific database cluster
- Manage databases with access tokens
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doctl databases

> Manage your MySQL, Redis, PostgreSQL, and MongoDB database services.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/databases>.

- Run a `doctl databases` command with an access token:

`doctl {{[d|databases]}} {{command}} {{[-t|--access-token]}} {{access_token}}`

- Get details for a database cluster:

`doctl {{[d|databases]}} {{[g|get]}}`

- List your database clusters:

`doctl {{[d|databases]}} {{[ls|list]}}`

- Create a database cluster:

`doctl {{[d|databases]}} {{[c|create]}} {{database_name}}`

- Delete a cluster:

`doctl {{[d|databases]}} {{[rm|delete]}} {{database_id}}`
