---
title: "PostgreSQL CLI - Connect to PostgreSQL Databases | Online Free DevTools by Hexmos"
name: pgcli
path: /freedevtools/tldr/common/pgcli
canonical: "https://hexmos.com/freedevtools/tldr/common/pgcli/"
description: "Connect to PostgreSQL databases with pgcli, a modern CLI tool. Enhance your database interactions with autocompletion and syntax highlighting. Free online tool, no registration required."
category: common
keywords:
- postgresql cli
- postgresql command line
- database cli
- postgresql client
- psql alternative
- command line interface postgresql
- postgresql interactive shell
- sql cli
- database administration
- postgresql connection
features:
- Connect to PostgreSQL databases using connection strings
- Connect to PostgreSQL databases using command-line flags
- Utilize autocompletion for faster command entry
- Benefit from syntax highlighting for improved readability
- Display comprehensive help information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pgcli

> A modern PostgreSQL CLI with auto-completion and syntax highlighting.
> More information: <https://www.pgcli.com>.

- Connect to a PostgreSQL database using a connection string:

`pgcli postgresql://{{user}}@{{host}}/{{database}}`

- Connect to a database using flags:

`pgcli {{[-h|--host]}} {{host}} {{[-U|--username]}} {{username}} {{[-d|--dbname]}} {{database}}`

- Display help:

`pgcli --help`
