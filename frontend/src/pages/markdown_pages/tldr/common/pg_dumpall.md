---
title: "pg_dumpall - Extract PostgreSQL Databases | Free DevTools"
name: pg_dumpall
path: /freedevtools/tldr/common/pg_dumpall
canonical: "https://hexmos.com/freedevtools/tldr/common/pg_dumpall/"
description: "Extract PostgreSQL databases with pg_dumpall. Back up entire database clusters and save them as SQL scripts for restoration or migration. Free online tool, no registration required."
category: common
keywords:
- PostgreSQL database dump
- database backup script
- PostgreSQL cluster extract
- pg_dumpall schema
- SQL database export
- PostgreSQL data recovery
- command line database
- dump PostgreSQL data
- pg_dumpall linux
- pg_dumpall database
features:
- Extract entire PostgreSQL clusters to SQL scripts
- Dump database schema only
- Dump database data only
- Specify username, host and port for database connection
- Back up multiple databases with a single command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pg_dumpall

> Extract a PostgreSQL database cluster into a script file or other archive file.
> More information: <https://www.postgresql.org/docs/current/app-pg-dumpall.html>.

- Dump all databases:

`pg_dumpall > {{path/to/file.sql}}`

- Dump all databases using a specific username:

`pg_dumpall {{[-U|--username]}} {{username}} > {{path/to/file.sql}}`

- Same as above, customize host and port:

`pg_dumpall {{[-h|--host]}} {{host}} {{[-p|--port]}} {{port}} > {{output_file.sql}}`

- Dump only database data into an SQL-script file:

`pg_dumpall {{[-a|--data-only]}} > {{path/to/file.sql}}`

- Dump only schema (data definitions) into an SQL-script file:

`pg_dumpall {{[-s|--schema-only]}} > {{output_file.sql}}`
