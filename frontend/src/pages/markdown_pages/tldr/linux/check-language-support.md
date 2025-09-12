---
title: "Check Language - List Missing Packages | Free DevTools"
name: check-language-support
path: /freedevtools/tldr/linux/check-language-support
canonical: "https://hexmos.com/freedevtools/tldr/linux/check-language-support/"
description: "Check language support with check-language-support. Identify missing language packages and locale support on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- missing language packages
- linux language support
- locale package manager
- ubuntu language check
- apt package manager
- debian language setup
- language support diagnostics
- language pack installation
- language package installer
- check language settings
features:
- Identify missing language packages
- Check locale support status
- List packages for specific locales
- Display installed language packages
- Diagnose language support issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# check-language-support

> Display a list of missing language packages on Ubuntu.
> More information: <https://manned.org/check-language-support>.

- Display a list of missing language packages based on installed software and enabled locales:

`check-language-support`

- List packages for a specific locale:

`check-language-support {{[-l|--language]}} {{en}}`

- Display installed packages as well as missing ones:

`check-language-support --show-installed`
