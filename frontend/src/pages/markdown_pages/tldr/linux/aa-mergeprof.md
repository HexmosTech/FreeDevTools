---
title: "Merge AppArmor Profiles - Manage Security with aa-mergeprof | Online Free DevTools by Hexmos"
name: aa-mergeprof
path: /freedevtools/tldr/linux/aa-mergeprof
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-mergeprof/"
description: "Merge AppArmor security profiles efficiently with aa-mergeprof.  Manage and combine profile files for enhanced security. Free online tool, no registration required."
category: linux
keywords:
  - AppArmor profile merger
  - Linux security profile management
  - aa-mergeprof command
  - AppArmor profile consolidation
  - security profile merging tool
  - Linux system security
  - AppArmor configuration
  - command-line security tool
  - merge AppArmor profiles Linux
  - manage AppArmor profiles
features:
  - Merge multiple AppArmor profile files into a single directory.
  - Merge profiles into the default AppArmor profile directory.
  - Specify a custom directory for merged AppArmor profiles.
  - Provides a command-line interface for easy profile management.
  - Simplifies the process of combining and updating AppArmor profiles.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aa-mergeprof

> Merge AppArmor security profile files into the profile directory.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-mergeprof.8>.

- Merge one or more profile files into the default profile directory:

`sudo aa-mergeprof {{file1 file2 ...}}`

- Merge profile files into a specific directory:

`sudo aa-mergeprof {{[-d|--dir]}} /{{path/to/profiles}} {{file1 file2 ...}}`

- Display help:

`aa-mergeprof {{[-h|--help]}}`
