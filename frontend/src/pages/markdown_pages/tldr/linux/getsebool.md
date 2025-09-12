---
title: "GetSEBool - Control SELinux Booleans | Free DevTools"
name: getsebool
path: /freedevtools/tldr/linux/getsebool
canonical: "https://hexmos.com/freedevtools/tldr/linux/getsebool/"
description: "Control SELinux booleans with GetSEBool. Manage SELinux security policies and enforce system security. Free online tool, no registration required."
category: linux
keywords:
- selinux boolean control
- linux selinux configuration
- getsebool command
- selinux policy management
- boolean value retrieval
- security policy enforcement
- linux security context
- selinux troubleshooting
- selinux command line
- getsebool linux
features:
- Retrieve the current value of a specific SELinux boolean.
- List all SELinux booleans and their current settings.
- Display SELinux boolean values with descriptions.
- Manage SELinux security policies from the command line.
- Automate SELinux configuration tasks.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# getsebool

> Get SELinux boolean value.
> See also: `semanage-boolean`, `setsebool`.
> More information: <https://manned.org/getsebool>.

- Show the current setting of a boolean:

`getsebool {{httpd_can_connect_ftp}}`

- Show the current setting of [a]ll booleans:

`getsebool -a`

- Show the current setting of all booleans with explanations:

`sudo semanage boolean {{[-l|--list]}}`
