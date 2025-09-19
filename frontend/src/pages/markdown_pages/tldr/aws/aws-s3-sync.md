---
title: "AWS S3 Sync - Control S3 Data | Online Free DevTools by Hexmos"
name: aws-s3-sync
path: /freedevtools/tldr/aws/aws-s3-sync
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-s3-sync/"
description: "Control S3 data with AWS S3 Sync. Recursively sync files, directories, and objects between local systems and S3 buckets. Free online tool, no registration required."
category: common
keywords:
- aws s3 sync command
- s3 bucket synchronizer
- amazon s3 data transfer
- cloud storage sync tool
- aws cli s3 sync
- s3 directory sync
- s3 file synchronization
- s3 bucket replication
- aws s3 file manager
- command line s3 sync
features:
- Sync files between local system and S3
- Sync data between two S3 buckets
- Exclude specific files during sync
- Delete destination files not in source
- Skip unchanged files based on size and modification time
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws s3 sync

> Recursively sync files and directories between your local system and an S3 bucket, or between S3 buckets.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html>.

- Sync files and directories from local to a bucket:

`aws s3 sync {{path/to/file_or_directory}} s3://{{bucket_target_name}}/{{path/to/remote_location}}`

- Sync files and directories from a bucket to local:

`aws s3 sync s3://{{bucket_source_name}}/{{path/to/remote_location}} {{path/to/file_or_directory}}`

- Sync objects between two buckets:

`aws s3 sync s3://{{bucket_source_name}}/{{path/to/remote_location}} s3://{{bucket_target_name}}/{{path/to/remote_location}}`

- Sync local files to S3 while excluding specific files or directories:

`aws s3 sync {{path/to/file_or_directory}} s3://{{bucket_target_name}}/{{path/to/remote_location}} --exclude {{path/to/file}} --exclude {{path/to/directory}}/*`

- Sync objects between buckets and delete destination files not in source:

`aws s3 sync s3://{{bucket_source_name}}/{{path/to/remote_location}} s3://{{bucket_target_name}}/{{path/to/remote_location}} --delete`

- Sync to S3 with advanced options (set ACL and storage class):

`aws s3 sync {{path/to/local_directory}} s3://{{bucket_name}}/{{path/to/remote_location}} --acl {{private|public-read}} --storage-class {{STANDARD_IA|GLACIER}}`

- Sync files to S3 and skip unchanged ones (compare size and modification time):

`aws s3 sync {{path/to/file_or_directory}} s3://{{bucket_name}}/{{path/to/remote_location}} --size-only`

- Display help:

`aws s3 sync help`
