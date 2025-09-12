---
title: "Secure File Transfer - Transfer Files Securely with SFTP | Free DevTools"
name: sftp
path: /freedevtools/tldr/common/sftp
canonical: "https://hexmos.com/freedevtools/tldr/common/sftp/"
description: "Transfer files securely with SFTP. Securely copy files between hosts over SSH. A versatile command for secure file transfers. Free online tool, no registration required."
category: common
keywords:
- secure file transfer
- sftp file transfer
- ssh file transfer
- command line file transfer
- remote file transfer
- linux sftp
- macos sftp
- windows sftp
- interactive sftp
- batch sftp
features:
- Connect to remote servers via SSH
- Transfer files to and from remote systems
- Recursively transfer directories
- List local and remote files
- Specify custom ports for connections
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sftp

> Secure File Transfer Program.
> Interactive program to copy files between hosts over SSH.
> For non-interactive file transfers, see `scp` or `rsync`.
> More information: <https://manned.org/sftp>.

- Connect to a remote server and enter an interactive command mode:

`sftp {{remote_user}}@{{remote_host}}`

- Connect using an alternate port:

`sftp -P {{remote_port}} {{remote_user}}@{{remote_host}}`

- Connect using a predefined host (in `~/.ssh/config`):

`sftp {{host}}`

- Transfer remote file to the local system:

`get {{path/to/remote_file}}`

- Transfer local file to the remote system:

`put {{path/to/local_file}}`

- Transfer remote directory to the local system recursively (works with `put` too):

`get -R {{path/to/remote_directory}}`

- Get list of files on local machine:

`lls`

- Get list of files on remote machine:

`ls`
