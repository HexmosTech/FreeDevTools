---
title: "Exoscale Storage - Manage SOS Buckets | Online Free DevTools by Hexmos"
name: exo-storage
path: /freedevtools/tldr/exo/exo-storage
canonical: "https://hexmos.com/freedevtools/tldr/exo/exo-storage/"
description: "Manage Exoscale SOS buckets and objects with exo storage. Upload, download, list objects, and manage metadata easily. Free online tool, no registration required."
category: common
keywords:
- exoscale storage management
- sos bucket manager
- object storage command line
- cloud storage tool
- exoscale cli utility
- sos bucket upload
- sos bucket download
- object metadata editor
- exoscale object storage
- sos bucket list
features:
- Create new Exoscale SOS buckets
- Upload files to specified buckets
- List objects within a given bucket
- Download objects with dry-run simulation
- Manage object metadata with custom keys
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# exo storage

> Manage the Exoscale Simple Object Storage (SOS) service.
> More information: <https://community.exoscale.com/product/storage/object-storage/>.

- Create a new SOS bucket:

`exo storage mb {{bucket_name}}`

- Upload a file to a bucket:

`exo storage put {{file_path}} {{bucket_name}}/{{prefix/}}`

- List the objects within a bucket:

`exo storage ls {{bucket_name}}`

- Simulate the download of an object from a bucket:

`exo storage get {{bucket_name}}/{{object_key}} {{local_path}} --dry-run`

- Manage the metadata of an object:

`exo storage metadata add {{bucket_name}}/{{object_key}} {{key=value}}`
