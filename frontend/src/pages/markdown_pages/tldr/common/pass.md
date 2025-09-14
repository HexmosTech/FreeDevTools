---
title: "Password Manager - Store Passwords Securely | Free DevTools"
name: pass
path: /freedevtools/tldr/common/pass
canonical: "https://hexmos.com/freedevtools/tldr/common/pass/"
description: "Secure passwords with Pass Password Manager. Encrypt sensitive data, manage git repositories, and generate secure passwords. Free online tool, no registration required."
category: common
keywords:
- password manager
- gpg encryption
- git password storage
- command line password manager
- password generator
- linux password manager
- macos password manager
- secure password storage
- password store
- encrypted data storage
features:
- Initialize a password store with GPG IDs
- Save new passwords and multiline data
- Copy passwords to the clipboard securely
- Generate random passwords of a specified length
- Manage password storage using Git commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pass

> Store and read passwords or other sensitive data.
> All data is GPG-encrypted, and managed with a Git repository.
> More information: <https://www.passwordstore.org>.

- Initialize (or re-encrypt) the storage using one or more GPG IDs:

`pass init {{gpg_id_1}} {{gpg_id_2}}`

- Save a new password and additional information (press `<Ctrl d>` on a new line to complete):

`pass insert {{[-m|--multiline]}} {{path/to/data}}`

- Edit an entry:

`pass edit {{path/to/data}}`

- Copy a password (first line of the data file) to the clipboard:

`pass {{[-c|--clip]}} {{path/to/data}}`

- List the whole store tree:

`pass`

- Generate a new random password with a given length, and copy it to the clipboard:

`pass generate {{[-c|--clip]}} {{path/to/data}} {{num}}`

- Initialize a new Git repository (any changes done by pass will be committed automatically):

`pass git init`

- Run a Git command on behalf of the password storage:

`pass git {{command}}`
