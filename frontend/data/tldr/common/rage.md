---
title: "Encrypt Files - Secure Files with Rage | Online Free DevTools by Hexmos"
name: rage
path: "/freedevtools/tldr/common/rage/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rage/"
description: "Encrypt files securely with Rage. Protect sensitive data using modern encryption. Simple, secure, and composable file encryption tool. Free online tool, no registration required."
category: common
keywords:
- file encryption
- rage encryption
- symmetric encryption
- secure file transfer
- command line encryption
- rust encryption tool
- file encryption linux
- file encryption macOS
- file decryption
- age encryption
features:
- Encrypt files for specific recipients
- Decrypt files using identity files
- Generate encrypted files with small keys
- Support UNIX-style composability
- Secure files using modern cryptography
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rage

> A simple, secure and modern file encryption tool (and Rust library) with small explicit keys, no configuration options, and UNIX-style composability.
> Rust implementation of `age`.
> More information: <https://github.com/str4d/rage>.

- Encrypt a file for `user` and save it to `message.age`:

`echo "{{Your secret message}}" | rage --encrypt --recipient {{user}} --output {{path/to/message.age}}`

- Decrypt a file with `identity_file` and save it to `message`:

`rage --decrypt --identity {{path/to/identity_file}} --output {{message}}`
