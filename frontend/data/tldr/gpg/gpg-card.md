---
title: "GPG Card Admin - Manage Smart Cards | Online Free DevTools by Hexmos"
name: gpg-card
path: "/freedevtools/tldr/gpg/gpg-card/"
canonical: "https://hexmos.com/freedevtools/tldr/gpg/gpg-card/"
description: "Administer OpenPGP smart cards with GPG Card. Manage keys, URLs, and PINs directly from the command line. Free online tool, no registration required."
category: common
keywords:
- OpenPGP Card Management
- Smart Card Administration
- GPG Card Control
- PIV Card Utility
- Command Line Key Manager
- Card Edit Tool
- GPG Card Fetch
- GPG Card Passwd
- Linux Smart Card
- MacOS GPG Card
features:
- Manage OpenPGP and PIV smart cards.
- Fetch public keys from URLs stored on cards.
- Change or unblock PINs for smart cards.
- Toggle the forcesig flag for signing operations.
- Factory reset smart cards to a clean state.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gpg-card

> Administrate OpenPGP and PIV smart cards.
> Similar to `gpg --card-edit`.
> More information: <https://manned.org/gpg-card>.

- Start in interactive mode:

`gpg-card`

- Invoke one or more commands non-interactively:

`gpg-card {{command1}} -- {{command2}} -- {{command3}}`

- Show information about a smart card:

`gpg-card list`

- Retrieve the public key using the URL stored on an OpenPGP card:

`gpg-card fetch`

- Set the URL used by the `fetch` command:

`gpg-card url`

- Change or unblock PINs (uses the default action for the card in non-interactive mode):

`gpg-card passwd`

- Toggle the forcesig flag of an OpenPGP card (i.e. require entering the user PIN for signing):

`gpg-card forcesig`

- Factory reset a smart card (i.e. delete all data and reset PINs):

`gpg-card factory-reset`
