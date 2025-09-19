---
title: "Password Manager - Control Passwords with rbw | Online Free DevTools by Hexmos"
name: rbw
path: /freedevtools/tldr/common/rbw
canonical: "https://hexmos.com/freedevtools/tldr/common/rbw/"
description: "Control passwords efficiently with rbw Password Manager. Securely manage and generate passwords using the command line. Free online tool, no registration required."
category: common
keywords:
- command line password manager
- bitwarden compatible manager
- rbw password management
- linux password manager
- macos password manager
- password generator cli
- password retrieval tool
- password vault management
- command line vault access
- password security tool
features:
- Securely store and manage passwords.
- Generate strong and unique passwords.
- Retrieve passwords and usernames from the vault.
- Copy passwords to the clipboard.
- Lock and unlock the password vault.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rbw

> Unofficial Bitwarden-compatible password manager.
> More information: <https://github.com/doy/rbw#configuration>.

- Log in to the vault:

`rbw login`

- Unlock the vault:

`rbw unlock`

- List all items in the vault:

`rbw list`

- Get a password for an entry:

`rbw get "{{entry_name}}"`

- Get a username for an entry:

`rbw get {{[-f|--field]}} username "{{entry_name}}"`

- Copy a password to the clipboard:

`rbw get {{[-c|--clipboard]}} "{{entry_name}}"`

- Generate a new password with the specified number of characters:

`rbw generate {{password_length}}`

- Lock the vault:

`rbw lock`
