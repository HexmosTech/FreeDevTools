---
title: "chntpw - Reset Windows Passwords | Online Free DevTools by Hexmos"
name: chntpw
path: /freedevtools/tldr/linux/chntpw
canonical: "https://hexmos.com/freedevtools/tldr/linux/chntpw/"
description: "Reset Windows passwords easily with chntpw.  Manage user accounts and elevate privileges using command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - windows password reset
  - sam file editor
  - chntpw command
  - windows security
  - linux password recovery
  - user account management
  - windows registry editor
  - administrator privileges
  - password cracking tool
  - kali linux chntpw
features:
  - List all users within the Windows SAM file.
  - Interactively edit user accounts in the SAM file.
  - Reset or change user passwords.
  - Promote users to administrators.
  - Modify the Windows Security Account Manager (SAM).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chntpw

> A utility that can edit windows registry, reset user password, promote users to administrator by modifying the Windows SAM.
> Boot target machine with live cd like Kali Linux and run with elevated privileges.
> More information: <https://pogostick.net/~pnh/ntpasswd/MANUAL.txt>.

- List all users in the SAM file:

`chntpw -l {{path/to/sam_file}}`

- Edit user interactively:

`chntpw -u {{username}} {{path/to/sam_file}}`

- Use chntpw interactively:

`chntpw -i {{path/to/sam_file}}`
