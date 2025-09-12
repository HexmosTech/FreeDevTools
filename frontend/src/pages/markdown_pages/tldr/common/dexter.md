---
title: "Create Kubectl User - Authenticate with Dexter OIDC | Free DevTools"
name: dexter
path: /freedevtools/tldr/common/dexter
canonical: "https://hexmos.com/freedevtools/tldr/common/dexter/"
description: "Create Kubectl user with Dexter, authenticate with OpenID Connect. Manage your Kubernetes cluster easily with OIDC integration. Free online tool, no registration required."
category: common
keywords:
- kubectl user creation
- OIDC authentication
- kubernetes authentication
- dexter oidc configuration
- kubectl user management
- google oidc authentication
- kubectl authentication flow
- command line authentication
- kubernetes cluster security
- oidc client configuration
features:
- Authenticate kubectl users using OpenID Connect
- Support Google OIDC for kubectl authentication
- Override default kube configuration file location
- Simplify kubectl authentication process
- Enable secure access to Kubernetes clusters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dexter

> Authenticate the `kubectl` users with OpenId Connect.
> More information: <https://github.com/gini/dexter>.

- Create and authenticate a user with Google OIDC:

`dexter auth {{[-i|--client-id]}} {{client_id}} {{[-s|--client-secret]}} {{client_secret}}`

- Override the default kube configuration file location:

`dexter auth {{[-i|--client-id]}} {{client_id}} {{[-s|--client-secret]}} {{client_secret}} {{[-k|--kube-config]}} {{sample/config}}`
