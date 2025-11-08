---
title: "Manage Linode Object Storage - CLI | Online Free DevTools by Hexmos"
name: linode-cli-object-storage
path: "/freedevtools/tldr/linode/linode-cli-object-storage/"
canonical: "https://hexmos.com/freedevtools/tldr/linode/linode-cli-object-storage/"
description: "Manage Linode Object Storage with linode-cli-object-storage. Create buckets, manage keys, and list clusters for efficient cloud storage management. Free online tool, no registration required."
category: common
keywords:
- Linode object storage management
- CLI object storage tool
- Cloud storage bucket creation
- Access key management
- Object storage cluster listing
- Linode storage API
- Object storage bucket deletion
- Command line object storage
- Linode CLI commands
- Object storage key revocation
features:
- List all object storage buckets
- Create new object storage buckets
- Delete existing object storage buckets
- List available object storage cluster regions
- Manage object storage access keys
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# linode-cli object-storage

> Manage Linode Object Storage.
> See also: `linode-cli`.
> More information: <https://techdocs.akamai.com/cloud-computing/docs/cli-commands-for-object-storage>.

- List all Object Storage buckets:

`linode-cli object-storage buckets list`

- Create a new Object Storage bucket:

`linode-cli object-storage buckets create --cluster {{cluster_id}} --label {{bucket_label}}`

- Delete an Object Storage bucket:

`linode-cli object-storage buckets delete {{cluster_id}} {{bucket_label}}`

- List Object Storage cluster regions:

`linode-cli object-storage clusters list`

- List access keys for Object Storage:

`linode-cli object-storage keys list`

- Create a new access key for Object Storage:

`linode-cli object-storage keys create --label {{label}}`

- Revoke an access key for Object Storage:

`linode-cli object-storage keys revoke {{access_key_id}}`
