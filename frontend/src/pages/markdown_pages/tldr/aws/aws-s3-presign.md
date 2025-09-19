---
title: "Generate S3 Pre-signed URL - AWS S3 Presign | Online Free DevTools by Hexmos"
name: aws-s3-presign
path: /freedevtools/tldr/aws/aws-s3-presign
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-s3-presign/"
description: "Generate pre-signed URLs with AWS S3 Presign. Securely share S3 objects by creating temporary access. Free online tool, no registration required."
category: common
keywords:
- S3 pre-signed URL
- AWS S3 pre-signed URL generator
- S3 object access
- temporary URL AWS
- AWS CLI s3 presign
- s3 presign command
- aws s3 share
- amazon s3 security
- s3 pre-signed URL linux
- s3 pre-signed URL macos
features:
- Generate time-limited pre-signed URLs
- Securely share Amazon S3 objects
- Control the expiration time of pre-signed URLs
- Create temporary access to private S3 resources
- Generate URLs via the AWS CLI
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws s3 presign

> Generate pre-signed URLs for Amazon S3 objects.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/presign.html>.

- Generate a pre-signed URL for a specific S3 object that is valid for one hour:

`aws s3 presign s3://{{bucket_name}}/{{path/to/file}}`

- Generate a pre-signed URL valid for a specific lifetime:

`aws s3 presign s3://{{bucket_name}}/{{path/to/file}} --expires-in {{duration_in_seconds}}`

- Display help:

`aws s3 presign help`
