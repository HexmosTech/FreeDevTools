---
title: "Generate age Key Pairs - Encryption Keys | Online Free DevTools by Hexmos"
name: age-keygen
path: /freedevtools/tldr/common/age-keygen
canonical: "https://hexmos.com/freedevtools/tldr/common/age-keygen/"
description: "Generate encryption key pairs with age-keygen. Secure file encryption and decryption. Free online tool, no registration required."
category: common
keywords:
- age key generation
- age encryption key pair
- age public key
- age private key
- age file encryption
- age decryption key
- age linux
- age macos
- age encryption
- age identity conversion
features:
- Generate new age key pairs
- Save keys to unencrypted files
- Output public key to stdout
- Convert identities to recipients
- Print public key from an identity
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# age-keygen

> Generate `age` key pairs.
> See also: `age` for encrypting/decrypting files.
> More information: <https://manned.org/age-keygen>.

- Generate a key pair, save it to an unencrypted file, and print the public key to `stdout`:

`age-keygen {{[-o|--output]}} {{path/to/file}}`

- Convert an identit[y] to a recipient and print the public key to `stdout`:

`age-keygen -y {{path/to/file}}`
