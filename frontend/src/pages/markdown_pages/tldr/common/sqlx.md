---
title: "SQLx - Create and Manage Databases | Free DevTools"
name: sqlx
path: /freedevtools/tldr/common/sqlx
canonical: "https://hexmos.com/freedevtools/tldr/common/sqlx/"
description: "Create and manage databases with SQLx, the Rust SQL toolkit. Generate migrations, run pending updates, and revert changes. Free online tool, no registration required."
category: common
keywords:
- sqlx database
- sqlx migrate
- rust sql toolkit
- database migration tool
- sql database management
- sqlx cli
- command line sql client
- postgresql migration
- mysql migration
- sqlite migration
features:
- Create databases specified in the DATABASE_URL
- Generate SQL migration files with descriptions
- Run pending SQL migrations
- Revert the latest SQL migration
- Drop specified databases
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sqlx

> Utility for SQLx, the Rust SQL toolkit.
> More information: <https://github.com/launchbadge/sqlx/blob/main/sqlx-cli/README.md>.

- Create the database specified in the DATABASE_URL environment variable:

`sqlx database create`

- Drop the specified database:

`sqlx database drop {{[-D|--database-url]}} {{database_url}}`

- Create a new pair of up and down migration files with the given description in the "migrations" directory:

`sqlx migrate add -r {{migration_description}}`

- Run all pending migrations for the specified database:

`sqlx migrate run {{[-D|--database-url]}} {{database_url}}`

- Revert the latest migration for the specified database:

`sqlx migrate revert {{[-D|--database-url]}} {{database_url}}`
