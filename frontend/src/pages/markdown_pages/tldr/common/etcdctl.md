---
title: "etcdctl - Control Key-Value Data | Online Free DevTools by Hexmos"
name: etcdctl
path: /freedevtools/tldr/common/etcdctl
canonical: "https://hexmos.com/freedevtools/tldr/common/etcdctl/"
description: "Control key-value data instantly with etcdctl. Store, retrieve, and manage distributed data using command line. Free online tool, no registration required."
category: common
keywords:
- etcd key-value control
- etcdctl data management
- etcdctl command line
- distributed key-value store
- etcdctl snapshot backup
- etcdctl cluster administration
- etcdctl linux
- etcdctl database interaction
- etcdctl user management
- etcdctl data watch
features:
- Store key-value pairs in etcd
- Retrieve values associated with keys
- Delete key-value pairs from etcd
- Create and restore etcd snapshots
- Watch keys for data changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# etcdctl

> Interact with `etcd`, a highly-available key-value pair store.
> More information: <https://etcd.io/docs/latest/dev-guide/interacting_v3/>.

- Display the value associated with a specified key:

`etcdctl get {{my/key}}`

- Store a key-value pair:

`etcdctl put {{my/key}} {{my_value}}`

- Delete a key-value pair:

`etcdctl del {{my/key}}`

- Store a key-value pair, reading the value from a file:

`etcdctl put {{my/file}} < {{path/to/file.txt}}`

- Save a snapshot of the etcd keystore:

`etcdctl snapshot save {{path/to/snapshot.db}}`

- Restore a snapshot of an etcd keystore (restart the etcd server afterwards):

`etcdctl snapshot restore {{path/to/snapshot.db}}`

- Add a user:

`etcdctl user add {{my_user}}`

- Watch a key for changes:

`etcdctl watch {{my/key}}`
