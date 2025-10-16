---
title: "Linode Volumes - Manage Block Storage | Online Free DevTools by Hexmos"
name: linode-cli-volumes
path: "/freedevtools/tldr/linode/linode-cli-volumes/"
canonical: "https://hexmos.com/freedevtools/tldr/linode/linode-cli-volumes/"
description: "Manage Linode volumes easily with linode-cli. Attach, detach, resize, and create block storage volumes directly from the command line. Free online tool, no registration required."
category: common
keywords:
- linode volumes management
- linode cli block storage
- volumes attach linode
- volumes detach linode
- volumes resize linode
- volumes create linode
- linode cli volumes commands
- linode volumes linux
- block storage management
- cloud volumes control
features:
- List available Linode Volumes
- Create and attach new Volumes to Linodes
- Detach existing Volumes from Linodes
- Resize Linode Volumes to increase storage capacity
- Delete unwanted Linode Volumes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# linode-cli volumes

> Manage Linode Volumes.
> See also: `linode-cli`.
> More information: <https://techdocs.akamai.com/cloud-computing/docs/cli-commands-for-block-storage-volumes>.

- List current Volumes:

`linode-cli volumes list`

- Create a new Volume and attach it to a specific Linode:

`linode-cli volumes create --label {{volume_label}} --size {{size_in_GB}} --linode-id {{linode_id}}`

- Attach a Volume to a specific Linode:

`linode-cli volumes attach {{volume_id}} --linode-id {{linode_id}}`

- Detach a Volume from a Linode:

`linode-cli volumes detach {{volume_id}}`

- Resize a Volume (Note: Size can only be increased):

`linode-cli volumes resize {{volume_id}} --size {{new_size_in_GB}}`

- Delete a Volume:

`linode-cli volumes delete {{volume_id}}`
