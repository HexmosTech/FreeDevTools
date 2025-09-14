---
title: "Kopia Backup - Create Secure Snapshots | Free DevTools"
name: kopia
path: /freedevtools/tldr/common/kopia
canonical: "https://hexmos.com/freedevtools/tldr/common/kopia/"
description: "Create backups with Kopia, a fast and secure snapshot tool. Supports encryption, deduplication, and compression for efficient storage. Free online tool, no registration required."
category: common
keywords:
- kopia backup
- data backup tool
- snapshot tool
- encryption backup
- deduplication backup
- incremental backup
- command line backup
- linux backup
- macos backup
- windows backup
features:
- Create secure encrypted backups
- Deduplicate data for efficient storage
- Take incremental snapshots of directories
- Restore snapshots to specific locations
- Manage backup policies for retention
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kopia

> Fast, secure open-source backup tool.
> Supports encryption, compression, deduplication, and incremental snapshots.
> More information: <https://kopia.io/docs/reference/command-line/>.

- Create a repository in the local filesystem:

`kopia repository create filesystem --path {{path/to/local_repository}}`

- Create a repository on Amazon S3:

`kopia repository create s3 --bucket {{bucket_name}} --access-key {{AWS_access_key_id}} --secret-access-key {{AWS_secret_access_key}}`

- Connect to a repository:

`kopia repository connect {{repository_type}} --path {{path/to/repository}}`

- Create a snapshot of a directory:

`kopia snapshot create {{path/to/directory}}`

- List snapshots:

`kopia snapshot list`

- Restore a snapshot to a specific directory:

`kopia snapshot restore {{snapshot_id}} {{path/to/target_directory}}`

- Create a new policy:

`kopia policy set --global --keep-latest {{number_of_snapshots_to_keep}} --compression {{compression_algorithm}}`

- Ignore a specific file or folder from backups:

`kopia policy set --global --add-ignore {{path/to/file_or_folder}}`
