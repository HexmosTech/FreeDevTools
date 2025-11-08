---
title: "PKCS11 Tool - Manage Security Tokens | Online Free DevTools by Hexmos"
name: pkcs11-tool
path: "/freedevtools/tldr/common/pkcs11-tool/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pkcs11-tool/"
description: "Manage security tokens with PKCS11 Tool. Control PKCS #11 security modules and objects. Free online tool, no registration required."
category: common
keywords:
- security token manager
- pkcs11 object manipulation
- cryptographic module utility
- security hardware tool
- linux pkcs11
- opensc pkcs11-tool
- pkcs11 key management
- certificate store management
- slot and token enumeration
- cryptographic object deletion
features:
- List available PKCS #11 slots and tokens.
- Manage cryptographic objects within a specific PKCS #11 slot.
- Create new cryptographic objects, such as certificates and keys.
- Delete existing cryptographic objects by label and type.
- Authenticate to security tokens using a PIN.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkcs11-tool

> Utility for managing and using PKCS #11 security tokens.
> More information: <https://github.com/OpenSC/OpenSC/wiki/Using-pkcs11-tool-and-OpenSSL>.

- List slots and their potential token, using a specific module (e.g. `/usr/lib/softhsm/libsofthsm2.so`):

`pkcs11-tool --module {{path/to/module.so}} {{[-L|--list-slots]}} {{[-T|--list-token-slots]}}`

- List objects in a specific slot. (Note: `slot_id` is not the slot index shown as "Slot X"):

`pkcs11-tool {{[-O|--list-objects]}} {{[-p|--pin]}} {{auth_pin}} --slot {{slot_id}}`

- Create a new object with a specific label and type:

`pkcs11-tool --slot {{slot_id}} {{[-p|--pin]}} {{auth_pin}} {{[-y|--type]}} {{cert|privkey|pubkey|secrkey|data|...}} {{[-a|--label]}} "{{label}}" {{[-d|--id]}} {{01}} {{[-w|--write-object]}} {{path/to/cert.crt}}`

- Delete an object by its label and type:

`pkcs11-tool --slot {{slot_id}} {{[-p|--pin]}} {{auth_pin}} {{[-y|--type]}} {{cert|privkey|pubkey|secrkey|data|...}} {{[-a|--label]}} "{{label}}" {{[-b|--delete-object]}}`
