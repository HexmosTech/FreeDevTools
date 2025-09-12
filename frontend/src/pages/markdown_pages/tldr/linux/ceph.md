---
title: "Ceph Storage - Manage Ceph Clusters | Free DevTools"
name: ceph
path: /freedevtools/tldr/linux/ceph
canonical: "https://hexmos.com/freedevtools/tldr/linux/ceph/"
description: "Manage Ceph storage clusters efficiently with these commands. Monitor health, usage, and perform pool operations. Free online tool, no registration required."
category: linux
keywords:
  - ceph cluster management
  - ceph storage commands
  - ceph pool creation
  - ceph pool deletion
  - ceph health check
  - ceph usage statistics
  - ceph pool renaming
  - ceph pg repair
  - ceph storage monitoring
  - ceph distributed storage
features:
  - Check Ceph cluster health status
  - Monitor Ceph cluster resource usage
  - Create and manage Ceph storage pools
  - Delete and rename Ceph storage pools
  - Initiate self-repair of Ceph storage pools
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ceph

> A unified storage system.
> More information: <https://ceph.io/en>.

- Check cluster health status:

`ceph status`

- Check cluster usage stats:

`ceph df`

- Get the statistics for the placement groups in a cluster:

`ceph pg dump --format {{plain}}`

- Create a storage pool:

`ceph osd pool create {{pool_name}} {{page_number}}`

- Delete a storage pool:

`ceph osd pool delete {{pool_name}}`

- Rename a storage pool:

`ceph osd pool rename {{current_name}} {{new_name}}`

- Self-repair pool storage:

`ceph pg repair {{pool_name}}`
