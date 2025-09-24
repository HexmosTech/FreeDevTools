---
title: "AppArmor Audit - Control Security Profiles | Online Free DevTools by Hexmos"
name: aa-audit
path: /freedevtools/tldr/linux/aa-audit
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-audit/"
description: "Control AppArmor security profiles with aa-audit. Set profiles to audit mode, remove audit status, and manage configurations effortlessly on Linux systems. Free online tool, no registration required."
category: linux
keywords:
  - AppArmor audit mode
  - Linux security profiles
  - aa-audit command
  - AppArmor profile management
  - Security audit tool
  - Linux system administration
  - AppArmor configuration
  - Audit profile settings
  - Force audit application
  - Remove AppArmor audit
features:
  - Set AppArmor profiles to audit mode
  - Remove audit mode from AppArmor profiles
  - Force audit mode application
  - Manage AppArmor profiles from a specified directory
  - Disable reloading during audit mode setup
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aa-audit

> Set AppArmor security profiles to audit mode.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-audit.8>.

- Set a profile to audit mode:

`sudo aa-audit {{profile_name}}`

- Set multiple profiles to audit mode:

`sudo aa-audit {{profile1 profile2 ...}}`

- Set a profile to audit mode from a specific directory:

`sudo aa-audit {{[-d|--dir]}} /{{path/to/profiles}} {{profile_name}}`

- Force audit mode even if already applied:

`sudo aa-audit --force {{profile_name}}`

- Set a profile to audit mode without reloading it:

`sudo aa-audit --no-reload {{profile_name}}`

- Remove audit mode for a profile:

`sudo aa-audit {{[-r|--remove]}} {{profile_name}}`

- Display help:

`aa-audit {{[-h|--help]}}`
