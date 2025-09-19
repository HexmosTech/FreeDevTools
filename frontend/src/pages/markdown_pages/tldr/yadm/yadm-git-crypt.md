---
title: "Encrypt Files - Control Git Crypt Encryption | Online Free DevTools by Hexmos"
name: yadm-git-crypt
path: /freedevtools/tldr/yadm/yadm-git-crypt
canonical: "https://hexmos.com/freedevtools/tldr/yadm/yadm-git-crypt/"
description: "Encrypt files with YADMan Git Crypt and manage file encryption in git repositories. Secure sensitive data using GPG. Free online tool, no registration required."
category: common
keywords:
- Git Crypt encryption
- file encryption tool
- git repository security
- GPG encryption management
- yadm git-crypt commands
- encrypted file management
- git secret key export
- transparent file encryption
- linux git crypt
- command line encryption
features:
- Initialize Git Crypt repository support.
- Add GPG users for repository sharing.
- Unlock encrypted files in cloned repositories.
- Export symmetric secret keys for encryption.
- Manage transparent Git Crypt encryption.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# yadm git-crypt

> Git Crypt enables transparent encryption and decryption of files in a git repository.
> See also: `git-crypt`.
> More information: <https://github.com/AGWA/git-crypt>.

- Initialize repo to use Git Crypt:

`yadm git-crypt init`

- Share the repository using GPG:

`yadm git-crypt add-gpg-user {{user_id}}`

- After cloning a repository with encrypted files, unlock them:

`yadm git-crypt unlock`

- Export a symmetric secret key:

`yadm git-crypt export-key {{path/to/key_file}}`
