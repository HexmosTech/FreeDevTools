---
title: "Login - Initiate User Session | Online Free DevTools by Hexmos"
name: login
path: "/freedevtools/tldr/linux/login/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/login/"
description: "Initiate user sessions with Login. Securely authenticate and manage user access on remote systems. Free online tool, no registration required."
category: linux
keywords:
  - user login
  - session initiation
  - system authentication
  - remote access
  - login command
  - user management
  - shell login
  - terminal login
  - preauthenticated login
  - environment preservation
features:
  - Log in as a specified user.
  - Authenticate users for system access.
  - Preserve user environment variables during login.
  - Log in to a remote host.
  - Support pre-authenticated login scenarios.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# login

> Initiates a session for a user.
> More information: <https://manned.org/login>.

- Log in as a user:

`login {{user}}`

- Log in as user without authentication if user is preauthenticated:

`login -f {{user}}`

- Log in as user and preserve environment:

`login -p {{user}}`

- Log in as a user on a remote host:

`login -h {{host}} {{user}}`
