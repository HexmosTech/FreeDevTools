---
title: "SOPS Secrets Manager - Encrypt and Decrypt Secrets | Online Free DevTools by Hexmos"
name: sops
path: "/freedevtools/tldr/common/sops"
canonical: "https://hexmos.com/freedevtools/tldr/common/sops/"
description: "Encrypt secrets with SOPS Secrets Manager. Securely manage sensitive data using encryption, decryption, and rotation keys. Free online tool, no registration required."
category: common
keywords:
- sops secrets manager
- encrypt secrets
- decrypt secrets
- secrets management
- data encryption
- key rotation
- yaml encryption
- json encryption
- linux sops
- macos sops
features:
- Encrypt data using various KMS and encryption formats.
- Decrypt encrypted secrets to standard output.
- Update keys in encrypted SOPS files for enhanced security.
- Rotate data keys within SOPS files for improved protection.
- Extract specific keys or array elements from encrypted data.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sops

> SOPS (Secrets OPerationS): a simple and flexible tool for managing secrets.
> More information: <https://github.com/getsops/sops>.

- Encrypt a file:

`sops -e {{path/to/file.json}} > {{path/to/file.enc.json}}`

- Decrypt a file to `stdout`:

`sops -d {{path/to/file.enc.json}}`

- Update the declared keys in a `sops` file:

`sops updatekeys {{path/to/file.enc.yaml}}`

- Rotate data keys for a `sops` file:

`sops -r {{path/to/file.enc.yaml}}`

- Change the extension of the file once encrypted:

`sops -d --input-type json {{path/to/file.enc.json}}`

- Extract keys by naming them, and array elements by numbering them:

`sops -d --extract '["an_array"][1]' {{path/to/file.enc.json}}`

- Show the difference between two `sops` files:

`diff <(sops -d {{path/to/secret1.enc.yaml}}) <(sops -d {{path/to/secret2.enc.yaml}})`
