---
title: "List Cloud Logging Logs - Analyze Logs | Online Free DevTools by Hexmos"
name: gcloud-logging-logs-list
path: /freedevtools/tldr/gcloud/gcloud-logging-logs-list
canonical: "https://hexmos.com/freedevtools/tldr/gcloud/gcloud-logging-logs-list/"
description: "List cloud logging logs with gcloud. Analyze log data and troubleshoot issues using advanced filtering options. Free online tool, no registration required."
category: common
keywords:
- Google Cloud Logging Logs
- gcloud logging logs list
- Cloud Logging Analysis
- Google Cloud Logs Filter
- gcloud logs command
- GCP Logging
- Cloud logging monitoring
- gcloud logging commands
- google cloud cli logging
- Google Cloud Platform logging
features:
- List all logs in a Google Cloud project
- Filter logs by bucket, location, and view
- Sort logs by specific fields in ascending or descending order
- Limit the number of logs listed
- Display verbose output with additional details
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcloud logging logs list

> List logs in a Google Cloud project.
> Useful for identifying available logs for monitoring and analysis.
> See also: `gcloud`.
> More information: <https://cloud.google.com/sdk/gcloud/reference/logging/logs/list>.

- List all logs in the current project:

`gcloud logging logs list`

- List all logs for a specific log bucket and location:

`gcloud logging logs list --bucket={{bucket_id}} --location={{location}}`

- List all logs for a specific view in a log bucket:

`gcloud logging logs list --bucket={{bucket_id}} --location={{location}} --view={{view_id}}`

- List logs with a filter expression:

`gcloud logging logs list --filter="{{expression}}"`

- List a specified number of logs:

`gcloud logging logs list --limit={{number}}`

- List logs sorted by a specific field in ascending or descending order (`~` for descending):

`gcloud logging logs list --sort-by="{{field_name}}"`

- List logs sorted by multiple fields:

`gcloud logging logs list --sort-by="{{field1}},~{{field2}}"`

- List logs with verbose output, showing additional details:

`gcloud logging logs list --verbosity=debug`
