---
title: "Semanage Permissive - Control SELinux Domains | Online Free DevTools by Hexmos"
name: semanage-permissive
path: "/freedevtools/tldr/linux/semanage-permissive/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/semanage-permissive/"
description: "Control SELinux permissive domains with Semanage Permissive. Manage security contexts and configure SELinux policy on Linux. Free online tool, no registration required."
category: linux
keywords:
- semanage permissive
- selinux permissive domain
- linux selinux policy
- semanage selinux
- selinux context management
- linux security
- selinux configuration
- permissive domain control
- semanage policy
- linux selinux semanage
features:
- List permissive SELinux domains
- Add domains to permissive mode
- Delete domains from permissive mode
- Manage SELinux security contexts
- Configure SELinux policy persistently
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# semanage permissive

> Manage persistent SELinux permissive domains.
> Note that this effectively makes the process unconfined. For long-term use, it is recommended to configure SELiunx properly.
> See also: `semanage`, `getenforce`, `setenforce`.
> More information: <https://manned.org/semanage-permissive>.

- List all process types (a.k.a domains) that are in permissive mode:

`sudo semanage permissive {{[-l|--list]}}`

- Set permissive mode for a domain:

`sudo semanage permissive {{[-a|--add]}} {{httpd_t}}`

- Unset permissive mode for a domain:

`sudo semanage permissive {{[-d|--delete]}} {{httpd_t}}`
