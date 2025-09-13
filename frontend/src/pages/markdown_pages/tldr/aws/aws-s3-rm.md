---
title: "Delete S3 Objects - Remove Data on AWS S3 | Free DevTools"
name: aws-s3-rm
path: /freedevtools/tldr/aws/aws-s3-rm
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-s3-rm/"
description: "Delete S3 objects with AWS S3 rm. Manage and remove data efficiently using command-line interface. Free online tool, no registration required."
category: common
keywords:
- S3 object deletion
- AWS S3 data removal
- S3 bucket emptying
- AWS S3 command line
- S3 access point deletion
- AWS cloud storage management
- Recursive S3 deletion
- AWS S3 dry run
- Linux S3 object removal
- MacOS S3 data management
features:
- Delete specific S3 objects
- Preview S3 object deletion with dry-run
- Remove objects from specific S3 access points
- Recursively delete all objects from an S3 bucket
- Display help documentation for the command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws s3 rm

> Delete S3 objects.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/rm.html>.

- Delete a specific S3 object:

`aws s3 rm s3://{{bucket_name}}/{{path/to/file}}`

- Preview the deletion of a specific S3 object without deleting it (dry-run):

`aws s3 rm s3://{{bucket_name}}/{{path/to/file}} --dryrun`

- Delete an object from a specific S3 access point:

`aws s3 rm s3://arn:aws:s3:{{region}}:{{account_id}}:{{access_point}}/{{access_point_name}}/{{object_key}}`

- Remove all objects from a bucket (empty the bucket):

`aws s3 rm s3://{{bucket_name}} --recursive`

- Display help:

`aws s3 rm help`
