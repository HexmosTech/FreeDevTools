---
title: "Cluster SSH - Control Multiple Servers on macOS | Online Free DevTools by Hexmos"
name: csshx
path: "/freedevtools/tldr/osx/csshx"
canonical: "https://hexmos.com/freedevtools/tldr/osx/csshx/"
description: "Control multiple SSH servers instantly with csshX, the cluster SSH tool for macOS. Manage server clusters and execute commands simultaneously. Free online tool, no registration required."
category: osx
keywords:
- cluster ssh tool
- multiple ssh connections
- macOS ssh management
- csshX macOS
- server cluster control
- parallel ssh execution
- remote server administration
- macOS remote shell
- batch ssh commands
- osx ssh automation
features:
- Simultaneously execute commands across multiple SSH servers.
- Connect to predefined clusters from configuration files.
- Specify custom SSH keys for authentication.
- Manage server connections through command-line interface.
- Simplify remote server administration tasks.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# csshX

> Cluster SSH tool for macOS.
> More information: <https://github.com/brockgr/csshx>.

- Connect to multiple hosts:

`csshX {{hostname1}} {{hostname2}}`

- Connect to multiple hosts with a given SSH key:

`csshX {{user@hostname1}} {{user@hostname2}} --ssh_args "-i {{path/to/key_file.pem}}"`

- Connect to a pre-defined cluster from `/etc/clusters`:

`csshX cluster1`
