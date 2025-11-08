---
title: "Manage Cloud Storage - Control GCP Buckets | Online Free DevTools by Hexmos"
name: gsutil
path: "/freedevtools/tldr/common/gsutil/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gsutil/"
description: "Manage Google Cloud Storage with gsutil command. Upload, download, and manipulate buckets and objects. Free online tool, no registration required."
category: common
keywords:
- cloud storage manager
- gsutil command line
- google cloud bucket manager
- gcp storage control
- object storage management
- bucket operations
- cloud file transfer
- storage bucket manipulation
- gsutil linux
- gsutil macos
features:
- List buckets in a Google Cloud project
- Upload objects to Google Cloud Storage buckets
- Download objects from Google Cloud Storage buckets
- Rename or move objects within Google Cloud Storage
- Create and delete Google Cloud Storage buckets
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gsutil

> Access Google Cloud Storage.
> You can use `gsutil` to do a wide range of bucket and object management tasks.
> More information: <https://cloud.google.com/storage/docs/gsutil>.

- List all buckets in a project you are logged into:

`gsutil ls`

- List the objects in a bucket:

`gsutil ls -r 'gs://{{bucket_name}}/{{prefix}}**'`

- Download an object from a bucket:

`gsutil cp gs://{{bucket_name}}/{{object_name}} {{path/to/save_location}}`

- Upload an object to a bucket:

`gsutil cp {{object_location}} gs://{{destination_bucket_name}}/`

- Rename or move objects in a bucket:

`gsutil mv gs://{{bucket_name}}/{{old_object_name}} gs://{{bucket_name}}/{{new_object_name}}`

- Create a new bucket in the project you are logged into:

`gsutil mb gs://{{bucket_name}}`

- Delete a bucket and remove all the objects in it:

`gsutil rm -r gs://{{bucket_name}}`
