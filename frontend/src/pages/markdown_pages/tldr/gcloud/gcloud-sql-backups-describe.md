---
title: "SQL Backups - Describe SQL Backups with gcloud | Online Free DevTools by Hexmos"
name: gcloud-sql-backups-describe
path: /freedevtools/tldr/gcloud/gcloud-sql-backups-describe
canonical: "https://hexmos.com/freedevtools/tldr/gcloud/gcloud-sql-backups-describe/"
description: "Describe SQL backups with gcloud SQL Backups Describe. Retrieve information about existing backups and manage your database instances. Free online tool, no registration required."
category: common
keywords:
- SQL backups describe
- gcloud SQL backups
- Google Cloud SQL
- database backups
- SQL backups information
- command-line SQL backups
- gcloud backups management
- cloud SQL instance
- describe database backups
- gcloud sql backups describe command
features:
- Retrieve details about a specific SQL backup.
- Identify the instance associated with the backup.
- View backup configuration details.
- Display backup creation and expiry information.
- Check the status of a SQL backup.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcloud sql backups describe

> Retrieve information about a backup.
> See also: `gcloud`.
> More information: <https://cloud.google.com/sdk/gcloud/reference/sql/backups/describe>.

- Retrieve information about a backup:

`gcloud sql backups describe {{backup_id}} --instance={{instance_id}}`
