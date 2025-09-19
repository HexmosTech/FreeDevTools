---
title: "Sequelize ORM - Generate Database Models | Online Free DevTools by Hexmos"
name: sequelize
path: /freedevtools/tldr/common/sequelize
canonical: "https://hexmos.com/freedevtools/tldr/common/sequelize/"
description: "Generate database models with Sequelize ORM. Automate database interactions using migrations and seeding. Free online tool, no registration required."
category: common
keywords:
- Sequelize model generation
- Node.js ORM tool
- Database migration tool
- Database seeding tool
- PostgreSQL Sequelize commands
- MySQL Sequelize commands
- SQLite Sequelize commands
- Sequelize command line interface
- ORM database automation
- Database schema management
features:
- Generate database models with specified attributes
- Run database migrations to update schema
- Revert database migrations to previous versions
- Create database seed files for initial data
- Populate database with data from seed files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sequelize

> Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
> More information: <https://sequelize.org/docs/v7/cli/>.

- Create a model with 3 fields and a migration file:

`sequelize model:generate --name {{table_name}} --attributes {{field1:integer,field2:string,field3:boolean}}`

- Run the migration file:

`sequelize db:migrate`

- Revert all migrations:

`sequelize db:migrate:undo:all`

- Create a seed file with the specified name to populate the database:

`sequelize seed:generate --name {{seed_filename}}`

- Populate database using all seed files:

`sequelize db:seed:all`
