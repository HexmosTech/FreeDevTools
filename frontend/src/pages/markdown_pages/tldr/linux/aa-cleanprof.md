---
title: "Clean AppArmor Profiles - Optimize Security Rules | Free DevTools"
name: aa-cleanprof
path: /freedevtools/tldr/linux/aa-cleanprof
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-cleanprof/"
description: "Optimize AppArmor security with aa-cleanprof by removing unused rules.  Improve system performance and security. Free online tool, no registration required."
category: linux
keywords:
  - apparmor profile cleaner
  - linux security optimization
  - aa-cleanprof command
  - apparmor rule management
  - system security enhancement
  - linux system administration
  - security profile cleanup
  - apparmor profile maintenance
  - unused rule removal
  - linux command line tool
features:
  - Removes unused rules from AppArmor profiles.
  - Cleans single or multiple profiles simultaneously.
  - Allows specifying the directory containing profiles.
  - Offers silent execution without prompts.
  - Prevents profile reload after cleaning for improved efficiency.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aa-cleanprof

> Clean AppArmor security profiles by removing unused rules.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-cleanprof.8>.

- Clean a profile to remove unused rules:

`sudo aa-cleanprof {{profile_name}}`

- Clean multiple profiles at once:

`sudo aa-cleanprof {{profile1 profile2 ...}}`

- Specify the directory containing profiles:

`sudo aa-cleanprof {{[-d|--dir]}} /{{path/to/profiles}} {{profile_name}}`

- Run silently without prompts:

`sudo aa-cleanprof {{[-s|--silent]}} {{profile_name}}`

- Prevent profile reload after cleaning:

`sudo aa-cleanprof --no-reload {{profile_name}}`

- Display help:

`aa-cleanprof {{[-h|--help]}}`
