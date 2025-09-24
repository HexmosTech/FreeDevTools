---
title: "TLmgr Key - Manage TeX Live GPG Keys | Online Free DevTools by Hexmos"
name: tlmgr-key
path: /freedevtools/tldr/tlmgr/tlmgr-key
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-key/"
description: "Manage TeX Live GPG keys with Tlmgr Key. Secure your TeX Live installation by adding, removing, and listing trusted keys. Free online tool, no registration required."
category: common
keywords:
- tlmgr key management
- tex live key add
- tex live key remove
- gpg key verification
- tex live security
- tlmgr gpg keys
- linux tlmgr key
- macos tlmgr key
- windows tlmgr key
- tex package manager key
features:
- List all TeX Live GPG keys
- Add a GPG key from a file to TeX Live
- Add a GPG key from stdin to TeX Live
- Remove a specific GPG key by its ID from TeX Live
- Verify TeX Live database integrity with GPG keys
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr key

> Manage GPG keys used to verify TeX Live databases.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#key>.

- List all keys for TeX Live:

`tlmgr key list`

- Add a key from a specific file:

`sudo tlmgr key add {{path/to/key.gpg}}`

- Add a key from `stdin`:

`cat {{path/to/key.gpg}} | sudo tlmgr key add -`

- Remove a specific key by its ID:

`sudo tlmgr key remove {{key_id}}`
