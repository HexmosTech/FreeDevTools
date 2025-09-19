---
title: "Drop PostgreSQL Database - Remove Databases | Online Free DevTools by Hexmos"
name: dropdb
path: /freedevtools/tldr/common/dropdb
canonical: "https://hexmos.com/freedevtools/tldr/common/dropdb/"
description: "Remove PostgreSQL databases easily with Drop PostgreSQL Database. Quickly delete databases and terminate connections using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- PostgreSQL database removal
- Drop database command
- Remove PostgreSQL database
- PostgreSQL database deletion
- Command-line database tool
- Database connection termination
- PostgreSQL command line
- PostgreSQL database management
- Delete database PostgreSQL
- Database administration tool
features:
- Remove PostgreSQL databases
- Terminate existing database connections
- Prompt for verification before deletion
- Specify a username for database connection
- Specify server host and port
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dropdb

> Remove a PostgreSQL database.
> A simple wrapper around the SQL command `DROP DATABASE`.
> More information: <https://www.postgresql.org/docs/current/app-dropdb.html>.

- Destroy a database:

`dropdb {{dbname}}`

- Request a verification prompt before any destructive actions:

`dropdb {{[-i|--interactive]}} {{database_name}}`

- Connect with a specific username and destroy a database:

`dropdb {{[-U|--username]}} {{username}} {{dbname}}`

- Force a password prompt before connecting to the database:

`dropdb {{[-W|--password]}} {{dbname}}`

- Suppress a password prompt before connecting to the database:

`dropdb {{[-w|--no-password]}} {{database_name}}`

- Specify the server host name:

`dropdb {{[-h|--host]}} {{host}} {{database_name}}`

- Specify the server port:

`dropdb {{[-p|--port]}} {{port}} {{database_name}}`

- Attempt to terminate existing connections before destroying the database:

`dropdb {{[-f|--force]}} {{database_name}}`
