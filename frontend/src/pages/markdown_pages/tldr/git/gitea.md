---
title: "Control Gitea Server - Manage Git Repositories | Online Free DevTools by Hexmos"
name: gitea
path: /freedevtools/tldr/git/gitea
canonical: "https://hexmos.com/freedevtools/tldr/git/gitea/"
description: "Manage your Gitea server with Gitea CLI. Configure repositories, administer users, and migrate databases. Free online tool, no registration required."
category: common
keywords:
- gitea server management
- git repository administration
- gitea command line tool
- gitea database migration
- gitea user management
- git hosting server
- command line git server
- gitea configuration tool
- linux gitea admin
- command line git hosting
features:
- Manage Gitea server configurations via CLI.
- Migrate Gitea databases from the command line.
- Administer Gitea users and permissions.
- Control Gitea instance with web server commands.
- Display Gitea version information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gitea

> Administer Gitea, a lightweight Git hosting server.
> Requires a configured `app.ini` file or environment variables.
> More information: <https://docs.gitea.com/administration/command-line>.

- Run the Gitea web server using the default configuration:

`gitea web`

- Create the necessary database schema and tables:

`gitea migrate`

- Run administrative subcommands for user management or authentication management:

`gitea admin {{user list}}`

- Display help for a specific subcommand:

`gitea {{admin}} --help`

- Display help:

`gitea help`

- Display version:

`gitea --version`
