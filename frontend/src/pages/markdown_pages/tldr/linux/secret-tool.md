---
title: "Secret Tool - Manage Passwords Securely | Online Free DevTools by Hexmos"
name: secret-tool
path: /freedevtools/tldr/linux/secret-tool
canonical: "https://hexmos.com/freedevtools/tldr/linux/secret-tool/"
description: "Manage passwords securely with Secret Tool. Store, retrieve, and delete secrets using command line interface. Free online tool, no registration required."
category: linux
keywords:
  - password manager
  - secret storage
  - linux password
  - command line password
  - libsecret
  - gnome-keyring
  - freedesktop secret service
  - password retrieval
  - secret lookup
  - cli password manager
features:
  - Store secrets with optional labels
  - Retrieve secrets by key
  - Search for secrets by key
  - Delete stored secrets
  - Communicate with Freedesktop secret service implementations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# secret-tool

> Store and retrieve passwords, part of the `libsecret` package.
> Communicates with Freedesktop secret service implementations such as `gnome-keyring`.
> More information: <https://gnome.pages.gitlab.gnome.org/libsecret/>.

- Store a secret with an optional label:

`secret-tool store --label={{label}} {{key}} {{value}}`

- Retrieve a secret:

`secret-tool lookup key {{key}}`

- Get more information about a secret:

`secret-tool search key {{key}}`

- Delete a stored secret:

`secret-tool clear key {{key}}`
