---
title: "Create BTRFS Snapshots - Manage Filesystems | Online Free DevTools by Hexmos"
name: rusnapshot
path: "/freedevtools/tldr/linux/rusnapshot/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/rusnapshot/"
description: "Create BTRFS snapshots with rusnapshot. Easily manage your filesystem, revert changes and backup data with this powerful command line tool. Free online tool, no registration required."
category: linux
keywords:
- btrfs snapshot
- linux btrfs snapshot
- filesystem snapshot
- btrfs backup
- linux btrfs backup
- snapshot management
- btrfs command line
- rusnapshot
- btrfs restore
- linux filesystem
features:
- Create snapshots from configuration files.
- List available snapshots based on configuration.
- Delete snapshots by ID or name.
- Clean snapshots based on age and type.
- Restore filesystems to a previous snapshot state.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rusnapshot

> BTRFS snapshotting utility written in Rust.
> More information: <https://github.com/Edu4rdSHL/rusnapshot>.

- Create a snapshot using a configuration file:

`sudo rusnapshot {{[-c|--config]}} {{path/to/config.toml}} --cr`

- List created snapshots:

`sudo rusnapshot {{[-c|--config]}} {{path/to/config.toml}} {{[-l|--list]}}`

- Delete a snapshot by ID or the name of the snapshot:

`sudo rusnapshot {{[-c|--config]}} {{path/to/config.toml}} --del --id {{snapshot_id}}`

- Delete all `hourly` snapshots:

`sudo rusnapshot {{[-c|--config]}} {{path/to/config.toml}} {{[-l|--list]}} {{[-k|--keep]}} {{0}} --clean --kind {{hourly}}`

- Create a read-write snapshot:

`sudo rusnapshot {{[-c|--config]}} {{path/to/config.toml}} --cr {{[-r|--rw]}}`

- Restore a snapshot:

`sudo rusnapshot {{[-c|--config]}} {{path/to/config.toml}} --id {{snapshot_id}} {{[-r|--restore]}}`
