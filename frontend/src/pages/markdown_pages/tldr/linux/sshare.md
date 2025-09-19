---
title: "Sshare - Control Slurm Shares | Online Free DevTools by Hexmos"
name: sshare
path: /freedevtools/tldr/linux/sshare
canonical: "https://hexmos.com/freedevtools/tldr/linux/sshare/"
description: "Control Slurm shares efficiently with Sshare. List shares, format output, and display specific user information. Free online tool, no registration required."
category: linux
keywords:
- slurm share control
- linux share manager
- sshare slurm command
- cluster share management
- slurm accounting tool
- share information list
- linux sshare utility
- slurm share display
- user share information
- cluster resource allocation
features:
- List Slurm share information for a cluster
- Control the output format of share data
- Filter share information by user ID
- Display share information in parsable formats (JSON, YAML)
- Customize the fields displayed in the output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sshare

> List the shares of associations to a cluster.
> More information: <https://slurm.schedmd.com/sshare.html>.

- List Slurm share information:

`sshare`

- Control the output format:

`sshare --{{parsable|parsable2|json|yaml}}`

- Control the fields to display:

`sshare {{[-o|--format]}} {{format_string}}`

- Display information for the specified users only:

`sshare {{[-u|--users]}} {{user_id_1,user_id_2,...}}`
