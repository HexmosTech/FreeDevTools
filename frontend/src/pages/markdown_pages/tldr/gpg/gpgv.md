---
title: "GPGV Signature Verify - Validate OpenPGP Signatures | Free DevTools"
name: gpgv
path: /freedevtools/tldr/gpg/gpgv
canonical: "https://hexmos.com/freedevtools/tldr/gpg/gpgv/"
description: "Verify OpenPGP signatures with GPGV, ensuring data integrity. Validate detached signatures and manage keyrings using the command line. Free online tool, no registration required."
category: common
keywords:
- OpenPGP signature verification
- GPGV signature check
- Detached signature validation
- Keyring management
- Cryptographic signature
- Data integrity verification
- Signature validation linux
- GPGV command line
- Secure data validation
- Digital signature verification
features:
- Verify OpenPGP signatures of files.
- Validate files using detached signatures.
- Manage and utilize custom keyrings for verification.
- Ensure data integrity through signature validation.
- Support secure communication via signature verification.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gpgv

> Verify OpenPGP signatures.
> More information: <https://www.gnupg.org/documentation/manuals/gnupg/gpgv.html>.

- Verify a signed file:

`gpgv {{path/to/file}}`

- Verify a signed file using a detached signature:

`gpgv {{path/to/signature}} {{path/to/file}}`

- Add a file to the list of keyrings (a single exported key also counts as a keyring):

`gpgv --keyring {{./alice.keyring}} {{path/to/signature}} {{path/to/file}}`
