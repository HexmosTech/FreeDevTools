---
title: "Yadm Transcrypt - Encrypt Files | Online Free DevTools by Hexmos"
name: yadm-transcrypt
path: "/freedevtools/tldr/yadm/yadm-transcrypt/"
canonical: "https://hexmos.com/freedevtools/tldr/yadm/yadm-transcrypt/"
description: "Encrypt files with Yadm Transcrypt. Securely manage encrypted files within your Git repository using transparent encryption/decryption. Free online tool, no registration required."
category: common
keywords:
- Git encryption
- yadm transcrypt encryption
- transparent file encryption
- Git repository security
- file encryption tool
- data encryption management
- transcrypt options
- yadm commands
- symmetric cipher encryption
- Git security best practices
features:
- Encrypt files within a Git repository transparently
- Decrypt files within a Git repository automatically
- Set the symmetric cipher for encryption
- Re-encrypt all encrypted files with new credentials
- Display the repository's current cipher and password
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yadm transcrypt

> If `transcrypt` is installed, this command allows you to pass options directly to `transcrypt`.
> With the environment configured to use the yadm repository.
> Transcrypt enables transparent encryption and decryption of files in a Git repository.
> More information: <https://github.com/elasticdog/transcrypt>.

- Set the symmetric cipher to utilize for encryption:

`yadm transcrypt --cipher={{cipher}}`

- Pass the password to derive the key from:

`yadm transcrypt --password={{password}}`

- Assume yes and accept defaults for non-specified options:

`yadm transcrypt --yes`

- Display the current repository's cipher and password:

`yadm transcrypt --display`

- Re -encrypt all encrypted files using new credentials:

`yadm transcrypt --rekey`
