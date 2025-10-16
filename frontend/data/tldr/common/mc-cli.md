---
title: "Control Object Storage - MinIO Client (mc) | Online Free DevTools by Hexmos"
name: mc.cli
path: "/freedevtools/tldr/common/mc-cli/"
canonical: "https://hexmos-com/freedevtools/tldr/common/mc-cli/"
description: "Control object storage with MinIO Client (mc). Manage S3 buckets, configure access, and list content recursively. Free online tool, no registration required."
category: common
keywords:
- object storage command line
- s3 bucket manager
- minio client mc
- cloud storage cli
- mc alias configuration
- aws s3 command line
- object storage management
- linux storage commands
- macos storage commands
- file system management
features:
- Add and manage connections to S3 servers
- Create new storage buckets easily
- List bucket contents recursively
- Configure access credentials for S3 storage
- Manage object storage from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mc

> MinIO Client for object storage and filesystems.
> May be named `mc` or `mcli` on some systems.
> More information: <https://minio.github.io/mc/>.

- Add connection to a S3 server:

`mc alias set {{local}} {{http://localhost:9000}} {{access_key}} {{secret_key}}`

- Create a bucket:

`mc mb {{local/bucket_name}}`

- List buckets and their content recursively:

`mc ls {{local}} --recursive`
