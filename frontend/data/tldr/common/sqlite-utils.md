---
title: "SQLite Utils - Manipulate SQLite Databases | Online Free DevTools by Hexmos"
name: sqlite-utils
path: "/freedevtools/tldr/common/sqlite-utils/"
canonical: "https://hexmos.com/freedevtools/tldr/common/sqlite-utils/"
description: "Manipulate SQLite databases with SQLite Utils. Create tables, insert data, query records and manage your database efficiently. Free online tool, no registration required."
category: common
keywords:
- sqlite database editor
- sqlite database manager
- sqlite command line tool
- sqlite data manipulation
- database creation tool
- database upsert command
- sql query executor
- database table viewer
- sqlite database browser
- command line sqlite
features:
- Create new SQLite databases and tables
- Upsert JSON data into SQLite tables
- Execute SQL queries directly on SQLite databases
- List tables within a SQLite database
- Drop existing tables from a SQLite database
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sqlite-utils

> Manipulate SQLite databases in a number of different ways.
> More information: <https://sqlite-utils.datasette.io/en/stable/cli.html>.

- Create a database:

`sqlite-utils create-database {{path/to/database.db}}`

- Create a table:

`sqlite-utils create-table {{path/to/database.db}} {{table_name}} {{id integer name text height float photo blob --pk id}}`

- List tables:

`sqlite-utils tables {{path/to/database.db}}`

- Upsert a record:

`{{echo '[ {"id": 1, "name": "Linus Torvalds"}, {"id": 2, "name": "Steve Wozniak"}, {"id": 3, "name": "Tony Hoare"} ]'}} | sqlite-utils upsert {{path/to/database.db}} {{table_name}} - {{--pk id}}`

- Select records:

`sqlite-utils rows {{path/to/database.db}} {{table_name}}`

- Delete a record:

`sqlite-utils query {{path/to/database.db}} "{{delete from table_name where name = 'Tony Hoare'}}"`

- Drop a table:

`sqlite-utils drop-table {{path/to/database.db}} {{table_name}}`

- Display help:

`sqlite-utils {{[-h|--help]}}`
