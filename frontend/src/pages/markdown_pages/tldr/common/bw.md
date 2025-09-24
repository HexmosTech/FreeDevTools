---
title: "Bitwarden Vault - Manage Passwords Securely | Online Free DevTools by Hexmos"
name: bw
path: /freedevtools/tldr/common/bw
canonical: "https://hexmos.com/freedevtools/tldr/common/bw/"
description: "Manage passwords securely with Bitwarden Vault. Access, store, and generate strong passwords for enhanced online security. Free online tool, no registration required."
category: common
keywords:
- password manager
- bitwarden vault
- password storage
- generate password
- command line password manager
- linux password manager
- macos password manager
- windows password manager
- secure password management
- password access
features:
- Log in and out of a Bitwarden account
- Search and retrieve items from your Bitwarden vault
- Display specific vault items by name
- Create folders within your Bitwarden vault
- Manage passwords from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bw

> Access and manage a Bitwarden vault.
> More information: <https://help.bitwarden.com/article/cli/>.

- Log in to a Bitwarden user account:

`bw login`

- Log out of a Bitwarden user account:

`bw logout`

- Search and display items from Bitwarden vault:

`bw list items --search {{github}}`

- Display a particular item from Bitwarden vault:

`bw get item {{github}}`

- Create a folder in Bitwarden vault:

`{{echo -n '{"name":"My Folder1"}' | base64}} | bw create folder`
