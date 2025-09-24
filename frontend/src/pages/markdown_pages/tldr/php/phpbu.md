---
title: "PHP Backup - Create Database Backups with phpbu | Online Free DevTools by Hexmos"
name: phpbu
path: /freedevtools/tldr/php/phpbu
canonical: "https://hexmos.com/freedevtools/tldr/php/phpbu/"
description: "Create PHP backups effortlessly with phpbu. Automate database backups and application backups with configuration files. Free online tool, no registration required."
category: common
keywords:
- PHP backup utility
- MySQL backup command
- Database backup script
- Application backup automation
- Command-line backup tool
- PHP backup configuration
- phpbu backup manager
- XML backup configuration
- Server backup script
- Automated backup solutions
features:
- Create backups using a configuration file
- Limit backups to specific tasks
- Simulate backup actions without executing them
- Automate PHP application backups
- Manage database backups from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# phpbu

> A backup utility framework for PHP.
> More information: <https://phpbu.de/manual/current/en/phpbu-manual.html#cli>.

- Run backups using the default `phpbu.xml` configuration file:

`phpbu`

- Run backups using a specific configuration file:

`phpbu --configuration={{path/to/configuration_file.xml}}`

- Only run the specified backups:

`phpbu --limit={{backup_task_name}}`

- Simulate the actions that would have been performed:

`phpbu --simulate`
