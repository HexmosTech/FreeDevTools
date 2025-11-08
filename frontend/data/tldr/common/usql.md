---
title: "Control SQL Databases - Universal CLI with usql | Online Free DevTools by Hexmos"
name: usql
path: "/freedevtools/tldr/common/usql/"
canonical: "https://hexmos.com/freedevtools/tldr/common/usql/"
description: "Control SQL databases with usql. Connect to various databases, execute SQL commands, and manage database schema. Free online tool, no registration required."
category: common
keywords:
- SQL database command line tool
- Universal SQL client
- usql command line interface
- Database connection tool
- SQL query execution
- Database schema viewer
- CSV data importer
- SQL command execution
- Database management CLI
- Cross-platform SQL tool
features:
- Connect to multiple database types (SQL Server, MySQL, PostgreSQL, SQLite)
- Execute SQL commands from files or command line
- Display database schema information
- Export query results to a specified file
- Import data from CSV files into existing database tables
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# usql

> Universal CLI interface for SQL databases.
> More information: <https://github.com/xo/usql>.

- Connect to a specific database:

`usql {{sqlserver|mysql|postgres|sqlite3|...}}://{{username}}:{{password}}@{{host}}:{{port}}/{{database_name}}`

- Execute commands from a file:

`usql --file={{path/to/query.sql}}`

- Execute a specific SQL command:

`usql --command="{{sql_command}}"`

- Run an SQL command in the `usql` prompt:

`{{prompt}}=> {{command}}`

- Display the database schema:

`{{prompt}}=> \d`

- Export query results to a specific file:

`{{prompt}}=> \g {{path/to/file_with_results}}`

- Import data from a CSV file into a specific table:

`{{prompt}}=> \copy {{path/to/data.csv}} {{table_name}}`
