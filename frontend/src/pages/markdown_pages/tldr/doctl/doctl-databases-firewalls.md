---
title: "doctl Databases Firewalls - Manage Cluster Access | Free DevTools"
name: doctl-databases-firewalls
path: /freedevtools/tldr/doctl/doctl-databases-firewalls
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-databases-firewalls/"
description: "Manage database cluster firewalls with doctl. Control access rules and secure your DigitalOcean databases. Free online tool, no registration required."
category: common
keywords:
- doctl database firewalls
- digitalocean database firewalls
- database firewall management
- doctl firewall rules
- digitalocean database security
- doctl database access control
- database cluster firewall
- doctl database commands
- digitalocean doctl commands
- command-line firewall management
features:
- List firewall rules for a DigitalOcean database cluster.
- Add new firewall rules to a specified database.
- Remove existing firewall rules by UUID.
- Authenticate using a personal access token.
- Manage firewalls from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doctl databases firewalls

> Manage firewalls for database clusters.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/databases/firewalls>.

- Run a `doctl databases firewalls` command with an access token:

`doctl {{[d|databases]}} {{[fw|firewalls]}} {{command}} {{[-t|--access-token]}} {{access_token}}`

- Retrieve a list of firewall rules for a given database:

`doctl {{[d|databases]}} {{[fw|firewalls]}} {{[ls|list]}}`

- Add a database firewall rule to a given database:

`doctl {{[d|databases]}} {{[fw|firewalls]}} {{[a|append]}} {{database_id}} --rule {{droplet|k8s|ip_addr|tag|app}}:{{value}}`

- Remove a firewall rule for a given database:

`doctl {{[d|databases]}} {{[fw|firewalls]}} {{[rm|remove]}} {{database_id}} {{rule_uuid}}`
