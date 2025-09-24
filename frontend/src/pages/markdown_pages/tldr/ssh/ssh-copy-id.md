---
title: "SSH Copy ID - Install Public Keys | Online Free DevTools by Hexmos"
name: ssh-copy-id
path: /freedevtools/tldr/ssh/ssh-copy-id
canonical: "https://hexmos.com/freedevtools/tldr/ssh/ssh-copy-id/"
description: "Install public keys with SSH Copy ID to securely access remote servers. Quickly copy your SSH keys for passwordless authentication. Free online tool, no registration required."
category: common
keywords:
- ssh key installer
- public key copier
- remote access setup
- ssh authentication
- passwordless login
- linux ssh
- macos ssh
- unix ssh
- secure shell setup
- ssh key management
features:
- Copy SSH keys to remote hosts.
- Install public keys for passwordless authentication.
- Specify a custom SSH key path.
- Define a custom port for SSH connections.
- Automate SSH key deployment.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ssh-copy-id

> Install your public key in a remote machine's authorized_keys.
> More information: <https://manned.org/ssh-copy-id>.

- Copy your keys to the remote machine:

`ssh-copy-id {{username}}@{{remote_host}}`

- Copy the given public key to the remote:

`ssh-copy-id -i {{path/to/certificate}} {{username}}@{{remote_host}}`

- Copy the given public key to the remote with specific port:

`ssh-copy-id -i {{path/to/certificate}} -p {{port}} {{username}}@{{remote_host}}`
