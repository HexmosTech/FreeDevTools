---
title: "Generate SSH Keys - Dropbear Key Generator | Online Free DevTools by Hexmos"
name: dropbearkey
path: /freedevtools/tldr/linux/dropbearkey
canonical: "https://hexmos.com/freedevtools/tldr/linux/dropbearkey/"
description: "Generate SSH keys with Dropbear Key Generator. Create ed25519, ecdsa, and RSA keys securely. Free online tool, no registration required."
category: linux
keywords:
  - ssh key generator
  - dropbear key
  - ed25519 key generator
  - rsa key generator
  - ecdsa key generator
  - linux ssh key
  - command line keygen
  - key fingerprint tool
  - private key generator
  - public key generator
features:
  - Generate ed25519 SSH keys
  - Generate ecdsa SSH keys
  - Generate RSA SSH keys with custom key size
  - Print private key fingerprint
  - Output public key from private key file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dropbearkey

> Generate SSH keys in Dropbear format.
> More information: <https://manned.org/dropbearkey>.

- Generate an SSH key of [t]ype ed25519 and write it to key [f]ile:

`dropbearkey -t {{ed25519}} -f {{path/to/key_file}}`

- Generate an SSH key of [t]ype ecdsa and write it to key [f]ile:

`dropbearkey -t {{ecdsa}} -f {{path/to/key_file}}`

- Generate an SSH key of [t]ype RSA with 4096-bit key [s]ize and write it to key [f]ile:

`dropbearkey -t {{rsa}} -s {{4096}} -f {{path/to/key_file}}`

- Print the private key fingerprint and public key in key [f]ile:

`dropbearkey -y -f {{path/to/key_file}}`
