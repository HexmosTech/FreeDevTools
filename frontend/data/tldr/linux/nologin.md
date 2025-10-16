---
title: "Control nologin - Prevent User Logins | Online Free DevTools by Hexmos"
name: nologin
path: "/freedevtools/tldr/linux/nologin/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/nologin/"
description: "Control user logins with nologin. Secure your system by preventing user access and customizing login messages. Free online tool, no registration required."
category: linux
keywords:
  - nologin shell
  - user login control
  - disable user login
  - restricted shell
  - linux nologin
  - unix nologin
  - user account security
  - prevent login
  - nologin message
  - system security
features:
  - Prevent users from logging in to the system
  - Customize the login denied message
  - Secure user accounts
  - Integrate with chsh for shell management
  - Restrict access to system resources
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nologin

> Alternative shell that prevents a user from logging in.
> More information: <https://manned.org/nologin.5>.

- Set a user's login shell to `nologin` to prevent the user from logging in:

`chsh {{[-s|--shell]}} {{user}} nologin`

- Customize message for users with the login shell of `nologin`:

`echo "{{declined_login_message}}" > /etc/nologin.txt`
