---
title: "Control Vault Secrets - Interact with Vault Using Safe | Free DevTools"
name: safe
path: /freedevtools/tldr/common/safe
canonical: "https://hexmos.com/freedevtools/tldr/common/safe/"
description: "Control Vault secrets with Safe. Manage authentication, display key hierarchies, and securely generate SSH keys. Free online tool, no registration required."
category: common
keywords:
- vault secret manager
- vault cli client
- hashicorp vault controller
- safe vault commands
- vault ssh key generator
- vault secret tree viewer
- vault authentication token
- safe move secrets
- vault target configuration
- safe environment variables
features:
- Authenticate to a HashiCorp Vault server using a token.
- Generate and store SSH key pairs securely.
- Move secrets between different paths within the Vault.
- Display the hierarchical structure of secrets.
- Configure and manage Vault targets.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# safe

> Interact with HashiCorp Vault.
> More information: <https://github.com/starkandwayne/safe>.

- Add a safe target:

`safe target {{vault_addr}} {{target_name}}`

- Authenticate the CLI client against the Vault server, using an authentication token:

`safe auth {{authentication_token}}`

- Print the environment variables describing the current target:

`safe env`

- Display a tree hierarchy of all reachable keys for a given path:

`safe tree {{path}}`

- Move a secret from one path to another:

`safe move {{path/to/old_secret}} {{path/to/new_secret}}`

- Generate a new 2048-bit SSH key-pair and store it:

`safe ssh {{2048}} {{path/to/secret}}`

- Set non-sensitive keys for a secret:

`safe set {{path/to/secret}} {{key}}={{value}}`

- Set auto-generated password in a secret:

`safe gen {{path/to/secret}} {{key}}`
