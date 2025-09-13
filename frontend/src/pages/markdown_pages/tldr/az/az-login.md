---
title: "Azure Login - Authenticate Azure Accounts | Free DevTools"
name: az-login
path: /freedevtools/tldr/az/az-login
canonical: "https://hexmos.com/freedevtools/tldr/az/az-login/"
description: "Authenticate Azure accounts securely with Az Login. Manage Azure subscriptions and resources through the command line. Free online tool, no registration required."
category: common
keywords:
- azure login
- az cli login
- azure authentication
- command line login azure
- azure service principal login
- azure identity login
- azure vm login
- azure cli authentication
- azure subscription login
- azure ad login
features:
- Log in to Azure interactively via the command line.
- Authenticate using a service principal with a client secret.
- Authenticate with a service principal and a client certificate.
- Log in using a virtual machine's system assigned identity.
- Log in with a user-assigned managed identity.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az login

> Log in to Azure.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/reference-index#az-login>.

- Log in interactively:

`az login`

- Log in with a service principal using a client secret:

`az login --service-principal {{[-u|--username]}} {{http://azure-cli-service-principal}} {{[-p|--password]}} {{secret}} --tenant {{someone.onmicrosoft.com}}`

- Log in with a service principal using a client certificate:

`az login --service-principal {{[-u|--username]}} {{http://azure-cli-service-principal}} {{[-p|--password]}} {{path/to/cert.pem}} {{[-t|--tenant]}} {{someone.onmicrosoft.com}}`

- Log in using a VM's system assigned identity:

`az login {{[-i|--identity]}}`

- Log in using a VM's user assigned identity:

`az login {{[-i|--identity]}} {{[-u|--username]}} /subscriptions/{{subscription_id}}/resourcegroups/{{my_rg}}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{{my_id}}`
