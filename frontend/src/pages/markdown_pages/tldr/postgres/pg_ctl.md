---
title: "PG_CTL - Control PostgreSQL Server | Online Free DevTools by Hexmos"
name: pg_ctl
path: /freedevtools/tldr/postgres/pg_ctl
canonical: "https://hexmos.com/freedevtools/tldr/postgres/pg_ctl/"
description: "Control PostgreSQL server instances with PG_CTL. Easily start, stop, restart, and reload your PostgreSQL database cluster. Free online tool, no registration required."
category: common
keywords:
- postgresql control
- postgresql server manager
- database cluster control
- postgresql database management
- linux postgresql
- macos postgresql
- postgresql start
- postgresql stop
- postgresql restart
- postgresql reload configuration
features:
- Initialize a new PostgreSQL database cluster
- Start a PostgreSQL server instance
- Stop a running PostgreSQL server
- Restart a PostgreSQL server gracefully
- Reload server configuration without downtime
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pg_ctl

> Utility for controlling a PostgreSQL server and database cluster.
> More information: <https://www.postgresql.org/docs/current/app-pg-ctl.html>.

- Initialize a new PostgreSQL database cluster:

`pg_ctl {{[-D|--pgdata]}} {{data_directory}} init`

- Start a PostgreSQL server:

`pg_ctl {{[-D|--pgdata]}} {{data_directory}} start`

- Stop a PostgreSQL server:

`pg_ctl {{[-D|--pgdata]}} {{data_directory}} stop`

- Restart a PostgreSQL server:

`pg_ctl {{[-D|--pgdata]}} {{data_directory}} restart`

- Reload the PostgreSQL server configuration:

`pg_ctl {{[-D|--pgdata]}} {{data_directory}} reload`
