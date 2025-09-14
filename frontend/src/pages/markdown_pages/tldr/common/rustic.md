---
title: "Create Backups - Manage Data with Rustic | Free DevTools"
name: rustic
path: /freedevtools/tldr/common/rustic
canonical: "https://hexmos.com/freedevtools/tldr/common/rustic/"
description: "Create backups quickly with Rustic. Encrypt, deduplicate, and manage your data using this powerful Rust-based backup tool. Free online tool, no registration required."
category: common
keywords:
- data backup tool
- encrypted backup
- deduplicated backup tool
- rust backup tool
- cross-platform backup
- command-line backup
- repository management
- incremental backup
- backup and restore
- data archive
features:
- Initialize a new backup repository
- Create backups of files and directories
- Manage backup repositories
- Utilize encryption for data security
- Perform data deduplication to reduce storage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rustic

> Create fast, encrypted, deduplicated backups powered by Rust.
> More information: <https://github.com/rustic-rs/rustic>.

- Initialize a new repository:

`rustic init --repository {{/srv/rustic-repo}}`

- Create a new backup of a file/directory to a repository:

`rustic backup --repository {{/srv/rustic-repo}} {{path/to/file_or_directory}}`
