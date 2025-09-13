---
title: "SQLite3 - Query Databases | Free DevTools"
name: sqlite3
path: /freedevtools/tldr/common/sqlite3
canonical: "https://hexmos.com/freedevtools/tldr/common/sqlite3/"
description: "Query SQLite3 databases with this command-line interface. Execute SQL statements and manage database files efficiently. Free online tool, no registration required."
category: common
keywords:
- sqlite3 database query
- sqlite3 command line
- sqlite3 sql execution
- sqlite3 database manager
- sqlite3 command interface
- sqlite3 shell interaction
- sqlite3 database manipulation
- sqlite3 file based database
- sqlite3 embedded database
- sqlite3 linux database
features:
- Open interactive SQLite3 shells.
- Execute SQL statements against databases.
- Create and manage SQLite3 database files.
- Operate on existing SQLite3 databases.
- Read database schemas.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sqlite3

> Interface to SQLite 3, which is a self-contained file-based embedded SQL engine.
> More information: <https://sqlite.org/cli.html>.

- Start an interactive shell with a new database:

`sqlite3`

- Open an interactive shell against an existing database:

`sqlite3 {{path/to/database.sqlite3}}`

- Execute an SQL statement against a database and then exit:

`sqlite3 {{path/to/database.sqlite3}} '{{SELECT * FROM some_table;}}'`
