---
title: "GPG Configuration - Control GPG Settings | Online Free DevTools by Hexmos"
name: gpgconf
path: /freedevtools/tldr/gpg/gpgconf
canonical: "https://hexmos.com/freedevtools/tldr/gpg/gpgconf/"
description: "Control GPG settings effortlessly with GPG Configuration. List components, check programs, and manage configurations with ease. Free online tool, no registration required."
category: common
keywords:
- GPG configuration management
- GNU Privacy Guard settings
- GPG component listing
- GPG program check
- GPG configuration reload
- GPG directory listing
- gpgconf command line
- gnupg configuration tool
- security settings configuration
- OpenPGP configuration
features:
- List available GPG components
- Display GPG configuration directories
- Show options for a specific component
- Check for runnable GPG programs
- Reload a specific GPG component
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gpgconf

> Modify .gnupg home directories.
> More information: <https://www.gnupg.org/documentation/manuals/gnupg/gpgconf.html>.

- List all components:

`gpgconf --list-components`

- List the directories used by gpgconf:

`gpgconf {{[-L|--list-dirs]}}`

- List all options of a component:

`gpgconf --list-options {{component}}`

- List programs and test whether they are runnable:

`gpgconf --check-programs`

- Reload a component:

`gpgconf --reload {{component}}`
