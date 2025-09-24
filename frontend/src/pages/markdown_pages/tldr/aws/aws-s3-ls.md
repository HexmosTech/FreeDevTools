---
title: "List S3 Buckets - Control S3 Objects with AWS S3 LS | Online Free DevTools by Hexmos"
name: aws-s3-ls
path: /freedevtools/tldr/aws/aws-s3-ls
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-s3-ls/"
description: "List S3 buckets instantly with AWS S3 LS. Control S3 objects, navigate directories, and manage file prefixes effortlessly. Free online tool, no registration required."
category: common
keywords:
- S3 bucket listing
- AWS S3 object management
- S3 directory navigation
- S3 prefix listing
- AWS command line interface
- S3 bucket command line
- Cloud storage listing
- AWS S3 file explorer
- S3 recursive listing
- AWS S3 help command
features:
- List all S3 buckets within an AWS account
- Display files and folders in the root of a specific bucket
- List contents of a specific directory within a bucket
- Recursively list all files within a bucket
- List files with a given prefix in a specified path
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws s3 ls

> List AWS S3 buckets, folders (prefixes), and files (objects).
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/ls.html>.

- List all buckets:

`aws s3 ls`

- List files and folders in the root of a bucket (`s3://` is optional):

`aws s3 ls s3://{{bucket_name}}`

- List files and folders directly inside a directory:

`aws s3 ls {{bucket_name}}/{{path/to/directory}}/`

- List all files in a bucket:

`aws s3 ls --recursive {{bucket_name}}`

- List all files in a path with a given prefix:

`aws s3 ls --recursive {{bucket_name}}/{{path/to/directory}}/{{prefix}}`

- Display help:

`aws s3 ls help`
