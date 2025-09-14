---
title: "SQL Export - Create Database Backups with gcloud | Free DevTools"
name: gcloud-sql-export-sql
path: /freedevtools/tldr/gcloud/gcloud-sql-export-sql
canonical: "https://hexmos.com/freedevtools/tldr/gcloud/gcloud-sql-export-sql/"
description: "Export SQL databases with gcloud SQL Export. Create backups, migrate data, and manage database instances easily. Free online tool, no registration required."
category: common
keywords:
- gcloud SQL export
- SQL database backup
- Cloud SQL export to GCS
- MySQL export gcloud
- PostgreSQL export gcloud
- Database migration gcloud
- Cloud SQL data dump
- gcloud SQL backup command
- gcloud database export
- SQL export utility
features:
- Export Cloud SQL databases to SQL files in Google Cloud Storage.
- Perform asynchronous database exports for non-blocking operations.
- Export specific databases or tables from a Cloud SQL instance.
- Offload exports to temporary instances to reduce source instance load.
- Compress SQL exports using gzip for smaller file sizes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gcloud sql export sql

> Export data from a Cloud SQL instance to an SQL file in Google Cloud Storage.
> Useful for creating backups or migrating data.
> See also: `gcloud`.
> More information: <https://cloud.google.com/sdk/gcloud/reference/sql/export/sql>.

- Export data from a specific Cloud SQL instance to a Google Cloud Storage bucket as an SQL dump file:

`gcloud sql export sql {{instance}} gs://{{bucket_name}}/{{file_name}}`

- Export data asynchronously, returning immediately without waiting for the operation to complete:

`gcloud sql export sql {{instance}} gs://{{bucket_name}}/{{file_name}} --async`

- Export data from specific databases within the Cloud SQL instance:

`gcloud sql export sql {{instance}} gs://{{bucket_name}}/{{file_name}} --database={{database1,database2,...}}`

- Export specific tables from a specified database within the Cloud SQL instance:

`gcloud sql export sql {{instance}} gs://{{bucket_name}}/{{file_name}} --database={{database}} --table={{table1,table2,...}}`

- Export data while offloading the operation to a temporary instance to reduce strain on the source instance:

`gcloud sql export sql {{instance}} gs://{{bucket_name}}/{{file_name}} --offload`

- Export data and compress the output with `gzip`:

`gcloud sql export sql {{instance}} gs://{{bucket_name}}/{{file_name}}.gz`
