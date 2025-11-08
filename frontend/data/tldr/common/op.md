---
title: "1Password CLI - Manage Secrets & Vaults | Online Free DevTools by Hexmos"
name: op
path: "/freedevtools/tldr/common/op/"
canonical: "https://hexmos.com/freedevtools/tldr/common/op/"
description: "Manage secrets effortlessly with 1Password CLI. Securely access vaults, create items, and inject secrets using command line. Free online tool, no registration required."
category: common
keywords:
- 1Password CLI manager
- 1Password vault access
- Secret injection CLI
- 1Password item creation
- Vault management CLI
- op command-line tool
- Password manager CLI
- Secret reference tool
- Command line secrets
- Shell script secrets
features:
- Sign in to 1Password accounts
- List available vaults
- Retrieve item details in JSON
- Create new items in vaults
- Inject secrets into commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# op

> Official CLI for 1Password's desktop app.
> More information: <https://developer.1password.com/docs/cli/reference>.

- Sign in to a 1Password account:

`op signin`

- List all vaults:

`op vault list`

- Print item details in JSON format:

`op item get {{item_name}} --format json`

- Create a new item with a category in the default vault:

`op item create --category {{category_name}}`

- Print a referenced secret to `stdout`:

`op read {{secret_reference}}`

- Pass secret references from exported environment variables to a command:

`op run -- {{command}}`

- Pass secret references from an environment file to a command:

`op run --env-file {{path/to/env_file.env}} -- {{command}}`

- Read secret references from a file and save plaintext secrets to a file:

`op inject --in-file {{path/to/input_file}} --out-file {{path/to/output_file}}`
