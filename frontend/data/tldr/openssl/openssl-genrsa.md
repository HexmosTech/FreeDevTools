---
title: "Generate RSA Private Keys with OpenSSL | Online Free DevTools by Hexmos"
name: openssl-genrsa
path: "/freedevtools/tldr/openssl/openssl-genrsa/"
canonical: "https://hexmos.com/freedevtools/tldr/openssl/openssl-genrsa/"
description: "Generate RSA private keys securely with OpenSSL. Manage key sizes and encryption using command line. Free online tool, no registration required."
category: common
keywords:
- RSA private key generator
- OpenSSL RSA key
- Generate private key
- Command line RSA key
- Encryption key generation
- OpenSSL command
- RSA key management
- Linux key generation
- MacOS key generation
- OpenSSL RSA encryption
features:
- Generate RSA keys of variable bit lengths
- Output RSA keys to a specified file
- Encrypt RSA keys using AES256
- Create private keys from command line
- Support for password protected key generation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openssl genrsa

> OpenSSL command to generate RSA private keys.
> More information: <https://www.openssl.org/docs/manmaster/man1/openssl-genrsa.html>.

- Generate an RSA private key of 2048 bits to `stdout`:

`openssl genrsa`

- Save an RSA private key of an arbitrary number of bits to the output file:

`openssl genrsa -out {{output_file.key}} {{1234}}`

- Generate an RSA private key and encrypt it with AES256 (you will be prompted for a passphrase):

`openssl genrsa {{-aes256}}`
