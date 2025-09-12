---
title: "Remove AppArmor Profiles - Manage Linux Security | Free DevTools"
name: aa-remove-unknown
path: /freedevtools/tldr/linux/aa-remove-unknown
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-remove-unknown/"
description: "Remove AppArmor profiles safely with aa-remove-unknown. Secure your Linux system by cleaning up unused profiles. Free online tool, no registration required."
category: linux
keywords:
- AppArmor profile removal
- Linux security management
- remove unknown profiles linux
- aa-remove-unknown command
- AppArmor profile cleanup
- Linux profile management
- security policy enforcement
- Linux system hardening
- orphaned AppArmor profiles
- Linux AppArmor tool
features:
- Identify AppArmor profiles no longer in configuration
- Perform dry run of profile removal
- Remove orphaned AppArmor profiles
- Secure Linux systems by cleaning up profiles
- Display command help and options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aa-remove-unknown

> Remove AppArmor profiles that are no longer present in the configuration directory.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-remove-unknown.8>.

- Perform a dry run to see which profiles would be removed:

`sudo aa-remove-unknown -n`

- Actually remove the profiles:

`sudo aa-remove-unknown`

- Display help:

`aa-remove-unknown {{[-h|--help]}}`
