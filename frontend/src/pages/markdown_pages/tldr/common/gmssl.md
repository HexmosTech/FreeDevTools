---
title: "Generate GmSSL Crypto - SM2, SM3, SM4 | Online Free DevTools by Hexmos"
name: gmssl
path: /freedevtools/tldr/common/gmssl
canonical: "https://hexmos.com/freedevtools/tldr/common/gmssl/"
description: "Generate GmSSL crypto with SM2, SM3, SM4. Secure your data using Chinese national cryptographic algorithms, online and free! Free online tool, no registration required."
category: common
keywords:
- SM3 hash generator
- SM4 encryption tool
- SM2 key pair generator
- ZUC cipher encryption
- GmSSL command line
- SM2 public key from private key
- Chinese cryptography toolkit
- Linux crypto tools
- macOS crypto utilities
- SM9 crypto library
features:
- Generate SM3 hash for file integrity verification
- Encrypt and decrypt files with the SM4 cipher
- Generate SM2 private and public key pairs for secure communication
- Encrypt and decrypt files using the ZUC stream cipher
- Display GmSSL version information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gmssl

> GmSSL is a crypto toolkit supporting SM1, SM2, SM3, SM4, SM9, and ZUC/ZUC256.
> More information: <http://gmssl.org/english.html>.

- Generate an SM3 hash for a file:

`gmssl sm3 {{path/to/file}}`

- Encrypt a file using the SM4 cipher:

`gmssl sms4 -e -in {{path/to/file}} -out {{path/to/file.sms4}}`

- Decrypt a file using the SM4 cipher:

`gmssl sms4 -d -in {{path/to/file.sms4}}`

- Generate an SM2 private key:

`gmssl sm2 -genkey -out {{path/to/file.pem}}`

- Generate an SM2 public key from an existing private key:

`gmssl sm2 -pubout -in {{path/to/file.pem}} -out {{path/to/file.pem.pub}}`

- Encrypt a file using the ZUC cipher:

`gmssl zuc -e -in {{path/to/file}} -out {{path/to/file.zuc}}`

- Decrypt a file using the ZUC cipher:

`gmssl zuc -d -in {{path/to/file.zuc}}`

- Display version:

`gmssl version`
