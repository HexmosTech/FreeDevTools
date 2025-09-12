---
title: "Rails DB - Create Databases | Free DevTools"
name: rails-db
path: /freedevtools/tldr/common/rails-db
canonical: "https://hexmos.com/freedevtools/tldr/common/rails-db/"
description: "Create databases with Rails DB, manage migrations, and seed your development environment. Optimize your database workflows with this free online tool, no registration required."
category: common
keywords:
- rails database creation
- rails database migration
- rails db setup
- rails db create
- rails db migrate
- rails db seed
- ruby on rails database commands
- activerecord migration
- database management rails
- rails db console
features:
- Create and initialize databases.
- Manage database migrations.
- Access the database console.
- Seed the database with initial data.
- Rollback recent migrations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rails db

> Various database-related subcommands for Ruby on Rails.
> More information: <https://guides.rubyonrails.org/active_record_migrations.html>.

- Create databases, load the schema, and initialize with seed data:

`rails db:setup`

- Access the database console:

`rails db`

- Create the databases defined in the current environment:

`rails db:create`

- Destroy the databases defined in the current environment:

`rails db:drop`

- Run pending migrations:

`rails db:migrate`

- View the status of each migration file:

`rails db:migrate:status`

- Rollback the last migration:

`rails db:rollback`

- Fill the current database with data defined in `db/seeds.rb`:

`rails db:seed`
