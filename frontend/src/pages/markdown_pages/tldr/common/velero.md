---
title: "Velero - Backup Kubernetes Apps | Free DevTools"
name: velero
path: /freedevtools/tldr/common/velero
canonical: "https://hexmos.com/freedevtools/tldr/common/velero/"
description: "Backup Kubernetes applications with Velero. Secure your data, migrate clusters, and restore applications with ease. Free online tool, no registration required."
category: common
keywords:
- Kubernetes backup
- Velero backup
- Kubernetes restore
- Velero restore
- Kubernetes migration
- Velero migration
- Kubernetes disaster recovery
- Velero disaster recovery
- Kubernetes application backup
- Velero CLI
features:
- Create backups of Kubernetes resources
- Schedule recurring Kubernetes backups
- Restore Kubernetes applications from backups
- Delete existing Kubernetes backups
- Migrate Kubernetes applications between clusters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# velero

> Backup and migrate Kubernetes applications and their persistent volumes.
> More information: <https://velero.io/docs/main/>.

- Create a backup containing all resources:

`velero backup create {{backup_name}}`

- List all backups:

`velero backup get`

- Delete a backup:

`velero backup delete {{backup_name}}`

- Create a weekly backup, each living for 90 days (2160 hours):

`velero schedule create {{schedule_name}} --schedules="{{@every 7d}}" --ttl {{2160h0m0s}}`

- Create a restore from the latest successful backup triggered by specific schedule:

`velero restore create --from-schedule {{schedule_name}}`
