---
title: "Manage SELinux Contexts - Control File Security | Online Free DevTools by Hexmos"
name: semanage-fcontext
path: "/freedevtools/tldr/linux/semanage-fcontext/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/semanage-fcontext/"
description: "Control SELinux file contexts with semanage-fcontext. Manage persistent security rules, define file labels using PCRE regex, and recursively relabel directories. Free online tool, no registration required."
category: linux
keywords:
  - SELinux context management
  - file labeling rules
  - security context configuration
  - semanage fcontext command
  - PCRE regex labeling
  - linux security
  - file security policy
  - restorecon command
  - security administration
  - selinux policy rules
features:
  - List all SELinux file context rules
  - Add user-defined file labeling rules
  - Delete user-defined file labeling rules
  - Relabel directories recursively
  - Manage persistent SELinux security contexts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# semanage fcontext

> Manage persistent SELinux security context rules on files/directories.
> See also: `semanage`, `matchpathcon`, `secon`, `chcon`, `restorecon`.
> More information: <https://manned.org/semanage-fcontext>.

- List all file labelling rules:

`sudo semanage fcontext {{[-l|--list]}}`

- List all user-defined file labelling rules without headings:

`sudo semanage fcontext {{[-l|--list]}} {{[-C|--locallist]}} {{[-n|--noheading]}}`

- Add a user-defined rule that labels any path which matches a PCRE `regex`:

`sudo semanage fcontext {{[-a|--add]}} {{[-t|--type]}} {{samba_share_t}} {{'/mnt/share(/.*)?'}}`

- Delete a user-defined rule using its PCRE `regex`:

`sudo semanage fcontext {{[-d|--delete]}} {{'/mnt/share(/.*)?'}}`

- Relabel a directory recursively by applying the new rules:

`restorecon -R -v {{path/to/directory}}`
