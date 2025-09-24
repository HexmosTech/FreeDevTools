---
title: "Manage PKCS #11 Modules - with modutil | Online Free DevTools by Hexmos"
name: modutil
path: /freedevtools/tldr/common/modutil
canonical: "https://hexmos.com/freedevtools/tldr/common/modutil/"
description: "Manage PKCS #11 modules with modutil, control NSS security module database. Add, list, and modify PKCS #11 module information. Free online tool, no registration required."
category: common
keywords:
- PKCS #11 module manager
- NSS database management
- security module control
- modutil linux
- PKCS #11 module add
- NSS database list
- firefox security module
- pkcs11 so module
- security module database
- pkcs11 configuration
features:
- Add PKCS #11 modules to NSS databases
- List installed PKCS #11 modules
- Manage module information in NSS databases
- Configure security modules for Firefox
- Interact with PKCS #11 security tokens
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# modutil

> Manage PKCS #11 module information within the NSS security module database.
> More information: <https://manned.org/modutil>.

- Add a PKCS #11 module to a NSS database (e.g. a Firefox profile: `$HOME/.mozilla/firefox/default-release`):

`modutil -dbdir sql:{{path/to/nss/db/dir}} -add "{{module_label}}" -libfile {{path/to/pkcs11_mod.so}}`

- List PKCS #11 modules in a NSS database:

`modutil -dbdir sql:{{path/to/nss/db/dir}} -list`
