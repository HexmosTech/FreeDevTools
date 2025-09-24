---
title: "MySQL CLI - Control Databases with mycli | Online Free DevTools by Hexmos"
name: mycli
path: /freedevtools/tldr/common/mycli
canonical: "https://hexmos.com/freedevtools/tldr/common/mycli/"
description: "Control databases instantly with mycli. Manage MySQL, MariaDB, and Percona databases through command line interface. Free online tool, no registration required."
category: common
keywords:
- MySQL CLI
- MariaDB CLI
- Percona CLI
- Database command line tool
- MySQL command line interface
- MariaDB command line interface
- Percona command line interface
- SQL auto completion
- SQL syntax highlighting
- Database client
features:
- Connect to MySQL, MariaDB, and Percona databases
- Auto-complete SQL queries and database objects
- Highlight SQL syntax for improved readability
- Execute SQL commands directly from the terminal
- Manage databases through a command-line interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mycli

> A CLI for MySQL, MariaDB, and Percona that can do auto-completion and syntax highlighting.
> More information: <https://manned.org/mycli>.

- Connect to a local database on port 3306, using the current user's username:

`mycli {{database_name}}`

- Connect to a database (user will be prompted for a password):

`mycli {{[-u|--user]}} {{username}} {{database_name}}`

- Connect to a database on another host:

`mycli {{[-h|--host]}} {{database_host}} {{[-P|--port]}} {{port}} {{[-u|--user]}} {{username}} {{database_name}}`
