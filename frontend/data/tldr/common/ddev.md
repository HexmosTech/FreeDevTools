---
title: "Control ddev - PHP Development Environments | Online Free DevTools by Hexmos"
name: ddev
path: "/freedevtools/tldr/common/ddev/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ddev/"
description: "Control PHP development environments with ddev. Simplify local development, manage containers, and streamline workflows. Free online tool, no registration required."
category: common
keywords:
- ddev command
- php development environment
- docker container management
- local development workflow
- ddev configuration
- composer integration
- nvm support
- database export
- command execution
- linux macos
features:
- Start and configure ddev projects.
- Manage containerized PHP development environments.
- Execute commands within the ddev container.
- Export databases for backup and migration.
- Install specific Node.js versions using nvm.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ddev

> Container based local development tool for PHP environments.
> More information: <https://ddev.readthedocs.io/en/stable/users/usage/cli/>.

- Start up a project:

`ddev start`

- Configure a project's type and docroot:

`ddev config`

- Follow the log trail:

`ddev logs {{[-f|--follow]}}`

- Run composer within the container:

`ddev composer`

- Install a specific Node.js version:

`ddev nvm install {{version}}`

- Export a database:

`ddev export-db {{[-f|--file]}} {{/tmp/db.sql.gz}}`

- Run a specific command within a container:

`ddev exec {{echo 1}}`
