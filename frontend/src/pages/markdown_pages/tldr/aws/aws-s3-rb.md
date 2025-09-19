---
title: "AWS S3 Delete - Remove Empty S3 Buckets | Online Free DevTools by Hexmos"
name: aws-s3-rb
path: /freedevtools/tldr/aws/aws-s3-rb
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-s3-rb/"
description: "Delete empty AWS S3 buckets quickly with AWS S3 RB. Force delete buckets and objects using the command line interface. Free online tool, no registration required."
category: common
keywords:
- aws s3 delete bucket
- s3 bucket removal
- aws s3 rb command
- aws cloud storage delete
- s3 bucket management
- aws s3 command line tool
- aws s3 bucket deletion
- s3 bucket empty check
- aws s3 force delete
- aws s3 object removal
features:
- Delete empty S3 buckets directly from the command line
- Force delete an S3 bucket and its non-versioned objects
- Manage S3 bucket lifecycle through command interface
- Automate S3 bucket removal processes
- Integrate S3 bucket deletion into scripts and workflows
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws s3 rb

> Delete an empty S3 bucket.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/s3/rb.html>.

- Delete an empty S3 bucket:

`aws s3 rb s3://{{bucket_name}}`

- Force delete an S3 bucket and its non-versioned objects (will crash if versioned objects are present):

`aws s3 rb s3://{{bucket_name}} --force`
