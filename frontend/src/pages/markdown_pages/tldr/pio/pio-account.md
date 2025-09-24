---
title: "PlatformIO Account - Manage Accounts | Online Free DevTools by Hexmos"
name: pio-account
path: /freedevtools/tldr/pio/pio-account
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-account/"
description: "Manage PlatformIO accounts with pio-account. Securely register, login, update profiles, and reset passwords. Free online tool, no registration required."
category: common
keywords:
- PlatformIO account manager
- PlatformIO account registration
- PlatformIO profile update
- PlatformIO password reset
- PlatformIO account login
- PlatformIO account logout
- PlatformIO command-line interface
- PlatformIO account deletion
- PlatformIO account information
- PlatformIO profile management
features:
- Register new PlatformIO accounts with username and email.
- Permanently delete PlatformIO accounts and associated data.
- Authenticate PlatformIO account logins with username and password.
- Update PlatformIO account profiles, including email and names.
- Display detailed information about PlatformIO accounts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pio account

> Manage your PlatformIO account.
> More information: <https://docs.platformio.org/en/latest/core/userguide/account/>.

- Register a new PlatformIO account:

`pio account register {{[-u|--username]}} {{username}} {{[-e|--email]}} {{email}} {{[-p|--password]}} {{password}} --firstname {{firstname}} --lastname {{lastname}}`

- Permanently delete your PlatformIO account and related data:

`pio account destroy`

- Log in to your PlatformIO account:

`pio account login {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}}`

- Log out of your PlatformIO account:

`pio account logout`

- Update your PlatformIO profile:

`pio account update {{[-u|--username]}} {{username}} {{[-e|--email]}} {{email}} --firstname {{firstname}} --lastname {{lastname}} --current-password {{password}}`

- Show detailed information about your PlatformIO account:

`pio account show`

- Reset your password using your username or email:

`pio account forgot {{[-u|--username]}} {{username_or_email}}`
