---
title: "psql - Query PostgreSQL Databases | Online Free DevTools by Hexmos"
name: psql
path: /freedevtools/tldr/common/psql
canonical: "https://hexmos.com/freedevtools/tldr/common/psql/"
description: "Query PostgreSQL databases with psql command. Execute SQL queries, connect to remote servers, and manage databases via the command line. Free online tool, no registration required."
category: common
keywords:
- postgresql query
- postgresql command line
- postgresql client
- postgresql shell
- database query tool
- sql command execution
- psql linux
- psql macos
- psql connect database
- postgresql remote access
features:
- Connect to local and remote PostgreSQL servers
- Execute SQL queries from the command line
- Run SQL scripts from files
- Connect using various authentication methods
- Automate database tasks using command-line arguments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# psql

> PostgreSQL client.
> More information: <https://www.postgresql.org/docs/current/app-psql.html>.

- Connect to the database. By default, it connects to the local socket using port 5432 with the currently logged in user:

`psql {{database}}`

- Connect to the database on given server host running on given port with given username, without a password prompt:

`psql {{[-h|--host]}} {{host}} {{[-p|--port]}} {{port}} {{[-U|--username]}} {{username}} {{database}}`

- Connect to the database; user will be prompted for password:

`psql {{[-h|--host]}} {{host}} {{[-p|--port]}} {{port}} {{[-U|--username]}} {{username}} {{[-W|--password]}} {{database}}`

- Execute a single SQL query or PostgreSQL command on the given database (useful in shell scripts):

`psql {{[-c|--command]}} '{{query}}' {{database}}`

- Execute commands from a file on the given database:

`psql {{database}} {{[-f|--file]}} {{path/to/file.sql}}`
