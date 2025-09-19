---
title: "AWS RDS Control - Manage Relational Databases | Online Free DevTools by Hexmos"
name: aws-rds
path: /freedevtools/tldr/aws/aws-rds
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-rds/"
description: "Control AWS RDS databases with this command-line tool. Manage instances, modify configurations, and apply updates efficiently. Free online tool, no registration required."
category: common
keywords:
- AWS RDS control
- Relational database management
- AWS CLI RDS commands
- RDS instance management
- Database configuration AWS
- AWS database administration
- RDS command line
- AWS RDS automation
- Cloud database control
- AWS database commands
features:
- Stop and start RDS database instances
- Modify RDS instance configurations and settings
- Apply pending maintenance actions to RDS databases
- Change RDS instance identifiers
- Reboot RDS instances securely
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws rds

> Use AWS Relational Database Service, a web service for setting up, operating and scaling relational databases.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/rds/index.html>.

- Display help for a specific RDS subcommand:

`aws rds {{subcommand}} help`

- Stop instance:

`aws rds stop-db-instance --db-instance-identifier {{instance_identifier}}`

- Start instance:

`aws rds start-db-instance --db-instance-identifier {{instance_identifier}}`

- Modify an RDS instance:

`aws rds modify-db-instance --db-instance-identifier {{instance_identifier}} {{parameters}} --apply-immediately`

- Apply updates to an RDS instance:

`aws rds apply-pending-maintenance-action --resource-identifier {{database_arn}} --apply-action {{system-update}} --opt-in-type {{immediate}}`

- Change an instance identifier:

`aws rds modify-db-instance --db-instance-identifier {{old_instance_identifier}} --new-db-instance-identifier {{new_instance_identifier}}`

- Reboot an instance:

`aws rds reboot-db-instance --db-instance-identifier {{instance_identifier}}`

- Delete an instance:

`aws rds delete-db-instance --db-instance-identifier {{instance_identifier}} --final-db-snapshot-identifier {{snapshot_identifier}} --delete-automated-backups`
