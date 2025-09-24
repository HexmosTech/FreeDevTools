---
title: "Manage S3 Buckets - Control S3 Storage with S3cmd | Online Free DevTools by Hexmos"
name: s3cmd
path: /freedevtools/tldr/common/s3cmd
canonical: "https://hexmos.com/freedevtools/tldr/common/s3cmd/"
description: "Manage S3 buckets and objects effectively with S3cmd. Upload, download, and control your S3 compatible object storage from the command line. Free online tool, no registration required."
category: common
keywords:
- S3 bucket manager
- S3 object storage control
- S3cmd command line tool
- AWS S3 manager
- Command line S3 client
- S3 data uploader
- S3 file downloader
- Object storage management
- s3cmd linux
- s3cmd windows
features:
- List S3 buckets and objects
- Create and delete S3 buckets
- Upload files to S3
- Download files from S3
- Move objects between S3 buckets
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# s3cmd

> Command line tool and client for uploading, retrieving and managing data in S3 compatible object storage.
> More information: <https://s3tools.org/s3cmd>.

- Invoke configuration/reconfiguration tool:

`s3cmd --configure`

- List Buckets/Folders/Objects:

`s3cmd ls s3://{{bucket|path/to/file}}`

- Create Bucket/Folder:

`s3cmd mb s3://{{bucket}}`

- Download a specific file from a bucket:

`s3cmd get s3://{{bucket_name}}/{{path/to/file}} {{path/to/local_file}}`

- Upload a file to a bucket:

`s3cmd put {{local_file}} s3://{{bucket}}/{{file}}`

- Move an object to a specific bucket location:

`s3cmd mv s3://{{src_bucket}}/{{src_object}} s3://{{dst_bucket}}/{{dst_object}}`

- Delete a specific object:

`s3cmd rm s3://{{bucket}}/{{object}}`
