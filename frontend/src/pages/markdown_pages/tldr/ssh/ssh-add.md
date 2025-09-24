---
title: "SSH-Add - Manage SSH Keys | Online Free DevTools by Hexmos"
name: ssh-add
path: "/freedevtools/tldr/ssh/ssh-add"
canonical: "https://hexmos.com/freedevtools/tldr/ssh/ssh-add/"
description: "Manage SSH keys with SSH-Add. Add, delete, and list SSH keys in ssh-agent, enhancing security and streamlining authentication. Free online tool, no registration required."
category: common
keywords:
- SSH key management
- SSH-Add Linux
- SSH-Add macOS
- SSH-Add OpenBSD
- SSH key agent control
- SSH key fingerprint
- Add SSH key
- Delete SSH key
- Load SSH key
- SSH keychain
features:
- Add SSH keys to ssh-agent
- List fingerprints of loaded SSH keys
- Delete specific SSH keys from ssh-agent
- Remove all loaded SSH keys
- Add SSH keys to both ssh-agent and keychain
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ssh-add

> Manage loaded SSH keys in the `ssh-agent`.
> Ensure that `ssh-agent` is up and running for the keys to be loaded in it.
> More information: <https://man.openbsd.org/ssh-add>.

- Add the default SSH keys in `~/.ssh` to the ssh-agent:

`ssh-add`

- Add a specific key to the ssh-agent:

`ssh-add {{path/to/private_key}}`

- List fingerprints of currently loaded keys:

`ssh-add -l`

- Delete a key from the ssh-agent:

`ssh-add -d {{path/to/private_key}}`

- Delete all currently loaded keys from the ssh-agent:

`ssh-add -D`

- Add a key to the ssh-agent and the keychain:

`ssh-add -K {{path/to/private_key}}`
