---
title: "KWallet Query - Manage KDE Wallet Entries | Free DevTools"
name: kwallet-query
path: /freedevtools/tldr/linux/kwallet-query
canonical: "https://hexmos.com/freedevtools/tldr/linux/kwallet-query/"
description: "Manage KDE wallet entries with KWallet Query. List entries, folders, and interact with your KDE wallet data efficiently. Free online tool, no registration required."
category: linux
keywords:
  - kwallet query command
  - kde wallet management
  - linux password management
  - kwallet data access
  - query kde wallet entries
  - list kwallet folders
  - kwallet command line
  - kde wallet command
  - linux kwallet tool
  - manage kwallet passwords
features:
  - List all entries in the KDE wallet's Passwords folder.
  - List entries within a specified folder in the KDE wallet.
  - Display all available folders within the KDE wallet.
  - Provide help information on using the kwallet-query command.
  - Read and write to the KDE Wallet using command-line interface.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kwallet-query

> Read and write to a KDE Wallet.
> More information: <https://manned.org/kwallet-query>.

- List all entries in the `Passwords` folder of `kdewallet`:

`kwallet-query {{kdewallet}} {{[-l|--list-entries]}}`

- List all entries in a specific folder:

`kwallet-query {{kdewallet}} {{[-l|--list-entries]}} {{[-f|--folder]}} {{folder_name}}`

- List all available folders:

`kwallet-query {{kdewallet}} {{[-l|--list-entries]}} {{[-f|--folder]}} ""`

- Display help:

`kwallet-query {{[-h|--help]}}`
