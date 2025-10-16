---
title: "Cradle SQL - Manage Databases | Online Free DevTools by Hexmos"
name: cradle-sql
path: "/freedevtools/tldr/cradle/cradle-sql/"
canonical: "https://hexmos.com/freedevtools/tldr/cradle/cradle-sql/"
description: "Manage databases with Cradle SQL. Rebuild schema, flush tables, and populate data for PHP applications. Free online tool, no registration required."
category: common
keywords:
- cradle sql database management
- php database schema builder
- database table population
- package specific database commands
- cradle framework sql
- command line database tool
- sql schema generation
- database flushing tool
- php application database
- cradle sql package management
features:
- Rebuild database schema for PHP applications.
- Flush entire database or specific packages.
- Populate database tables for all or specific packages.
- Execute SQL commands via command line.
- Manage Cradle PHP database efficiently.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cradle sql

> Manage Cradle SQL databases.
> More information: <https://cradlephp.github.io/docs/3.B.-Reference-Command-Line-Tools.html#sql>.

- Rebuild the database schema:

`cradle sql build`

- Rebuild the database schema for a specific package:

`cradle sql build {{package}}`

- Empty the entire database:

`cradle sql flush`

- Empty the database tables for a specific package:

`cradle sql flush {{package}}`

- Populate the tables for all packages:

`cradle sql populate`

- Populate the tables for a specific package:

`cradle sql populate {{package}}`
