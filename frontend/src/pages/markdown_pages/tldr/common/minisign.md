---
title: "Generate Signatures - minisign | Online Free DevTools by Hexmos"
name: minisign
path: /freedevtools/tldr/common/minisign
canonical: "https://hexmos.com/freedevtools/tldr/common/minisign/"
description: "Generate secure signatures with minisign, a simple file signing tool. Verify file integrity and authenticity with trusted comments. Free online tool, no registration required."
category: common
keywords:
- file signature generator
- minisign signature tool
- file signature verification
- public key signature
- digital signature tool
- signature authentication
- file integrity check
- minisign linux
- minisign macos
- command line signature
features:
- Generate new cryptographic keypairs
- Digitally sign files with a private key
- Embed trusted comments into signatures
- Verify file signatures using a public key
- Authenticate file integrity and origin
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# minisign

> A dead simple tool to sign files and verify signatures.
> More information: <https://jedisct1.github.io/minisign/>.

- Generate a new keypair at the default location:

`minisign -G`

- Sign a file:

`minisign -Sm {{path/to/file}}`

- Sign a file, adding a trusted (signed) and an untrusted (unsigned) comment in the signature:

`minisign -Sm {{path/to/file}} -c "{{Untrusted comment}}" -t "{{Trusted comment}}"`

- Verify a file and the trusted comments in its signature using the specified public key file:

`minisign -Vm {{path/to/file}} -p {{path/to/publickey.pub}}`

- Verify a file and the trusted comments in its signature, specifying a public key as a Base64 encoded literal:

`minisign -Vm {{path/to/file}} -P "{{public_key_base64}}"`
