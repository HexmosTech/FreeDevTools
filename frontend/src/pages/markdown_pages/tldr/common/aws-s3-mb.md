---
title: "AWS S3 Create Bucket - Manage Cloud Storage | Free DevTools"
name: aws-s3-mb
path: /freedevtools/tldr/common/aws-s3-mb
canonical: "https://hexmos.com/freedevtools/tldr/common/aws-s3-mb/"
description: "Create AWS S3 buckets with aws s3 mb. Manage cloud storage effortlessly and define specific regions for your buckets. Free online tool, no registration required."
category: common
keywords:
- AWS S3 bucket creation
- S3 bucket management
- Cloud storage creation
- AWS CLI S3
- S3 bucket command line
- S3 bucket region configuration
- AWS S3 management
- s3cmd create bucket
- aws s3 mb command
- linux aws s3
features:
- Create S3 buckets via command line
- Specify a region for the S3 bucket
- Display help information for the `aws s3 mb` command
- Manage cloud storage efficiently
- Create S3 buckets in specific AWS regions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws s3 mb

> Create S3 buckets.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/mb.html>.

- Create an S3 bucket:

`aws s3 mb s3://{{bucket_name}}`

- Create an S3 bucket in a specific region:

`aws s3 mb s3://{{bucket_name}} --region {{region}}`

- Display help:

`aws s3 mb help`
