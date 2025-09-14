---
title: "AppArmor Enforce - Enable Profiles | Free DevTools"
name: aa-enforce
path: /freedevtools/tldr/linux/aa-enforce
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-enforce/"
description: "Enable AppArmor profiles with aa-enforce. Set Linux security profiles to enforce mode for enhanced system security. Free online tool, no registration required."
category: linux
keywords:
  - AppArmor profile enforce
  - Linux security profile enable
  - aa-enforce command
  - AppArmor configuration
  - Security policy enforcement
  - Linux security hardening
  - AppArmor profile management
  - System security profiles
  - AppArmor enforce mode
  - Linux command-line security
features:
  - Enable AppArmor profiles in enforce mode
  - Activate multiple profiles simultaneously
  - Secure Linux systems with custom AppArmor profiles
  - Configure application security settings
  - Transition profiles to enforce mode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aa-enforce

> Set an AppArmor profile to enforce mode.
> See also: `aa-complain`, `aa-disable`, `aa-status`.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-enforce.8>.

- Enable profile:

`sudo aa-enforce {{[-d|--dir]}} {{path/to/profile}}`

- Enable profiles:

`sudo aa-enforce {{path/to/profile1 path/to/profile2 ...}}`
