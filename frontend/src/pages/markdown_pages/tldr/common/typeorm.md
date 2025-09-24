---
title: "TypeORM - Generate Database Structures | Online Free DevTools by Hexmos"
name: typeorm
path: /freedevtools/tldr/common/typeorm
canonical: "https://hexmos.com/freedevtools/tldr/common/typeorm/"
description: "Generate database structures instantly with TypeORM. Create migrations, manage entities, and execute queries with ease. Free online tool, no registration required."
category: common
keywords:
- typeorm orm
- javascript orm
- nodejs orm
- typeorm migration
- typeorm entity
- database schema generator
- orm schema management
- typeorm cli
- typescript orm
- database migration tool
features:
- Generate new TypeORM project structures
- Create empty migration files
- Generate migration files with SQL statements
- Run all pending database migrations
- Create new entity files in specified directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# typeorm

> A JavaScript ORM that can run on Node.js, browser, Cordova, Ionic, React Native, NativeScript, and Electron platforms.
> More information: <https://typeorm.io/docs/advanced-topics/using-cli/#initialize-a-new-typeorm-project>.

- Generate a new initial TypeORM project structure:

`typeorm init`

- Create an empty migration file:

`typeorm migration:create --name {{migration_name}}`

- Create a migration file with the SQL statements to update the schema:

`typeorm migration:generate --name {{migration_name}}`

- Run all pending migrations:

`typeorm migration:run`

- Create a new entity file in a specific directory:

`typeorm entity:create --name {{entity}} --dir {{path/to/directory}}`

- Display the SQL statements to be executed by `typeorm schema:sync` on the default connection:

`typeorm schema:log`

- Execute a specific SQL statement on the default connection:

`typeorm query {{sql_sentence}}`

- Display help for a subcommand:

`typeorm {{subcommand}} --help`
