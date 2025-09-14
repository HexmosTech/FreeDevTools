---
title: "Generate Digests - OpenSSL dgst Command | Free DevTools"
name: openssl-dgst
path: /freedevtools/tldr/openssl/openssl-dgst
canonical: "https://hexmos.com/freedevtools/tldr/openssl/openssl-dgst/"
description: "Generate cryptographic digests with OpenSSL dgst. Secure your data using hashing algorithms and signature operations. Free online tool, no registration required."
category: common
keywords:
- openssl digest
- openssl signature
- sha256 digest
- rsa signature
- ecdsa signature
- openssl command line
- cryptography digest
- file hashing
- linux openssl
- macos openssl
features:
- Calculate SHA256 digests for files
- Sign files using RSA private keys
- Verify RSA signatures with public keys
- Sign files using ECDSA private keys
- Verify ECDSA signatures
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openssl dgst

> OpenSSL command to generate digest values and perform signature operations.
> More information: <https://www.openssl.org/docs/manmaster/man1/openssl-dgst.html>.

- Calculate the SHA256 digest for a file, saving the result to a specific file:

`openssl dgst -sha256 -binary -out {{output_file}} {{input_file}}`

- Sign a file using an RSA key, saving the result to a specific file:

`openssl dgst -sign {{private_key_file}} -sha256 -sigopt rsa_padding_mode:pss -out {{output_file}} {{input_file}}`

- Verify an RSA signature:

`openssl dgst -verify {{public_key_file}} -signature {{signature_file}} -sigopt rsa_padding_mode:pss {{signature_message_file}}`

- Sign a file using and ECDSA key:

`openssl dgst -sign {{private_key_file}} -sha256 -out {{output_file}} {{input_file}}`

- Verify an ECDSA signature:

`openssl dgst -verify {{public_key_file}} -signature {{signature_file}} {{signature_message_file}}`
