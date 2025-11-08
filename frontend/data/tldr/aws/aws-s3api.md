---
title: "Create S3 Buckets - Manage AWS S3 Buckets | Online Free DevTools by Hexmos"
name: aws-s3api
path: "/freedevtools/tldr/aws/aws-s3api/"
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-s3api/"
description: "Create S3 buckets and manage your Amazon S3 storage effectively with aws-s3api. Control bucket properties, upload objects, and configure policies effortlessly. Free online tool, no registration required."
category: common
keywords:
- S3 bucket creation
- S3 bucket management
- AWS S3 object upload
- S3 bucket policy configuration
- S3 bucket download
- S3 bucket list objects
- S3 command line interface
- AWS command line tool
- S3 data storage
- S3 region configuration
features:
- Create S3 buckets in specific regions.
- Manage S3 bucket policies through command line.
- List and download objects within S3 buckets.
- Upload objects to S3 buckets.
- Configure S3 bucket properties programmatically.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws s3api

> Create and delete Amazon S3 buckets and edit bucket properties.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/index.html>.

- Create bucket in a specific region:

`aws s3api create-bucket --bucket {{bucket_name}} --region {{region}} --create-bucket-configuration LocationConstraint={{region}}`

- Delete a bucket:

`aws s3api delete-bucket --bucket {{bucket_name}}`

- List buckets:

`aws s3api list-buckets`

- List the objects inside of a bucket and only show each object's key and size:

`aws s3api list-objects --bucket {{bucket_name}} --query '{{Contents[].{Key: Key, Size: Size}}}'`

- Add an object to a bucket:

`aws s3api put-object --bucket {{bucket_name}} --key {{object_key}} --body {{path/to/file}}`

- Download object from a bucket (The output file is always the last argument):

`aws s3api get-object --bucket {{bucket_name}} --key {{object_key}} {{path/to/output_file}}`

- Apply an Amazon S3 bucket policy to a specified bucket:

`aws s3api put-bucket-policy --bucket {{bucket_name}} --policy file://{{path/to/bucket_policy.json}}`

- Download the Amazon S3 bucket policy from a specified bucket:

`aws s3api get-bucket-policy --bucket {{bucket_name}} --query Policy --output {{json|table|text|yaml|yaml-stream}} > {{path/to/bucket_policy}}`
