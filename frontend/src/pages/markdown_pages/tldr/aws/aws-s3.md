---
title: "AWS S3 Control - Manage Cloud Storage | Free DevTools"
name: aws-s3
path: /freedevtools/tldr/aws/aws-s3
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-s3/"
description: "Control AWS S3 cloud storage with this command line interface. Manage files, sync directories, and administer cloud resources effortlessly. Free online tool, no registration required."
category: common
keywords:
- AWS S3 CLI
- S3 bucket management
- Cloud storage control
- S3 sync tool
- AWS command line
- S3 file transfer
- S3 directory sync
- AWS S3 bucket operations
- AWS cloud storage
- S3 data management
features:
- List files in S3 buckets.
- Sync local files to S3 buckets.
- Sync S3 buckets to local directories.
- Exclude files during S3 synchronization.
- Remove files from S3 buckets.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws s3

> CLI for AWS S3 - provides storage through web services interfaces.
> Some subcommands such as `cp` have their own usage documentation.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/index.html>.

- Show files in a bucket:

`aws s3 ls {{bucket_name}}`

- Sync files and directories from local to bucket:

`aws s3 sync {{path/to/file1 path/to/file2 ...}} s3://{{bucket_name}}`

- Sync files and directories from bucket to local:

`aws s3 sync s3://{{bucket_name}} {{path/to/target}}`

- Sync files and directories with exclusions:

`aws s3 sync {{path/to/file1 path/to/file2 ...}} s3://{{bucket_name}} --exclude {{path/to/file}} --exclude {{path/to/directory}}/*`

- Remove file from bucket:

`aws s3 rm s3://{{bucket}}/{{path/to/file}}`

- Preview changes only:

`aws s3 {{any_command}} --dryrun`
