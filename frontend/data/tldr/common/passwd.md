---
title: "Change Password - Update User Passwords | Online Free DevTools by Hexmos"
name: passwd
path: "/freedevtools/tldr/common/passwd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/passwd/"
description: "Change password on Linux or macOS systems with passwd command. Secure user accounts, manage password policies, and update credentials easily. Free online tool, no registration required."
category: common
keywords:
- change password command
- linux password update
- macos password manager
- user password change
- command line password tool
- set password script
- passwordless account
- system password control
- passwd command examples
- password status check
features:
- Change password for the current user interactively.
- Update password for a specified user account.
- Display current password status information.
- Delete password to create a passwordless account.
- Set password programmatically for automated scripts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# passwd

> Change a user's password.
> More information: <https://manned.org/passwd>.

- Change the password of the current user interactively:

`passwd`

- Change the password of a specific user:

`passwd {{username}}`

- Get the current status of the user:

`passwd {{[-S|--status]}}`

- Make the password of the account blank (it will set the named account passwordless):

`passwd {{[-d|--delete]}}`

- Set password programmatically (ideal for install scripts):

`yes {{password}} | passwd`
