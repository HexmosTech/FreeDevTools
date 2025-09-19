---
title: "Generate Keys - OpenSSL genpkey Command | Online Free DevTools by Hexmos"
name: openssl-genpkey
path: /freedevtools/tldr/openssl/openssl-genpkey
canonical: "https://hexmos.com/freedevtools/tldr/openssl/openssl-genpkey/"
description: "Generate asymmetric keys with OpenSSL genpkey. Create RSA, EC, and ED25519 keys using the command line. Free online tool, no registration required."
category: common
keywords:
- asymmetric key generation
- openssl key generator
- rsa key generation
- ec key generation
- ed25519 key generation
- openssl genpkey command
- private key generation
- public key generation
- cryptography key generation
- command line key generation
features:
- Generate RSA private keys with specified bit length.
- Generate elliptic curve private keys using named curves.
- Generate ED25519 elliptic curve private keys.
- Save generated private keys to specific files.
- Support for multiple key generation algorithms.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openssl genpkey

> OpenSSL command to generate asymmetric key pairs.
> More information: <https://www.openssl.org/docs/manmaster/man1/openssl-genpkey.html>.

- Generate an RSA private key of 2048 bits, saving it to a specific file:

`openssl genpkey -algorithm rsa -pkeyopt rsa_keygen_bits:{{2048}} -out {{filename.key}}`

- Generate an elliptic curve private key using the curve `prime256v1`, saving it to a specific file:

`openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:{{prime256v1}} -out {{filename.key}}`

- Generate an `ED25519` elliptic curve private key, saving it to a specific file:

`openssl genpkey -algorithm {{ED25519}} -out {{filename.key}}`
