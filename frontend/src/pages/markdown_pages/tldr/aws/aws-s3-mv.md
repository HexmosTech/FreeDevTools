---
title: "AWS S3 Move - Transfer S3 Objects | Free DevTools"
name: aws-s3-mv
path: /freedevtools/tldr/common/aws-s3-mv
canonical: "https://hexmos.com/freedevtools/tldr/common/aws-s3-mv/"
description: "Transfer S3 objects with AWS S3 Move. Manage files between local storage and S3 buckets. Free online tool, no registration required."
category: common
keywords:
- AWS S3 object move
- S3 file transfer
- AWS S3 move command
- S3 object management
- AWS CLI S3 move
- AWS S3 bucket transfer
- command-line S3 move
- S3 data migration
- AWS cloud storage transfer
- S3 file synchronization
features:
- Move files between local and S3 storage
- Transfer objects between different S3 buckets
- Preserve original file names during S3 moves
- Move multiple S3 objects at once
- Copy files and delete original after transfer
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws s3 mv

> Move local files or S3 objects to another location locally or in S3.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/mv.html>.

- Move a file from local to a specified bucket:

`aws s3 mv {{path/to/local_file}} s3://{{bucket_name}}/{{path/to/remote_file}}`

- Move a specific S3 object into another bucket:

`aws s3 mv s3://{{bucket_name1}}/{{path/to/file}} s3://{{bucket_name2}}/{{path/to/target}}`

- Move a specific S3 object into another bucket keeping the original name:

`aws s3 mv s3://{{bucket_name1}}/{{path/to/file}} s3://{{bucket_name2}}`

- Display help:

`aws s3 mv help`
