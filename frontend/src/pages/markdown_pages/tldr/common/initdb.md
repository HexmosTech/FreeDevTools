---
title: "Create PostgreSQL Database - Initialize DB | Free DevTools"
name: initdb
path: /freedevtools/tldr/common/initdb
canonical: "https://hexmos.com/freedevtools/tldr/common/initdb/"
description: "Create PostgreSQL database clusters with initdb. Initialize a new PostgreSQL instance and configure storage locations. Free online tool, no registration required."
category: common
keywords:
- PostgreSQL database
- database cluster
- initdb command
- create database
- PostgreSQL initdb
- database initialization
- common commands
- database management
- PostgreSQL configuration
- command line database
features:
- Initialize PostgreSQL database clusters
- Define data storage directory for PostgreSQL
- Configure authentication methods for PostgreSQL
- Create a new PostgreSQL instance
- Generate initial database files for PostgreSQL
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# initdb

> Create a PostgreSQL database cluster on disk.
> More information: <https://www.postgresql.org/docs/current/app-initdb.html>.

- Create a database cluster at `/usr/local/var/postgres`:

`initdb {{[-D|--pgdata]}} /usr/local/var/postgres`
