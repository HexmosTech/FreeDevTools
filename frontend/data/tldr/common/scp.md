---
title: 'Secure Copy - Transfer Files Securely with SCP | Online Free DevTools by Hexmos'
name: scp
path: '/freedevtools/tldr/common/scp/'
canonical: 'https://hexmos.com/freedevtools/tldr/common/scp/'
description: 'Securely copy files with SCP, a powerful command-line tool for transferring data between hosts using SSH. Free online tool, no registration required.'
category: common
keywords:
  - secure file transfer
  - scp command
  - ssh file copy
  - remote file transfer
  - command line file copy
  - linux scp
  - macos scp
  - scp over ssh
  - secure copy protocol
  - scp examples
features:
  - Securely copy files between local and remote hosts
  - Transfer files using a specific port over SSH
  - Recursively copy entire directories between hosts
  - Authenticate using SSH keys for secure connections
  - Transfer files between remote hosts via a local host
ogImage: 'https://hexmos.com/freedevtools/site-banner.png'
twitterImage: 'https://hexmos.com/freedevtools/site-banner.png'
---

# scp

> Secure copy.
> Copy files between hosts using Secure Copy Protocol over SSH.
> More information: <https://man.openbsd.org/scp>.

- Copy a local file to a remote host:

`scp {{path/to/local_file}} {{remote_host}}:{{path/to/remote_file}}`

- Use a specific port when connecting to the remote host:

`scp -P {{port}} {{path/to/local_file}} {{remote_host}}:{{path/to/remote_file}}`

- Copy a file from a remote host to a local directory:

`scp {{remote_host}}:{{path/to/remote_file}} {{path/to/local_directory}}`

- Recursively copy the contents of a directory from a remote host to a local directory:

`scp -r {{remote_host}}:{{path/to/remote_directory}} {{path/to/local_directory}}`

- Copy a file between two remote hosts transferring through the local host:

`scp -3 {{host1}}:{{path/to/remote_file}} {{host2}}:{{path/to/remote_directory}}`

- Use a specific username when connecting to the remote host:

`scp {{path/to/local_file}} {{remote_username}}@{{remote_host}}:{{path/to/remote_directory}}`

- Use a specific SSH private key for authentication with the remote host:

`scp -i {{~/.ssh/private_key}} {{path/to/local_file}} {{remote_host}}:{{path/to/remote_file}}`

- Use a specific proxy when connecting to the remote host:

`scp -J {{proxy_username}}@{{proxy_host}} {{path/to/local_file}} {{remote_host}}:{{path/to/remote_file}}`
