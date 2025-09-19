---
title: "Chage - Control Password Expiry | Online Free DevTools by Hexmos"
name: chage
path: /freedevtools/tldr/linux/chage
canonical: "https://hexmos.com/freedevtools/tldr/linux/chage/"
description: "Control user password expiry with Chage. Manage account expiration, force password changes and re-enable accounts on Linux. Free online tool, no registration required."
category: linux
keywords:
- Linux password management
- Change password expiry
- User account control
- Linux account management
- Chage command examples
- Linux chage options
- Password expiration date
- Force password change linux
- Linux user account expiry
- Disable password expiry
features:
- Set maximum password age
- Disable password expiry for users
- Set a specific account expiration date
- Force users to change password on next login
- Re-enable expired user accounts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chage

> Change user account and password expiry information.
> More information: <https://manned.org/chage>.

- List password information for the user:

`chage {{[-l|--list]}} {{username}}`

- Enable password expiration in 10 days:

`sudo chage {{[-M|--maxdays]}} {{10}} {{username}}`

- Disable password expiration:

`sudo chage {{[-M|--maxdays]}} {{-1}} {{username}}`

- Set account expiration date:

`sudo chage {{[-E|--expiredate]}} {{YYYY-MM-DD}} {{username}}`

- Force user to change password on next log in:

`sudo chage {{[-d|--lastday]}} {{0}} {{username}}`

- Re-enable an account:

`sudo chage {{[-E|--expiredate]}} -1 {{username}}`
