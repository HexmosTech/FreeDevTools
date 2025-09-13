---
title: "pg_dump - Extract PostgreSQL Databases | Free DevTools"
name: pg_dump
path: /freedevtools/tldr/common/pg_dump
canonical: "https://hexmos.com/freedevtools/tldr/common/pg_dump/"
description: "Extract PostgreSQL databases with pg_dump. Backup, restore, and migrate your databases easily. Free online tool, no registration required."
category: common
keywords:
- PostgreSQL dump
- database extraction
- PostgreSQL backup
- SQL script generation
- database archive
- pg_dump command
- database migration
- PostgreSQL data dump
- schema extraction
- command-line PostgreSQL tool
features:
- Extract PostgreSQL database into an SQL script file
- Create custom-format archive files for database backups
- Dump only database data or schema definitions
- Customize username, host, and port for connections
- Backup databases for disaster recovery or migration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pg_dump

> Extract a PostgreSQL database into a script file or other archive file.
> More information: <https://www.postgresql.org/docs/current/app-pgdump.html>.

- Dump database into an SQL-script file:

`pg_dump {{db_name}} > {{output_file.sql}}`

- Same as above, customize username:

`pg_dump {{[-U|--username]}} {{username}} {{db_name}} > {{output_file.sql}}`

- Same as above, customize host and port:

`pg_dump {{[-h|--host]}} {{host}} {{[-p|--port]}} {{port}} {{db_name}} > {{output_file.sql}}`

- Dump a database into a custom-format archive file:

`pg_dump {{[-F|--format]}} {{[c|custom]}} {{db_name}} > {{output_file.dump}}`

- Dump only database data into an SQL-script file:

`pg_dump {{[-a|--data-only]}} {{db_name}} > {{path/to/output_file.sql}}`

- Dump only schema (data definitions) into an SQL-script file:

`pg_dump {{[-s|--schema-only]}} {{db_name}} > {{path/to/output_file.sql}}`
