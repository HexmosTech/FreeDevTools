---
title: "Dolt SQL - Run SQL Queries | Online Free DevTools by Hexmos"
name: dolt-sql
path: "/freedevtools/tldr/dolt/dolt-sql/"
canonical: "https://hexmos.com/freedevtools/tldr/dolt/dolt-sql/"
description: "Run SQL queries with Dolt SQL. Execute SQL statements and manage databases effortlessly. Free online tool, no registration required."
category: common
keywords:
- Dolt SQL query
- SQL statement runner
- Database query tool
- Dolt database SQL
- Command line SQL
- SQL injection tool
- Dolt version control SQL
- SQL query executor
- Dolt SQL list saved queries
- common SQL platform
features:
- Execute SQL queries against Dolt databases
- List saved SQL queries within Dolt
- Run multiple SQL statements separated by semicolons
- Automate database interactions via command line
- Integrate SQL queries into scripts and workflows
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dolt sql

> Run an SQL query. Multiple SQL statements must be separated by semicolons.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-sql>.

- Run a single query:

`dolt sql {{[-q|--query]}} "{{INSERT INTO t values (1, 3);}}"`

- List all saved queries:

`dolt sql {{[-l|--list-saved]}}`
