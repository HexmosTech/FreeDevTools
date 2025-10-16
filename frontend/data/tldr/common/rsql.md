---
title: "RSQL - Query Databases Interactively | Online Free DevTools by Hexmos"
name: rsql
path: "/freedevtools/tldr/common/rsql/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rsql/"
description: "Query databases interactively with RSQL. Connect to various data sources like PostgreSQL, MySQL, and SQLite. Free online tool, no registration required."
category: common
keywords:
- SQL client
- interactive database query
- PostgreSQL client
- MySQL client
- SQLite client
- command-line SQL tool
- terminal database interface
- database connection manager
- rsql terminal
- database query tool
features:
- Connect to PostgreSQL, MySQL, and SQLite databases
- Execute SQL queries from the command line
- Display results in various formats
- Support SSL connections to databases
- Use custom line separators for delimited data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rsql

> SQL client to interface with databases and other data sources inside the terminal.
> More information: <https://github.com/theseus-rs/rsql>.

- Enter interactive mode:

`rsql`

- Connect to a database (e.g. PostgreSQL):

`rsql --url {{"postgresql://user:pass@localhost/mydb"}}`

- Connect to a PostgreSQL database with SSL:

`rsql --url {{"postgresql://user:pass@localhost/db?sslmode=require"}}`

- Connect to a MySQL database with a specified charset:

`rsql --url {{"mysql://user:pass@localhost/db?charset=utf8mb4"}}`

- Run a query and exit:

`rsql --url {{"sqlite://database.db"}} -- "SELECT * FROM users LIMIT 10"`

- Set default format:

`rsql --url {{"sqlite://db.sqlite"}} --format json`

- Connect to file and use custom line separator:

`rsql --url {{"delimited://data.txt?separator=|&has_header=true"}}`
