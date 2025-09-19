---
title: "Manage Keybase Identities - Control Key Directory | Online Free DevTools by Hexmos"
name: keybase
path: /freedevtools/tldr/common/keybase
canonical: "https://hexmos.com/freedevtools/tldr/common/keybase/"
description: "Manage Keybase identities and control your key directory with this free online tool. Securely map social media accounts to encryption keys, ensuring auditable proof. Free online tool, no registration required."
category: common
keywords:
- Keybase identity manager
- Social media key mapping
- Encryption key directory
- Publicly auditable keys
- Keybase command line tool
- Digital identity verification
- Cryptographic key management
- Keybase proof management
- Secure communication tool
- Open source key management
features:
- Follow other Keybase users securely
- Add and verify proofs for online identities
- Sign files with cryptographic keys
- Encrypt and decrypt files for secure sharing
- Revoke devices and deprovision Keybase
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# keybase

> Key directory that maps social media identities to encryption keys in a publicly auditable manner.
> More information: <https://book.keybase.io/docs/cli>.

- Follow another user:

`keybase follow {{username}}`

- Add a new proof:

`keybase prove {{service}} {{service_username}}`

- Sign a file:

`keybase sign {{[-i|--infile]}} {{input_file}} {{[-o|--outfile]}} {{output_file}}`

- Verify a signed file:

`keybase verify {{[-i|--infile]}} {{input_file}} {{[-o|--outfile]}} {{output_file}}`

- Encrypt a file:

`keybase encrypt {{[-i|--infile]}} {{input_file}} {{[-o|--outfile]}} {{output_file}} {{receiver}}`

- Decrypt a file:

`keybase decrypt {{[-i|--infile]}} {{input_file}} {{[-o|--outfile]}} {{output_file}}`

- Revoke current device, log out, and delete local data:

`keybase deprovision`
