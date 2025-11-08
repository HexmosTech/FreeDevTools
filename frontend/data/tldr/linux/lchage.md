---
title: "Manage Linux Passwords - Control User Policies with lchage | Online Free DevTools by Hexmos"
name: lchage
path: "/freedevtools/tldr/linux/lchage/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lchage/"
description: "Control Linux user password policies with lchage.  Manage password expiration, enforce password changes, and set warning periods. Free online tool, no registration required."
category: linux
keywords:
  - linux password management
  - lchage command
  - linux user policy
  - password expiration control
  - password change enforcement
  - linux security command
  - user account management
  - linux system administration
  - password policy settings
  - linux command line tool
features:
  - Disable password expiration for users.
  - Display current password policy settings for users.
  - Enforce password changes after a specified number of days.
  - Configure password expiry warning periods.
  - Manage multiple user accounts' password policies simultaneously.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lchage

> Display or change user password policy.
> More information: <https://manned.org/lchage>.

- Disable password expiration for the user:

`sudo lchage --date -1 {{username}}`

- Display the password policy for the user:

`sudo lchage --list {{username}}`

- Require password change for the user a certain number of days after the last password change:

`sudo lchage --maxdays {{number_of_days}} {{username}}`

- Start warning the user a certain number of days before the password expires:

`sudo lchage --warndays {{number_of_days}} {{username}}`
