---
title: "SSH Keyscan - Get Public Keys | Online Free DevTools by Hexmos"
name: ssh-keyscan
path: /freedevtools/tldr/ssh/ssh-keyscan
canonical: "https://hexmos.com/freedevtools/tldr/ssh/ssh-keyscan/"
description: "Get public SSH keys instantly with SSH Keyscan. Securely manage remote host authentication with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- ssh keyscan
- ssh public key retrieval
- remote host key verification
- ssh fingerprint generator
- linux ssh keyscan
- macos ssh keyscan
- network security keyscan
- command line ssh keyscan
- ssh known_hosts update
- secure shell keyscan
features:
- Retrieve SSH keys from remote hosts
- Specify port for SSH key retrieval
- Filter by specific SSH key types
- Update known_hosts file with host fingerprint
- Automate remote host authentication
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ssh-keyscan

> Get the public SSH keys of remote hosts.
> More information: <https://man.openbsd.org/ssh-keyscan>.

- Retrieve all public SSH keys of a remote host:

`ssh-keyscan {{hostname}}`

- Retrieve all public SSH keys of a remote host listening on a specific port:

`ssh-keyscan -p {{port}} {{hostname}}`

- Retrieve certain types of public SSH keys of a remote host:

`ssh-keyscan -t {{rsa,dsa,ecdsa,ed25519}} {{hostname}}`

- Manually update the SSH known_hosts file with the fingerprint of a given host:

`ssh-keyscan -H {{hostname}} >> ~/.ssh/known_hosts`
