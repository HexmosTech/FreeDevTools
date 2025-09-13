---
title: "Manage SSH Keys - Control GitHub Keys | Free DevTools"
name: gh-ssh-key
path: /freedevtools/tldr/gh/gh-ssh-key
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-ssh-key/"
description: "Manage SSH keys with gh-ssh-key, enabling secure GitHub access. Add, list, and control your SSH keys for seamless development workflows. Free online tool, no registration required."
category: common
keywords:
- SSH key manager
- GitHub SSH key management
- SSH key adder
- Command line SSH key tool
- gh CLI SSH key
- SSH key list tool
- SSH key title editor
- SSH key authentication
- GitHub CLI tool
- OpenSSH key control
features:
- List existing SSH keys on a GitHub account
- Add new SSH keys to a GitHub account via command line
- Specify a custom title for a new SSH key
- Secure GitHub access through SSH key management
- Integrate with the GitHub CLI for simplified SSH key handling
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh ssh-key

> Manage GitHub SSH keys.
> More information: <https://cli.github.com/manual/gh_ssh-key>.

- Display help:

`gh ssh-key`

- List SSH keys for the currently authenticated user:

`gh ssh-key list`

- Add an SSH key to the currently authenticated user's account:

`gh ssh-key add {{path/to/key.pub}}`

- Add an SSH key to the currently authenticated user's account with a specific title:

`gh ssh-key add {{[-t|--title]}} {{title}} {{path/to/key.pub}}`
