---
title: "Doctl Auth - Control API Tokens with DigitalOcean | Online Free DevTools by Hexmos"
name: doctl-auth
path: "/freedevtools/tldr/doctl/doctl-auth/"
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-auth/"
description: "Control API tokens easily with Doctl Auth. Manage DigitalOcean authentication contexts securely and efficiently using command line. Free online tool, no registration required."
category: common
keywords:
- doctl auth manager
- digitalocean token control
- doctl context switch
- digitalocean cli auth
- api token management
- doctl authentication command
- digitalocean doctl auth
- command line token manager
- doctl auth remove
- digitalocean token list
features:
- Initialize doctl authentication with API token.
- List available authentication contexts.
- Switch between stored API tokens seamlessly.
- Remove outdated or compromised API tokens.
- Display available auth commands and options.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doctl auth

> Authenticate `doctl` with API tokens.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/auth/>.

- Open a prompt to enter an API token and label its context:

`doctl auth init --context {{token_label}}`

- List authentication contexts (API tokens):

`doctl auth {{[ls|list]}}`

- Switch contexts (API tokens):

`doctl auth switch --context {{token_label}}`

- Remove a stored authentication context (API token):

`doctl auth remove --context {{token_label}}`

- Show available commands:

`doctl auth {{[-h|--help]}}`
