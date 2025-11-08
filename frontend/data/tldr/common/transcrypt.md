---
title: "Encrypt Files - Secure Git Repositories with Transcrypt | Online Free DevTools by Hexmos"
name: transcrypt
path: "/freedevtools/tldr/common/transcrypt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/transcrypt/"
description: "Secure files using encryption with Transcrypt. Encrypt files transparently within Git repositories for enhanced data protection. Free online tool, no registration required."
category: common
keywords:
- Git encryption
- File encryption
- Repository security
- Transparent encryption
- Transcrypt encryption
- Git secret management
- Command-line encryption
- File system encryption
- Data protection git
- Git secure storage
features:
- Encrypts files within a Git repository transparently
- Lists encrypted files in a Git repository
- Displays credentials for a configured repository
- Initializes and decrypts a fresh clone of an encrypted repository
- Rekey to change the encryption cipher or password
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# transcrypt

> Transparently encrypt files within a Git repository.
> More information: <https://github.com/elasticdog/transcrypt>.

- Initialize an unconfigured repository:

`transcrypt`

- List the currently encrypted files:

`git ls-crypt`

- Display the credentials of a configured repository:

`transcrypt {{[-d|--display]}}`

- Initialize and decrypt a fresh clone of a configured repository:

`transcrypt {{[-c|--cipher]}} {{cipher}}`

- Rekey to change the encryption cipher or password:

`transcrypt {{[-r|--rekey]}}`
