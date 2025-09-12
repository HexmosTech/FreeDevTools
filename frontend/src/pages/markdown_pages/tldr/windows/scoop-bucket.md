---
title: "Scoop Bucket - Manage App Repositories | Free DevTools"
name: scoop-bucket
path: /freedevtools/tldr/windows/scoop-bucket
canonical: "https://hexmos.com/freedevtools/tldr/windows/scoop-bucket/"
description: "Manage Scoop buckets with Scoop Bucket. Add, remove, and list app repositories for easy installation. Free online tool, no registration required."
category: windows
keywords:
- scoop bucket manager
- windows package manager
- scoop repository
- scoop app installer
- scoop add bucket
- scoop remove bucket
- scoop bucket list
- scoop bucket known
- windows command line
- software repository
features:
- List all available Scoop buckets.
- Add new application buckets to Scoop.
- Remove existing buckets from Scoop.
- List currently used Scoop buckets.
- Manage software repositories efficiently.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scoop bucket

> Manage buckets: Git repositories containing files which describe how scoop installs applications.
> If Scoop doesn't know where the bucket is located its repository location must be specified.
> More information: <https://github.com/lukesampson/scoop/wiki/Buckets>.

- List all buckets currently in use:

`scoop bucket list`

- List all known buckets:

`scoop bucket known`

- Add a known bucket by its name:

`scoop bucket add {{name}}`

- Add an unknown bucket by its name and Git repository URL:

`scoop bucket add {{name}} {{https://example.com/repository.git}}`

- Remove a bucket by its name:

`scoop bucket rm {{name}}`
