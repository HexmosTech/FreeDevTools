---
title: "Databases SQL Mode - Control MySQL SQL Modes | Online Free DevTools by Hexmos"
name: doctl-databases-sql-mode
path: /freedevtools/tldr/doctl/doctl-databases-sql-mode
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-databases-sql-mode/"
description: "Control MySQL SQL Modes with doctl databases sql-mode. Configure database clusters, get and set SQL modes, and manage database settings. Free online tool, no registration required."
category: common
keywords:
- doctl databases sql mode
- MySQL SQL modes
- database cluster configuration
- doctl database management
- DigitalOcean doctl
- SQL mode settings
- database sql mode
- doctl command line
- MySQL configuration
- database administration
features:
- Get the current SQL modes of a MySQL database cluster.
- Set SQL modes for a MySQL database cluster.
- Overwrite existing SQL modes with new modes.
- Use doctl command with access tokens.
- Configure MySQL cluster via command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doctl databases sql-mode

> View and configure a MySQL database cluster's global SQL modes.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/databases/sql-mode/>.

- Run a `doctl databases sql-mode` command with an access token:

`doctl {{[d|databases]}} {{[sm|sql-mode]}} {{command}} {{[-t|--access-token]}} {{access_token}}`

- Get a MySQL database cluster's SQL modes:

`doctl {{[d|databases]}} {{[sm|sql-mode]}} {{[g|get]}} {{database_id}}`

- Overwrite a MySQL database cluster's SQL modes to the specified modes:

`doctl {{[d|databases]}} {{[sm|sql-mode]}} {{[s|set]}} {{database_id}} {{sql_mode_1 sql_mode_2 ...}}`
