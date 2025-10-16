---
title: "Create PostgreSQL Database - Create DB with createdb | Online Free DevTools by Hexmos"
name: createdb
path: "/freedevtools/tldr/common/createdb/"
canonical: "https://hexmos.com/freedevtools/tldr/common/createdb/"
description: "Create PostgreSQL database effortlessly with createdb. Manage database ownership, templates, and descriptions with ease. Free online tool, no registration required."
category: common
keywords:
- PostgreSQL database creation
- createdb command
- PostgreSQL database manager
- database creation command line
- PostgreSQL database owner
- database template creation
- createdb postgres
- PostgreSQL database description
- database command
- linux createdb
features:
- Create a PostgreSQL database with a specified name
- Assign ownership of a database to a specific user
- Create databases using existing templates
- Add descriptions to databases for better organization
- Manage database creation from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# createdb

> Create a PostgreSQL database.
> More information: <https://www.postgresql.org/docs/current/app-createdb.html>.

- Create a database owned by the current user:

`createdb {{database_name}}`

- Create a database owned by a specific user with a description:

`createdb {{[-O|--owner]}} {{username}} {{database_name}} '{{description}}'`

- Create a database from a template:

`createdb {{[-T|--template]}} {{template_name}} {{database_name}}`
