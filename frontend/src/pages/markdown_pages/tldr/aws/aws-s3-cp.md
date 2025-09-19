---
title: "AWS S3 Copy - Transfer Files | Online Free DevTools by Hexmos"
name: aws-s3-cp
path: /freedevtools/tldr/aws/aws-s3-cp
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-s3-cp/"
description: "Transfer files easily with AWS S3 Copy. Manage S3 objects, copy to/from buckets, and sync directories using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- AWS S3 file transfer
- S3 bucket copy
- AWS S3 copy command
- S3 object management
- Cloud storage transfer
- AWS command-line interface
- S3 data migration
- AWS S3 sync
- S3 file upload
- S3 file download
features:
- Copy files between local and S3 buckets
- Transfer S3 objects between different buckets
- Recursively copy directories to and from S3
- Sync local directories with S3 buckets
- Manage file transfers with the AWS CLI
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws s3 cp

> Copy local files or S3 objects to another location locally or in S3.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/cp.html>.

- Copy a file from local to a specific bucket:

`aws s3 cp {{path/to/file}} s3://{{bucket_name}}/{{path/to/remote_file}}`

- Copy a specific S3 object into another bucket:

`aws s3 cp s3://{{bucket_name1}}/{{path/to/file}} s3://{{bucket_name2}}/{{path/to/target}}`

- Copy a specific S3 object into another bucket keeping the original name:

`aws s3 cp s3://{{bucket_name1}}/{{path/to/file}} s3://{{bucket_name2}}`

- Copy S3 objects to a local directory recursively:

`aws s3 cp s3://{{bucket_name}} . --recursive`

- Display help:

`aws s3 cp help`
