---
title: "Generate EF Core Migrations - dotnet-ef | Free DevTools"
name: dotnet-ef
path: /freedevtools/tldr/common/dotnet-ef
canonical: "https://hexmos.com/freedevtools/tldr/common/dotnet-ef/"
description: "Generate Entity Framework Core migrations with dotnet-ef. Scaffold database contexts and update databases using the command-line interface. Free online tool, no registration required."
category: common
keywords:
- ef core migration generator
- dotnet ef core database update
- dotnet ef dbcontext scaffold
- entity framework core command line
- dotnet ef migrations add
- dotnet ef migrations remove
- dotnet ef migrations list
- dotnet ef migrations script
- ef core code generation
- dotnet ef database drop
features:
- Update databases to a specific migration point.
- Drop existing databases with a single command.
- Scaffold DbContext and entity types from existing databases.
- Add, remove and list available EF Core migrations.
- Generate SQL scripts from migration ranges.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dotnet ef

> Perform design-time development tasks for Entity Framework Core.
> More information: <https://learn.microsoft.com/ef/core/cli/dotnet>.

- Update the database to a specified migration:

`dotnet ef database update {{migration}}`

- Drop the database:

`dotnet ef database drop`

- List available `DbContext` types:

`dotnet ef dbcontext list`

- Generate code for a `DbContext` and entity types for a database:

`dotnet ef dbcontext scaffold {{connection_string}} {{provider}}`

- Add a new migration:

`dotnet ef migrations add {{name}}`

- Remove the last migration, rolling back the code changes that were done for the latest migration:

`dotnet ef migrations remove`

- List available migrations:

`dotnet ef migrations list`

- Generate an SQL script from migrations range:

`dotnet ef migrations script {{from_migration}} {{to_migration}}`
