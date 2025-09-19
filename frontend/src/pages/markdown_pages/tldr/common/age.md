---
title: "Age Encryption - Encrypt and Decrypt Files | Online Free DevTools by Hexmos"
name: age
path: /freedevtools/tldr/common/age
canonical: "https://hexmos.com/freedevtools/tldr/common/age/"
description: "Encrypt files securely with Age, a modern encryption tool. Protect sensitive data using public keys, passphrases and file encryption. Free online tool, no registration required."
category: common
keywords:
- age file encryption
- file encryption
- age encryption tool
- public key encryption
- private key decryption
- age passphrase encryption
- linux file encryption
- macos file encryption
- command line encryption
- age recipients file
features:
- Encrypt files using public keys for secure sharing
- Decrypt files using private keys for authorized access
- Encrypt files with a passphrase for ease of use
- Encrypt files using a recipients file for multiple users
- Generate encrypted files suitable for archival or transfer
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# age

> A simple, modern and secure file encryption tool.
> See also: `age-keygen` for generating key pairs.
> More information: <https://github.com/FiloSottile/age>.

- Generate an encrypted file that can be decrypted with a passphrase:

`age --passphrase --output {{path/to/encrypted_file}} {{path/to/unencrypted_file}}`

- Encrypt a file with one or more public keys entered as literals (repeat the `--recipient` flag to specify multiple public keys):

`age --recipient {{public_key}} --output {{path/to/encrypted_file}} {{path/to/unencrypted_file}}`

- Encrypt a file to one or more recipients with their public keys specified in a file (one per line):

`age --recipients-file {{path/to/recipients_file}} --output {{path/to/encrypted_file}} {{path/to/unencrypted_file}}`

- Decrypt a file with a passphrase:

`age --decrypt --output {{path/to/decrypted_file}} {{path/to/encrypted_file}}`

- Decrypt a file with a private key file:

`age --decrypt --identity {{path/to/private_key_file}} --output {{path/to/decrypted_file}} {{path/to/encrypted_file}}`
