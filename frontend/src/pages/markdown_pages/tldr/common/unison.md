---
title: "Synchronize Files - Unison File Synchronization | Free DevTools"
name: unison
path: /freedevtools/tldr/common/unison
canonical: "https://hexmos.com/freedevtools/tldr/common/unison/"
description: "Synchronize files easily with Unison, a powerful bidirectional file synchronization tool. Keep your directories in sync across platforms. Free online tool, no registration required."
category: common
keywords:
- file synchronization
- bidirectional sync
- directory synchronization
- unison sync
- cross platform sync
- file replication
- linux file sync
- macos file sync
- windows file sync
- file versioning
features:
- Synchronize files bidirectionally between two directories
- Automatically accept default synchronization actions
- Ignore specific file patterns during synchronization
- Resolve file conflicts intelligently
- View detailed documentation on synchronization topics
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# unison

> Bidirectional file synchronisation tool.
> More information: <https://github.com/bcpierce00/unison>.

- Sync two directories (creates log first time these two directories are synchronized):

`unison {{path/to/directory_1}} {{path/to/directory_2}}`

- Automatically accept the (non-conflicting) defaults:

`unison {{path/to/directory_1}} {{path/to/directory_2}} -auto`

- Ignore some files using a pattern:

`unison {{path/to/directory_1}} {{path/to/directory_2}} -ignore {{pattern}}`

- View documentation:

`unison -doc {{topics}}`
