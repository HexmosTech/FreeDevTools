---
title: "Dolt Clone - Copy Databases Locally | Free DevTools"
name: dolt-clone
path: /freedevtools/tldr/common/dolt-clone
canonical: "https://hexmos.com/freedevtools/tldr/common/dolt-clone/"
description: "Clone Dolt repositories locally with Dolt Clone. Quickly copy databases, specify branches, and manage AWS credentials for seamless data replication. Free online tool, no registration required."
category: common
keywords:
- Dolt database clone
- Dolt repository copy
- Dolt clone command
- Dolt local clone
- Dolt branch clone
- Dolt AWS clone
- Dolt data version control
- Dolt database replication
- Dolt command line tool
- Git-compatible database clone
features:
- Clone Dolt repositories to a local directory
- Specify a remote name during cloning
- Clone only a specific branch of a repository
- Configure AWS credentials for cloning
- Replicate data version control for offline use
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dolt clone

> Clone a repository into a new directory.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-clone>.

- Clone an existing repository into a specific directory (defaults to the repository name):

`dolt clone {{repository_url}} {{path/to/directory}}`

- Clone an existing repository and add a specific remote (defaults to origin):

`dolt clone --remote {{remote_name}} {{repository_url}}`

- Clone an existing repository only fetching a specific branch (defaults to all branches):

`dolt clone {{[-b|--branch]}} {{branch_name}} {{repository_url}}`

- Clone a repository, using an AWS region (uses the profile's default region if none is provided):

`dolt clone --aws-region {{region_name}} {{repository_url}}`

- Clone a repository, using an AWS credentials file:

`dolt clone --aws-creds-file {{credentials_file}} {{repository_url}}`

- Clone a repository, using an AWS credentials profile (uses the default profile if none is provided):

`dolt clone --aws-creds-profile {{profile_name}} {{repository_url}}`

- Clone a repository, using an AWS credentials type:

`dolt clone --aws-creds-type {{credentials_type}} {{repository_url}}`
