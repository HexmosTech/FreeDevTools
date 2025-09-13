---
title: "AWS Backup - Control Cloud Data Backups | Free DevTools"
name: aws-backup
path: /freedevtools/tldr/aws/aws-backup
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-backup/"
description: "Control cloud data backups with AWS Backup. Schedule backups, manage recovery points, and protect your Amazon Web Services data. Free online tool, no registration required."
category: common
keywords:
- AWS backup automation
- AWS data protection
- Cloud backup management
- Amazon backup scheduling
- AWS recovery points
- AWS backup policies
- AWS backup CLI
- AWS backup reports
- AWS EBS snapshot
- AWS S3 backup
features:
- Schedule automated cloud backups for AWS services
- Manage backup policies and retention rules
- Delete AWS backup plans
- List AWS backup plans for your account
- Generate and display backup reports
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws backup

> Unified backup service designed to protect Amazon Web Services services and their associated data.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/backup/index.html>.

- Return BackupPlan details for a specific BackupPlanId:

`aws backup get-backup-plan --backup-plan-id {{id}}`

- Create a backup plan using a specific backup plan name and backup rules:

`aws backup create-backup-plan --backup-plan {{plan}}`

- Delete a specific backup plan:

`aws backup delete-backup-plan --backup-plan-id {{id}}`

- List all active backup plans for the current account:

`aws backup list-backup-plans`

- Display details about your report jobs:

`aws backup list-report-jobs`
