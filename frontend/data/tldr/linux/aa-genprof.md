---
title: "Generate AppArmor Profiles - Monitor Linux Programs | Online Free DevTools by Hexmos"
name: aa-genprof
path: "/freedevtools/tldr/linux/aa-genprof/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-genprof/"
description: "Generate AppArmor security profiles with aa-genprof by monitoring program behavior. Enhance Linux system security easily. Free online tool, no registration required."
category: linux
keywords:
- AppArmor profile generation
- Linux security profiling
- aa-genprof command
- Program behavior monitoring
- System security enhancement
- Linux security configuration
- Application confinement
- AppArmor security policy
- Process auditing Linux
- Linux profile creation
features:
- Generate AppArmor profiles for programs.
- Monitor program behavior to create profiles.
- Specify custom directories for storing profiles.
- Define custom log files for profiling data.
- Assist in configuring AppArmor security policies.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aa-genprof

> Generate AppArmor security profiles by monitoring program behavior.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-genprof.8>.

- Start generating a profile for a program:

`sudo aa-genprof {{program_path}}`

- Specify a custom directory for profiles:

`sudo aa-genprof {{[-d|--dir]}} /{{path/to/profiles}} {{program_path}}`

- Specify a custom logfile for profiling:

`sudo aa-genprof {{[-f|--file]}} /{{path/to/logfile}} {{program_path}}`

- Display help:

`aa-genprof {{[-h|--help]}}`
