---
title: "SecretHub - Manage Secrets Securely | Online Free DevTools by Hexmos"
name: secrethub
path: "/freedevtools/tldr/common/secrethub"
canonical: "https://hexmos.com/freedevtools/tldr/common/secrethub/"
description: "Manage secrets securely with SecretHub. Keep sensitive data out of configuration files and automate secret rotation. Free online tool, no registration required."
category: common
keywords:
- secret management
- password manager cli
- secrets management command line
- credential storage
- secure variable injection
- secrethub cli
- secrets automation
- secrets encryption
- git secrets
- secrets audit
features:
- Securely store and retrieve secrets
- Generate random secrets
- Write secrets from clipboard or stdin
- Audit secret access and modifications
- Automate secret rotation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# secrethub

> Keep secrets out of configuration files.
> More information: <https://github.com/secrethub/secrethub-cli>.

- Print a secret to `stdout`:

`secrethub read {{path/to/secret}}`

- Generate a random value and store it as a new or updated secret:

`secrethub generate {{path/to/secret}}`

- Store a value from the clipboard as a new or updated secret:

`secrethub write --clip {{path/to/secret}}`

- Store a value supplied on `stdin` as a new or updated secret:

`echo "{{secret_value}}" | secrethub write {{path/to/secret}}`

- Audit a repository or secret:

`secrethub audit {{path/to/repo_or_secret}}`
