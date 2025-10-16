---
title: "AppArmor Parser - Manage Security Profiles | Online Free DevTools by Hexmos"
name: apparmor_parser
path: "/freedevtools/tldr/linux/apparmor_parser/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/apparmor_parser/"
description: "Manage security profiles with AppArmor Parser. Control profile loading, replacement, and removal for enhanced system security on Linux. Free online tool, no registration required."
category: linux
keywords:
- AppArmor security profiles
- Linux security management
- AppArmor profile parser
- Security profile compiler
- AppArmor profile loader
- Linux app security
- AppArmor complain mode
- Security policy enforcement
- AppArmor profile preprocessing
- Kernel security modules
features:
- Load AppArmor profiles into the kernel
- Replace existing AppArmor security profiles
- Remove AppArmor profiles from the kernel
- Preprocess AppArmor profiles for compilation
- Manage AppArmor profiles in complain mode
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apparmor_parser

> Load, compile, and manage AppArmor security profiles.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_apparmor_parser.8>.

- Load a profile into the kernel:

`sudo apparmor_parser {{[-a|--add]}} {{profile_file}}`

- Replace an existing profile:

`sudo apparmor_parser {{[-r|--replace]}} {{profile_file}}`

- Remove a profile from the kernel:

`sudo apparmor_parser {{[-R|--remove]}} {{profile_name}}`

- Load a profile in complain mode (logs violations but doesn't block):

`sudo apparmor_parser {{[-C|--complain]}} {{[-r|--replace]}} {{path/to/profile}}`

- Preprocess a profile (resolve includes) and write binary cache to file:

`apparmor_parser {{[-p|--preprocess]}} {{[-o|--ofile]}} {{path/to/output.cache}} {{[-Q|--skip-kernel-load]}} {{path/to/profile}}`

- Preprocess and print binary profile to stdout without loading:

`apparmor_parser {{[-p|--preprocess]}} {{[-S|--stdout]}} {{[-Q|--skip-kernel-load]}} {{path/to/profile}}`

- Replace a profile while skipping cache reads:

`sudo apparmor_parser {{[-r|--replace]}} {{[-T|--skip-read-cache]}} {{path/to/profile}}`

- Replace a profile, rebuild cache, and write it to a custom directory:

`sudo apparmor_parser {{[-r|--replace]}} {{[-W|--write-cache]}} {{[-L|--cache-loc]}} /{{path/to/cache}} {{path/to/profile}}`
