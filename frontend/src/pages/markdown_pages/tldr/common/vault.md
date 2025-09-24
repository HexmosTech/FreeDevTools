---
title: "Vault Control - Secure Data Storage | Online Free DevTools by Hexmos"
name: vault
path: /freedevtools/tldr/common/vault
canonical: "https://hexmos.com/freedevtools/tldr/common/vault/"
description: "Control secure data storage with Vault. Encrypt, store, and manage sensitive information using command-line secrets management. Free online tool, no registration required."
category: common
keywords:
- vault data storage
- vault secrets management
- vault encryption control
- vault command line tool
- vault access control
- vault server management
- vault security automation
- hashicorp vault cli
- vault key management
- vault secret backend
features:
- Initialize and unseal Vault for secure operation
- Authenticate Vault clients using tokens
- Write secrets to secure storage with flexible backends
- Read and extract specific fields from stored secrets
- Seal the Vault to remove encryption keys from memory
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vault

> Interact with HashiCorp Vault.
> More information: <https://www.vaultproject.io/docs/commands>.

- Connect to a Vault server and initialize a new encrypted data store:

`vault init`

- Unseal (unlock) the vault, by providing one of the key shares needed to access the encrypted data store:

`vault unseal {{key-share-x}}`

- Authenticate the CLI client against the Vault server, using an authentication token:

`vault auth {{authentication_token}}`

- Store a new secret in the vault, using the generic back-end called "secret":

`vault write secret/{{hello}} value={{world}}`

- Read a value from the vault, using the generic back-end called "secret":

`vault read secret/{{hello}}`

- Read a specific field from the value:

`vault read -field={{field_name}} secret/{{hello}}`

- Seal (lock) the Vault server, by removing the encryption key of the data store from memory:

`vault seal`
