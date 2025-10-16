---
title: "Ansible Vault - Encrypt and Decrypt Files | Online Free DevTools by Hexmos"
name: ansible-vault
path: "/freedevtools/tldr/ansible/ansible-vault/"
canonical: "https://hexmos.com/freedevtools/tldr/ansible/ansible-vault/"
description: "Encrypt and decrypt Ansible files easily with Ansible Vault. Secure sensitive data within your automation projects. Free online tool, no registration required."
category: common
keywords:
- ansible vault encryption
- ansible vault decryption
- ansible secret management
- ansible password protection
- ansible data security
- ansible vault key
- ansible configuration encryption
- ansible vault file
- ansible linux
- ansible automation security
features:
- Encrypt Ansible files using a password or key file
- Decrypt Ansible files for secure access to secrets
- Re-key existing Ansible Vault files with new passwords
- Encrypt individual strings for sensitive data protection
- Manage and view encrypted Ansible data securely
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ansible-vault

> Encrypt and decrypt values, data structures and files within Ansible projects.
> More information: <https://docs.ansible.com/ansible/latest/user_guide/vault.html#id17>.

- Create a new encrypted vault file with a prompt for a password:

`ansible-vault create {{vault_file}}`

- Create a new encrypted vault file using a vault key file to encrypt it:

`ansible-vault create --vault-password-file {{password_file}} {{vault_file}}`

- Encrypt an existing file using an optional password file:

`ansible-vault encrypt --vault-password-file {{password_file}} {{vault_file}}`

- Encrypt a string using Ansible's encrypted string format, displaying interactive prompts:

`ansible-vault encrypt_string`

- View an encrypted file, using a password file to decrypt:

`ansible-vault view --vault-password-file {{password_file}} {{vault_file}}`

- Re-key already encrypted vault file with a new password file:

`ansible-vault rekey --vault-password-file {{old_password_file}} --new-vault-password-file {{new_password_file}} {{vault_file}}`
