---
title: "Dolt Fetch - Download Repository Objects | Online Free DevTools by Hexmos"
name: dolt-fetch
path: "/freedevtools/tldr/dolt/dolt-fetch/"
canonical: "https://hexmos.com/freedevtools/tldr/dolt/dolt-fetch/"
description: "Download Git repository objects with Dolt Fetch. Update your local Dolt database with changes from remote repositories and collaborate effectively. Free online tool, no registration required."
category: common
keywords:
- Dolt fetch command
- Dolt repository download
- Dolt remote update
- Dolt database sync
- Version control fetch
- Dolt branch synchronization
- Dolt data versioning
- SQL database fetch
- Git-compatible fetch
- Dolt command line
features:
- Download objects from a remote Dolt repository
- Update local branches with remote changes
- Fetch changes from a specific remote repository
- Overwrite conflicting history during fetch
- Synchronize your Dolt database with remote data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dolt fetch

> Download objects and refs from another repository.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-fetch>.

- Fetch the latest changes from the default remote upstream repository (origin):

`dolt fetch`

- Fetch latest changes from a specific remote upstream repository:

`dolt fetch {{remote_name}}`

- Update branches with the current state of the remote, overwriting any conflicting history:

`dolt fetch -f`
