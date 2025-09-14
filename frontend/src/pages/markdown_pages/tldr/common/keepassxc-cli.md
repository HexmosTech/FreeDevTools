---
title: "KeePassXC Password Manager - Control Secrets | Free DevTools"
name: keepassxc-cli
path: /freedevtools/tldr/common/keepassxc-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/keepassxc-cli/"
description: "Control secrets with KeePassXC Password Manager. Securely store passwords, generate strong keys, and manage credentials with this CLI tool. Free online tool, no registration required."
category: common
keywords:
- KeePassXC password manager
- password management CLI
- secure password storage
- password generator command line
- KeePassXC command-line interface
- password database manager
- secret management tool
- credential management CLI
- linux password manager
- macos password manager
features:
- Search for entries in a KeePassXC database
- List contents of a directory within a database
- Add new entries with auto-generated passwords
- Copy passwords and TOTP codes to the clipboard
- Generate secure passphrases and passwords
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# keepassxc-cli

> Interface for KeePassXC.
> More information: <https://manned.org/keepassxc-cli>.

- Search entries:

`keepassxc-cli search {{path/to/database_file}} {{name}}`

- List the contents of a folder:

`keepassxc-cli ls {{path/to/database_file}} {{path/to/directory}}`

- Add an entry with an auto-generated password:

`keepassxc-cli add {{[-g|--generate]}} {{path/to/database_file}} {{entry_name}}`

- Delete an entry:

`keepassxc-cli rm {{path/to/database_file}} {{entry_name}}`

- Copy an entry's password to the clipboard:

`keepassxc-cli clip {{path/to/database_file}} {{entry_name}}`

- Copy a TOTP code to the clipboard:

`keepassxc-cli clip {{[-t|--totp]}} {{path/to/database_file}} {{entry_name}}`

- Generate a passphrase with 7 words:

`keepassxc-cli diceware {{[-W|--words]}} 7`

- Generate a password with 16 printable ASCII characters:

`keepassxc-cli generate {{[-lUns|--lower --upper --numeric --special]}} {{[-L|--length]}} 16`
