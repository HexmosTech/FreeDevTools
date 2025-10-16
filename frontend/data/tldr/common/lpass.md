---
title: "LastPass - Manage Passwords via Command Line | Online Free DevTools by Hexmos"
name: lpass
path: "/freedevtools/tldr/common/lpass/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lpass/"
description: "Manage passwords securely with LastPass command-line interface (lpass). Generate strong passwords, store credentials, and automate password management. Free online tool, no registration required."
category: common
keywords:
- password manager cli
- lastpass command line
- password generator cli
- command line password management
- lpass login
- lpass show password
- lpass generate password
- linux password manager
- macos password manager
- password vault cli
features:
- Log in to LastPass account via command line.
- List all stored website credentials in LastPass.
- Generate secure passwords for new accounts.
- Show specific password entries from LastPass.
- Check current login status to LastPass account.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lpass

> Interface for the LastPass password manager.
> More information: <https://lastpass.github.io/lastpass-cli/lpass.1.html>.

- Log in to your LastPass account, by entering your master password when prompted:

`lpass login {{username}}`

- Show login status:

`lpass status`

- List all sites grouped by category:

`lpass ls`

- Generate a new password for gmail.com with the identifier `myinbox` and add to LastPass:

`lpass generate --username {{username}} --url {{gmail.com}} {{myinbox}} {{password_length}}`

- Show password for a specified entry:

`lpass show {{myinbox}} --password`
